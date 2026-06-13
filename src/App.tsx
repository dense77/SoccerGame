import { useEffect, useState } from 'react'

import './App.css'
import { createAppDatabase } from './app/createAppDatabase'
import type { SQLiteDatabaseClient } from './data/db/sqlite'
import { SaveRepository } from './data/repositories/SaveRepository'
import { TeamRepository } from './data/repositories/TeamRepository'
import { loadGameDataSummary } from './modules/bootstrap/loadGameDataSummary'
import { createCareerSave } from './modules/save-progress/createCareerSave'
import { loadSaveOverview } from './modules/save-progress/loadSaveOverview'
import type { DatabaseSummary, SaveOverview, Team } from './types/entities'

interface BootstrapState {
  status: 'loading' | 'ready' | 'error'
  summary: DatabaseSummary | null
  previewTeams: Team[]
  client: SQLiteDatabaseClient | null
  activeSave: SaveOverview | null
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

        if (cancelled) {
          return
        }

        setBootstrapState({
          status: 'ready',
          summary,
          previewTeams,
          client,
          activeSave,
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

    setBootstrapState((currentState) => ({
      ...currentState,
      activeSave,
      message: `Career save created for ${activeSave.selectedTeam.shortName}.`,
    }))
  }

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
        </div>
      )}

      <button className="btn" onClick={() => setShowModal(true)}>
        查看当前阶段
      </button>

      {showModal && (
        <div className="overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>当前实现进度</h2>
            <p>已完成浏览器 SQLite、选队开局、存档初始化和小组赛骨架展示。</p>
            <p>下一步会进入赛前阵容管理和赛事推进逻辑。</p>
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
