import { useEffect, useState } from 'react'

import './App.css'
import { createAppDatabase } from './app/createAppDatabase'
import { TeamRepository } from './data/repositories/TeamRepository'
import { loadGameDataSummary } from './modules/bootstrap/loadGameDataSummary'
import type { DatabaseSummary, Team } from './types/entities'

interface BootstrapState {
  status: 'loading' | 'ready' | 'error'
  summary: DatabaseSummary | null
  previewTeams: Team[]
  message: string
}

function App() {
  const [showModal, setShowModal] = useState(false)
  const [bootstrapState, setBootstrapState] = useState<BootstrapState>({
    status: 'loading',
    summary: null,
    previewTeams: [],
    message: 'Initializing browser SQLite and loading seed data...',
  })

  useEffect(() => {
    let cancelled = false

    const bootstrap = async () => {
      try {
        const client = await createAppDatabase()
        const teamRepository = new TeamRepository(client)
        const previewTeams = teamRepository.getAllTeams().slice(0, 4)
        const summary = loadGameDataSummary(client)

        if (cancelled) {
          return
        }

        setBootstrapState({
          status: 'ready',
          summary,
          previewTeams,
          message: 'SQLite ready. Seed data loaded for the current milestone.',
        })
      } catch (error) {
        if (cancelled) {
          return
        }

        setBootstrapState({
          status: 'error',
          summary: null,
          previewTeams: [],
          message: error instanceof Error ? error.message : 'Failed to initialize game database.',
        })
      }
    }

    void bootstrap()

    return () => {
      cancelled = true
    }
  }, [])

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

      <button className="btn" onClick={() => setShowModal(true)}>
        查看当前阶段
      </button>

      {showModal && (
        <div className="overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>当前实现进度</h2>
            <p>已完成浏览器 SQLite 基础设施、最小种子数据和仓储骨架。</p>
            <p>下一步会进入选队、存档和赛事推进主流程。</p>
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
