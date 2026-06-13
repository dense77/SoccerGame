import { useEffect, useState } from 'react'

import './App.css'
import { createAppDatabase } from './app/createAppDatabase'
import type { SQLiteDatabaseClient } from './data/db/sqlite'
import { SaveRepository } from './data/repositories/SaveRepository'
import { TeamRepository } from './data/repositories/TeamRepository'
import { loadGameDataSummary } from './modules/bootstrap/loadGameDataSummary'
import { playCurrentRound } from './modules/match-engine/playCurrentRound'
import { createCareerSave } from './modules/save-progress/createCareerSave'
import { loadSaveOverview } from './modules/save-progress/loadSaveOverview'
import { loadMatchSetupOverview } from './modules/team-management/loadMatchSetupOverview'
import type {
  DatabaseSummary,
  MatchSetupOverview,
  SaveMatchSetup,
  SaveOverview,
  Team,
} from './types/entities'

interface BootstrapState {
  status: 'loading' | 'ready' | 'error'
  summary: DatabaseSummary | null
  previewTeams: Team[]
  client: SQLiteDatabaseClient | null
  activeSave: SaveOverview | null
  activeMatchSetup: MatchSetupOverview | null
  message: string
}

function App() {
  const [showModal, setShowModal] = useState(false)
  const [bootstrapState, setBootstrapState] = useState<BootstrapState>({
    status: 'loading',
    summary: null,
    previewTeams: [],
    client: null,
    activeSave: null,
    activeMatchSetup: null,
    message: 'Initializing browser SQLite and loading seed data...',
  })

  useEffect(() => {
    let cancelled = false

    const bootstrap = async () => {
      try {
        const client = await createAppDatabase()
        const teamRepository = new TeamRepository(client)
        const saveRepository = new SaveRepository(client)
        const previewTeams = teamRepository.getAllTeams().slice(0, 4)
        const summary = loadGameDataSummary(client)
        const latestSave = saveRepository.getLatestSaveSlot()
        const activeSave = latestSave ? loadSaveOverview(client, latestSave.id) : null
        const activeMatchSetup = latestSave
          ? loadMatchSetupOverview(client, latestSave.id)
          : null

        if (cancelled) {
          return
        }

        setBootstrapState({
          status: 'ready',
          summary,
          previewTeams,
          client,
          activeSave,
          activeMatchSetup,
          message: latestSave
            ? 'SQLite ready. Existing save restored.'
            : 'SQLite ready. Choose a national team to start the tournament.',
        })
      } catch (error) {
        if (cancelled) {
          return
        }

        setBootstrapState({
          status: 'error',
          summary: null,
          previewTeams: [],
          client: null,
          activeSave: null,
          activeMatchSetup: null,
          message: error instanceof Error ? error.message : 'Failed to initialize game database.',
        })
      }
    }

    void bootstrap()

    return () => {
      cancelled = true
    }
  }, [])

  const handleCreateSave = (teamId: string) => {
    if (!bootstrapState.client) {
      return
    }

    const saveSlot = createCareerSave(bootstrapState.client, teamId)
    const activeSave = loadSaveOverview(bootstrapState.client, saveSlot.id)
    const activeMatchSetup = loadMatchSetupOverview(bootstrapState.client, saveSlot.id)

    setBootstrapState((currentState) => ({
      ...currentState,
      activeSave,
      activeMatchSetup,
      message: `Career save created for ${activeSave.selectedTeam.shortName}.`,
    }))
  }

  const handleToggleStarter = (playerId: string) => {
    const currentSetup = bootstrapState.activeMatchSetup
    if (!currentSetup || !bootstrapState.client || !bootstrapState.activeSave) {
      return
    }

    const selectedFormation = currentSetup.selectedFormation
    const starters = currentSetup.players.filter((player) => player.isStarter)
    const clickedPlayer = currentSetup.players.find((player) => player.player.id === playerId)

    if (!clickedPlayer) {
      return
    }

    const nextPlayers = currentSetup.players.map((player) => {
      if (player.player.id !== playerId) {
        return player
      }

      if (!player.isStarter && starters.length >= selectedFormation.slotLayout.length) {
        return player
      }

      return {
        ...player,
        isStarter: !player.isStarter,
      }
    })

    persistMatchSetup(nextPlayers, currentSetup.selectedFormation.id, currentSetup.selectedTactic.id)
  }

  const handleChangeFormation = (formationId: string) => {
    const currentSetup = bootstrapState.activeMatchSetup
    if (!currentSetup) {
      return
    }

    persistMatchSetup(currentSetup.players, formationId, currentSetup.selectedTactic.id)
  }

  const handleChangeTactic = (tacticProfileId: string) => {
    const currentSetup = bootstrapState.activeMatchSetup
    if (!currentSetup) {
      return
    }

    persistMatchSetup(currentSetup.players, currentSetup.selectedFormation.id, tacticProfileId)
  }

  const persistMatchSetup = (
    players: MatchSetupOverview['players'],
    formationId: string,
    tacticProfileId: string,
  ) => {
    if (!bootstrapState.client || !bootstrapState.activeSave || !bootstrapState.activeMatchSetup) {
      return
    }

    const starters = players.filter((player) => player.isStarter).map((player) => player.player.id)
    const bench = players.filter((player) => !player.isStarter).map((player) => player.player.id)

    const payload: SaveMatchSetup = {
      id: `${bootstrapState.activeSave.saveSlot.id}-${bootstrapState.activeMatchSetup.fixture.id}-${bootstrapState.activeMatchSetup.team.id}`,
      saveSlotId: bootstrapState.activeSave.saveSlot.id,
      fixtureId: bootstrapState.activeMatchSetup.fixture.id,
      teamId: bootstrapState.activeMatchSetup.team.id,
      formationId,
      tacticProfileId,
      startingPlayerIds: starters,
      benchPlayerIds: bench,
    }

    const saveRepository = new SaveRepository(bootstrapState.client)
    saveRepository.saveMatchSetup(payload)

    const activeMatchSetup = loadMatchSetupOverview(
      bootstrapState.client,
      bootstrapState.activeSave.saveSlot.id,
    )

    setBootstrapState((currentState) => ({
      ...currentState,
      activeMatchSetup,
      message: activeMatchSetup.validation.isValid
        ? 'Pre-match setup saved.'
        : activeMatchSetup.validation.errors[0],
    }))
  }

  const handlePlayCurrentRound = () => {
    if (!bootstrapState.client || !bootstrapState.activeSave || !bootstrapState.activeMatchSetup) {
      return
    }

    if (!bootstrapState.activeMatchSetup.validation.isValid) {
      setBootstrapState((currentState) => ({
        ...currentState,
        message: bootstrapState.activeMatchSetup?.validation.errors[0] ?? 'Current setup is invalid.',
      }))
      return
    }

    const snapshots = playCurrentRound(
      bootstrapState.client,
      bootstrapState.activeSave.saveSlot.id,
    )
    const refreshedSave = loadSaveOverview(
      bootstrapState.client,
      bootstrapState.activeSave.saveSlot.id,
    )
    const refreshedSetup =
      refreshedSave.saveSlot.currentRoundCode === 'completed'
        ? null
        : loadMatchSetupOverview(bootstrapState.client, bootstrapState.activeSave.saveSlot.id)

    setBootstrapState((currentState) => ({
      ...currentState,
      activeSave: refreshedSave,
      activeMatchSetup: refreshedSetup,
      message:
        refreshedSave.saveSlot.currentRoundCode === 'completed'
          ? `Group stage simulation finished. Last round recorded ${snapshots.length} matches.`
          : `Round complete. ${snapshots.length} matches recorded. Next up: ${refreshedSave.saveSlot.currentRoundCode}.`,
    }))
  }

  const teamNameById = (teamId: string | null): string => {
    const previewTeam = bootstrapState.previewTeams.find((team) => team.id === teamId)
    return previewTeam?.shortName ?? teamId ?? 'TBD'
  }

  const activeMatchSetup = bootstrapState.activeMatchSetup

  return (
    <div className="container">
      <h1 className="title">⚽ 世界杯模拟器</h1>
      <p>{bootstrapState.message}</p>

      {bootstrapState.summary && (
        <div>
          <p>
            Seed summary: {bootstrapState.summary.teamCount} teams, {bootstrapState.summary.playerCount} players,{' '}
            {bootstrapState.summary.fixtureCount} group fixtures, {bootstrapState.summary.eventTemplateCount} event templates.
          </p>
          <ul>
            {bootstrapState.previewTeams.map((team) => (
              <li key={team.id}>
                {team.shortName} ({team.fifaCode}) - overall {team.overallRating}
              </li>
            ))}
          </ul>
        </div>
      )}

      {bootstrapState.status === 'error' && <p>Database bootstrap failed. Check the console for details.</p>}

      {bootstrapState.status === 'ready' && !bootstrapState.activeSave && (
        <div className="team-grid">
          {bootstrapState.previewTeams.map((team) => (
            <button
              key={team.id}
              className="team-card"
              type="button"
              onClick={() => handleCreateSave(team.id)}
            >
              <strong>
                {team.shortName} ({team.fifaCode})
              </strong>
              <span>Overall {team.overallRating}</span>
              <span>Group {team.groupCode}</span>
            </button>
          ))}
        </div>
      )}

      {bootstrapState.activeSave && (
        <div className="dashboard">
          <section className="panel">
            <h2>{bootstrapState.activeSave.selectedTeam.shortName} Manager Save</h2>
            <p>
              Stage: {bootstrapState.activeSave.saveSlot.currentStage} | Round:{' '}
              {bootstrapState.activeSave.saveSlot.currentRoundCode}
            </p>
            <p>Roster initialized: {bootstrapState.activeSave.rosterSize} players.</p>
            {activeMatchSetup?.validation.isValid && (
              <button type="button" className="btn btn-compact" onClick={handlePlayCurrentRound}>
                Simulate Current Round
              </button>
            )}
          </section>

          <section className="panel">
            <h3>Group Table</h3>
            <ul className="compact-list">
              {bootstrapState.activeSave.groupStandings.map((entry) => (
                <li key={entry.team.id}>
                  <strong>{entry.isSelectedTeam ? `> ${entry.team.shortName}` : entry.team.shortName}</strong>{' '}
                  {entry.groupPoints} pts | GD {entry.goalDiff} | GF {entry.goalFor}
                </li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h3>Current Round Fixtures</h3>
            <ul className="compact-list">
              {bootstrapState.activeSave.currentFixtures.map((fixture) => {
                const homeTeam = bootstrapState.previewTeams.find(
                  (team) => team.id === fixture.homeTeamId,
                )
                const awayTeam = bootstrapState.previewTeams.find(
                  (team) => team.id === fixture.awayTeamId,
                )

                return (
                  <li key={fixture.id}>
                    {homeTeam?.shortName ?? fixture.homeTeamId} vs {awayTeam?.shortName ?? fixture.awayTeamId}
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="panel">
            <h3>Completed Matches</h3>
            <ul className="compact-list">
              {bootstrapState.activeSave.completedMatches.length === 0 && <li>No matches played yet.</li>}
              {bootstrapState.activeSave.completedMatches.map((snapshot) => (
                <li key={snapshot.id}>
                  {teamNameById(snapshot.homeTeamId)} {snapshot.homeScore}:{snapshot.awayScore}{' '}
                  {teamNameById(snapshot.awayTeamId)}
                </li>
              ))}
            </ul>
          </section>

          {activeMatchSetup && (
            <>
              <section className="panel">
                <h3>Pre-match Setup</h3>
                <p>Fixture: {teamNameById(activeMatchSetup.fixture.homeTeamId)} vs {teamNameById(activeMatchSetup.fixture.awayTeamId)}</p>
                <label className="control">
                  <span>Formation</span>
                  <select
                    value={activeMatchSetup.selectedFormation.id}
                    onChange={(event) => handleChangeFormation(event.target.value)}
                  >
                    {activeMatchSetup.formationOptions.map((formation) => (
                      <option key={formation.id} value={formation.id}>
                        {formation.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="control">
                  <span>Tactic</span>
                  <select
                    value={activeMatchSetup.selectedTactic.id}
                    onChange={(event) => handleChangeTactic(event.target.value)}
                  >
                    {activeMatchSetup.tacticOptions.map((tactic) => (
                      <option key={tactic.id} value={tactic.id}>
                        {tactic.name}
                      </option>
                    ))}
                  </select>
                </label>
                <p>
                  Starters: {activeMatchSetup.players.filter((player) => player.isStarter).length}/
                  {activeMatchSetup.selectedFormation.slotLayout.length}
                </p>
                {!activeMatchSetup.validation.isValid && (
                  <ul className="compact-list error-list">
                    {activeMatchSetup.validation.errors.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                )}
              </section>

              <section className="panel">
                <h3>Squad Management</h3>
                <ul className="squad-list">
                  {activeMatchSetup.players.map((entry) => (
                    <li key={entry.player.id} className={entry.isStarter ? 'starter' : 'reserve'}>
                      <div>
                        <strong>
                          #{entry.player.shirtNumber} {entry.player.name}
                        </strong>
                        <span>
                          {entry.player.primaryPosition} | OVR {entry.player.overallRating} | Fitness{' '}
                          {entry.state.fitnessValue}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="mini-btn"
                        onClick={() => handleToggleStarter(entry.player.id)}
                        disabled={
                          !entry.isStarter &&
                          activeMatchSetup.players.filter((player) => player.isStarter).length >=
                            activeMatchSetup.selectedFormation.slotLayout.length
                        }
                      >
                        {entry.isStarter ? 'Move to Bench' : 'Start'}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </div>
      )}

      <button className="btn" onClick={() => setShowModal(true)}>
        查看当前阶段
      </button>

      {showModal && (
        <div className="overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>当前实现进度</h2>
            <p>已完成浏览器 SQLite、选队开局、存档初始化、赛前阵容管理和战术配置。</p>
            <p>下一步会进入比赛引擎和赛事结果推进。</p>
            <button className="btn btn-close" onClick={() => setShowModal(false)}>
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
