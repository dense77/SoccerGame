import { useEffect, useState } from 'react'

import './App.css'
import { createAppDatabase } from './app/createAppDatabase'
import type { SQLiteDatabaseClient } from './data/db/sqlite'
import { SaveRepository } from './data/repositories/SaveRepository'
import { TeamRepository } from './data/repositories/TeamRepository'
import { loadGameDataSummary } from './modules/bootstrap/loadGameDataSummary'
import { loadMatchEventSelection } from './modules/event-system/loadMatchEventSelection'
import { playCurrentRound } from './modules/match-engine/playCurrentRound'
import { createCareerSave } from './modules/save-progress/createCareerSave'
import { loadSaveOverview } from './modules/save-progress/loadSaveOverview'
import { loadMatchSetupOverview } from './modules/team-management/loadMatchSetupOverview'
import type {
  DatabaseSummary,
  MatchEventSelection,
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
  activeEventSelection: MatchEventSelection | null
  message: string
}

function isSavePlayable(status: string): boolean {
  return status === 'active'
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
    activeEventSelection: null,
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
        const activeMatchSetup = latestSave && isSavePlayable(latestSave.status)
          ? loadMatchSetupOverview(client, latestSave.id)
          : null
        const activeEventSelection = activeMatchSetup
          ? loadMatchEventSelection(client, activeMatchSetup)
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
          activeEventSelection,
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
          activeEventSelection: null,
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
    const activeEventSelection = loadMatchEventSelection(
      bootstrapState.client,
      activeMatchSetup,
    )

    setBootstrapState((currentState) => ({
      ...currentState,
      activeSave,
      activeMatchSetup,
      activeEventSelection,
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
    const activeEventSelection = loadMatchEventSelection(
      bootstrapState.client,
      activeMatchSetup,
      bootstrapState.activeEventSelection?.selectedOptionId ?? null,
    )

    setBootstrapState((currentState) => ({
      ...currentState,
      activeMatchSetup,
      activeEventSelection,
      message: activeMatchSetup.validation.isValid
        ? 'Pre-match setup saved.'
        : activeMatchSetup.validation.errors[0],
    }))
  }

  const handleSelectEventOption = (optionId: string) => {
    if (!bootstrapState.client || !bootstrapState.activeMatchSetup || !bootstrapState.activeEventSelection) {
      return
    }

    const nextSelection = loadMatchEventSelection(
      bootstrapState.client,
      bootstrapState.activeMatchSetup,
      optionId,
    )

    setBootstrapState((currentState) => ({
      ...currentState,
      activeEventSelection: nextSelection,
      message: nextSelection
        ? `Selected event option: ${nextSelection.options.find((option) => option.id === optionId)?.label ?? optionId}.`
        : currentState.message,
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
      bootstrapState.activeEventSelection,
    )
    const refreshedSave = loadSaveOverview(
      bootstrapState.client,
      bootstrapState.activeSave.saveSlot.id,
    )
    const refreshedSetup =
      !isSavePlayable(refreshedSave.saveSlot.status)
        ? null
        : loadMatchSetupOverview(bootstrapState.client, bootstrapState.activeSave.saveSlot.id)
    const refreshedEventSelection =
      refreshedSetup && isSavePlayable(refreshedSave.saveSlot.status)
        ? loadMatchEventSelection(bootstrapState.client, refreshedSetup)
        : null

    setBootstrapState((currentState) => ({
      ...currentState,
      activeSave: refreshedSave,
      activeMatchSetup: refreshedSetup,
      activeEventSelection: refreshedEventSelection,
      message:
        !isSavePlayable(refreshedSave.saveSlot.status)
          ? refreshedSave.saveSlot.status === 'champion'
            ? `${refreshedSave.selectedTeam.shortName} won the World Cup.`
            : refreshedSave.advancement?.selectedTeamOutcome === 'qualified'
              ? `${refreshedSave.selectedTeam.shortName} reached the knockout stage, but the tournament is already settled.`
              : `Tournament complete. ${refreshedSave.selectedTeam.shortName} has been eliminated.`
          : refreshedSave.saveSlot.currentStage === 'knockout'
            ? `Knockout final ready. ${refreshedSave.selectedTeam.shortName} will play for the title.`
          : `Round complete. ${snapshots.length} matches recorded. Next up: ${refreshedSave.saveSlot.currentRoundCode}.`,
    }))
  }

  const teamNameById = (teamId: string | null): string => {
    const previewTeam = bootstrapState.previewTeams.find((team) => team.id === teamId)
    return previewTeam?.shortName ?? teamId ?? 'TBD'
  }

  const activeMatchSetup = bootstrapState.activeMatchSetup
  const activeEventSelection = bootstrapState.activeEventSelection
  const latestPostMatchReport = bootstrapState.activeSave?.latestPostMatchReport ?? null

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
            <p>Status: {bootstrapState.activeSave.saveSlot.status}</p>
            <p>Tournament outcome: {bootstrapState.activeSave.tournamentOutcome}</p>
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
                  {entry.groupPoints} pts | GD {entry.goalDiff} | GF {entry.goalFor} |{' '}
                  {entry.isQualified ? 'Qualified' : entry.isEliminated ? 'Eliminated' : 'Pending'}
                </li>
              ))}
            </ul>
          </section>

          {bootstrapState.activeSave.advancement && (
            <section className="panel">
              <h3>Group Advancement</h3>
              <p>
                Group {bootstrapState.activeSave.advancement.groupCode}: qualified{' '}
                {bootstrapState.activeSave.advancement.qualifiedTeamIds
                  .map((teamId) => teamNameById(teamId))
                  .join(', ')}
              </p>
              <p>
                Selected team outcome:{' '}
                {bootstrapState.activeSave.advancement.selectedTeamOutcome.toUpperCase()}
              </p>
            </section>
          )}

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

          {latestPostMatchReport && (
            <section className="panel">
              <h3>Latest Post-match Report</h3>
              <p>
                {latestPostMatchReport.teamName} {latestPostMatchReport.scoreline} {latestPostMatchReport.opponentTeamName} |{' '}
                {latestPostMatchReport.resultLabel.toUpperCase()}
              </p>
              <p>
                Fitness: starters {latestPostMatchReport.fitnessChangeSummary.startersAverageDelta},
                bench {latestPostMatchReport.fitnessChangeSummary.benchAverageDelta}. Most affected:{' '}
                {latestPostMatchReport.fitnessChangeSummary.mostAffectedPlayer ?? 'n/a'}.
              </p>
              <p>
                Morale: average {latestPostMatchReport.moraleChangeSummary.teamAverageDelta}. Boosted:{' '}
                {latestPostMatchReport.moraleChangeSummary.mostBoostedPlayer ?? 'n/a'}, dropped:{' '}
                {latestPostMatchReport.moraleChangeSummary.mostDroppedPlayer ?? 'n/a'}.
              </p>
              {latestPostMatchReport.eventReport && (
                <div className="feedback-block">
                  <strong>Event outcome</strong>
                  <span>
                    {latestPostMatchReport.eventReport.title} - {latestPostMatchReport.eventReport.optionLabel}
                  </span>
                  <span>
                    Attack {latestPostMatchReport.eventReport.modifier.attackDelta >= 0 ? '+' : ''}
                    {latestPostMatchReport.eventReport.modifier.attackDelta} / Defense{' '}
                    {latestPostMatchReport.eventReport.modifier.defenseDelta >= 0 ? '+' : ''}
                    {latestPostMatchReport.eventReport.modifier.defenseDelta} / Morale{' '}
                    {latestPostMatchReport.eventReport.modifier.moraleDelta >= 0 ? '+' : ''}
                    {latestPostMatchReport.eventReport.modifier.moraleDelta}
                  </span>
                </div>
              )}
              <ul className="compact-list status-shift-list">
                {latestPostMatchReport.playerChanges.slice(0, 5).map((change) => (
                  <li key={change.playerId}>
                    {change.playerName} | Fit {change.fitnessBefore}→{change.fitnessAfter} | Morale{' '}
                    {change.moraleBefore}→{change.moraleAfter} | {change.isStarter ? 'Starter' : 'Bench'}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {activeMatchSetup && (
            <>
              {activeEventSelection && (
                <section className="panel">
                  <h3>Key Event</h3>
                  <p>
                    {activeEventSelection.template.title} ({activeEventSelection.template.category})
                  </p>
                  <p>{activeEventSelection.template.textTemplate}</p>
                  <div className="option-list">
                    {activeEventSelection.options.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        className={
                          option.id === activeEventSelection.selectedOptionId
                            ? 'option-btn option-btn-active'
                            : 'option-btn'
                        }
                        onClick={() => handleSelectEventOption(option.id)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </section>
              )}

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
                          {entry.state.fitnessValue} | Morale {entry.state.moraleValue}
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
            <p>已完成浏览器 SQLite、选队开局、存档初始化、赛前阵容管理、战术配置和基础比赛结算。</p>
            <p>当前阶段已经接入关键事件选择、小组赛晋级判断和最小淘汰赛骨架，下一步会继续扩展完整淘汰赛树。</p>
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
