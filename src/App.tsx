import { useEffect, useState } from 'react'

import './App.css'
import { createAppDatabase } from './app/createAppDatabase'
import {
  translateEventCategory,
  translatePosition,
  translateResultLabel,
  translateRoundCode,
  translateSaveStatus,
  translateSelectedTeamOutcome,
  translateStage,
  translateTournamentOutcome,
} from './app/displayText'
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
  SaveSlot,
  SaveMatchSetup,
  SaveOverview,
  Team,
} from './types/entities'

interface BootstrapState {
  status: 'loading' | 'ready' | 'error'
  summary: DatabaseSummary | null
  previewTeams: Team[]
  client: SQLiteDatabaseClient | null
  saveSlots: SaveSlot[]
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
    saveSlots: [],
    activeSave: null,
    activeMatchSetup: null,
    activeEventSelection: null,
    message: '正在初始化浏览器 SQLite 并加载种子数据……',
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
        const saveSlots = saveRepository.getAllSaveSlots()
        const latestSave = saveSlots[0] ?? null
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
          saveSlots,
          activeSave,
          activeMatchSetup,
          activeEventSelection,
          message: latestSave
            ? 'SQLite 已就绪，已恢复现有存档。'
            : 'SQLite 已就绪，请选择一支国家队开始世界杯征程。',
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
          saveSlots: [],
          activeSave: null,
          activeMatchSetup: null,
          activeEventSelection: null,
          message: error instanceof Error ? error.message : '游戏数据库初始化失败。',
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
      saveSlots: [saveSlot, ...currentState.saveSlots],
      activeSave,
      activeMatchSetup,
      activeEventSelection,
      message: `已为 ${activeSave.selectedTeam.shortName} 创建主教练存档。`,
    }))
  }

  const handleSelectSave = (saveSlotId: string) => {
    if (!bootstrapState.client) {
      return
    }

    const activeSave = loadSaveOverview(bootstrapState.client, saveSlotId)
    const activeMatchSetup = isSavePlayable(activeSave.saveSlot.status)
      ? loadMatchSetupOverview(bootstrapState.client, saveSlotId)
      : null
    const activeEventSelection = activeMatchSetup
      ? loadMatchEventSelection(bootstrapState.client, activeMatchSetup)
      : null

    setBootstrapState((currentState) => ({
      ...currentState,
      activeSave,
      activeMatchSetup,
      activeEventSelection,
      message: `已载入 ${activeSave.selectedTeam.shortName} 的存档。`,
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
        ? '赛前设置已保存。'
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
        ? `已选择事件选项：${nextSelection.options.find((option) => option.id === optionId)?.label ?? optionId}。`
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
        message: bootstrapState.activeMatchSetup?.validation.errors[0] ?? '当前阵容设置无效。',
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
      saveSlots: currentState.saveSlots.map((entry) =>
        entry.id === refreshedSave.saveSlot.id ? refreshedSave.saveSlot : entry,
      ),
      activeSave: refreshedSave,
      activeMatchSetup: refreshedSetup,
      activeEventSelection: refreshedEventSelection,
      message:
        !isSavePlayable(refreshedSave.saveSlot.status)
          ? refreshedSave.saveSlot.status === 'champion'
            ? `${refreshedSave.selectedTeam.shortName} 夺得了世界杯冠军。`
            : refreshedSave.advancement?.selectedTeamOutcome === 'qualified'
              ? `${refreshedSave.selectedTeam.shortName} 已打入淘汰赛，但赛事结果已经尘埃落定。`
              : `赛事结束，${refreshedSave.selectedTeam.shortName} 已被淘汰。`
          : refreshedSave.saveSlot.currentStage === 'knockout'
            ? refreshedSave.saveSlot.currentRoundCode === 'knockout-semi'
              ? `淘汰赛半决赛已准备就绪，${refreshedSave.selectedTeam.shortName} 距离冠军还差两场胜利。`
              : `淘汰赛决赛已准备就绪，${refreshedSave.selectedTeam.shortName} 将向冠军发起冲击。`
          : `本轮完成，已记录 ${snapshots.length} 场比赛。下一轮：${translateRoundCode(refreshedSave.saveSlot.currentRoundCode)}。`,
    }))
  }

  const teamNameById = (teamId: string | null): string => {
    const previewTeam = bootstrapState.previewTeams.find((team) => team.id === teamId)
    return previewTeam?.shortName ?? teamId ?? '待定'
  }

  const activeMatchSetup = bootstrapState.activeMatchSetup
  const activeEventSelection = bootstrapState.activeEventSelection
  const latestPostMatchReport = bootstrapState.activeSave?.latestPostMatchReport ?? null
  const tournamentSummary = bootstrapState.activeSave?.tournamentSummary ?? null

  return (
    <div className="container">
      <h1 className="title">⚽ 世界杯模拟器</h1>
      <p>{bootstrapState.message}</p>

      {bootstrapState.summary && (
        <div>
          <p>
            种子数据概览：{bootstrapState.summary.teamCount} 支球队，{bootstrapState.summary.playerCount} 名球员，
            {bootstrapState.summary.fixtureCount} 场赛程，{bootstrapState.summary.eventTemplateCount} 个事件模板。
          </p>
          <ul>
            {bootstrapState.previewTeams.map((team) => (
              <li key={team.id}>
                {team.shortName}（{team.fifaCode}）- 综合评分 {team.overallRating}
              </li>
            ))}
          </ul>
        </div>
      )}

      {bootstrapState.status === 'error' && <p>数据库启动失败，请查看控制台日志。</p>}

      {bootstrapState.status === 'ready' && !bootstrapState.activeSave && (
        <>
          {bootstrapState.saveSlots.length > 0 && (
            <section className="panel save-list-panel">
              <h3>继续游戏</h3>
              <div className="save-list">
                {bootstrapState.saveSlots.map((saveSlot) => (
                  <button
                    key={saveSlot.id}
                    type="button"
                    className="option-btn"
                    onClick={() => handleSelectSave(saveSlot.id)}
                  >
                    {teamNameById(saveSlot.selectedTeamId)} | {translateStage(saveSlot.currentStage)} |{' '}
                    {translateRoundCode(saveSlot.currentRoundCode)} | {translateSaveStatus(saveSlot.status)}
                  </button>
                ))}
              </div>
            </section>
          )}

          <div className="team-grid">
            {bootstrapState.previewTeams.map((team) => (
              <button
                key={team.id}
                className="team-card"
                type="button"
                onClick={() => handleCreateSave(team.id)}
              >
                <strong>
                  {team.shortName}（{team.fifaCode}）
                </strong>
                <span>综合评分 {team.overallRating}</span>
                <span>{team.groupCode} 组</span>
              </button>
            ))}
          </div>
        </>
      )}

      {bootstrapState.activeSave && (
        <div className="dashboard">
          <section className="panel">
            <h2>{bootstrapState.activeSave.selectedTeam.shortName} 主教练存档</h2>
            <p>
              阶段：{translateStage(bootstrapState.activeSave.saveSlot.currentStage)} | 轮次：
              {translateRoundCode(bootstrapState.activeSave.saveSlot.currentRoundCode)}
            </p>
            <p>状态：{translateSaveStatus(bootstrapState.activeSave.saveSlot.status)}</p>
            <p>赛事结果：{translateTournamentOutcome(bootstrapState.activeSave.tournamentOutcome)}</p>
            <p>已初始化球员名单：{bootstrapState.activeSave.rosterSize} 人。</p>
            <button
              type="button"
              className="btn btn-compact btn-secondary"
              onClick={() =>
                setBootstrapState((currentState) => ({
                  ...currentState,
                  activeSave: null,
                  activeMatchSetup: null,
                  activeEventSelection: null,
                  message: '请选择存档继续，或开始新的世界杯征程。',
                }))
              }
            >
              切换存档 / 新游戏
            </button>
            {activeMatchSetup?.validation.isValid && (
              <button type="button" className="btn btn-compact" onClick={handlePlayCurrentRound}>
                模拟当前轮次
              </button>
            )}
          </section>

          <section className="panel">
            <h3>小组积分榜</h3>
            <ul className="compact-list">
              {bootstrapState.activeSave.groupStandings.map((entry) => (
                <li key={entry.team.id}>
                  <strong>{entry.isSelectedTeam ? `> ${entry.team.shortName}` : entry.team.shortName}</strong>{' '}
                  {entry.groupPoints} 分 | 净胜球 {entry.goalDiff} | 进球 {entry.goalFor} |{' '}
                  {entry.isQualified ? '晋级' : entry.isEliminated ? '淘汰' : '待定'}
                </li>
              ))}
            </ul>
          </section>

          {bootstrapState.activeSave.advancement && (
            <section className="panel">
              <h3>小组出线情况</h3>
              <p>
                {bootstrapState.activeSave.advancement.groupCode} 组晋级球队：
                {bootstrapState.activeSave.advancement.qualifiedTeamIds
                  .map((teamId) => teamNameById(teamId))
                  .join(', ')}
              </p>
              <p>
                所选球队结果：{translateSelectedTeamOutcome(bootstrapState.activeSave.advancement.selectedTeamOutcome)}
              </p>
            </section>
          )}

          {tournamentSummary && (
            <section className={`panel tournament-summary tournament-summary-${tournamentSummary.tone}`}>
              <h3>{tournamentSummary.title}</h3>
              <p>{tournamentSummary.detail}</p>
            </section>
          )}

          <section className="panel">
            <h3>当前轮次赛程</h3>
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
                    {homeTeam?.shortName ?? fixture.homeTeamId} 对阵 {awayTeam?.shortName ?? fixture.awayTeamId}
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="panel">
            <h3>已完成比赛</h3>
            <ul className="compact-list">
              {bootstrapState.activeSave.completedMatches.length === 0 && <li>暂时还没有已完成的比赛。</li>}
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
              <h3>最新赛后简报</h3>
              <p>
                {latestPostMatchReport.teamName} {latestPostMatchReport.scoreline} {latestPostMatchReport.opponentTeamName} |{' '}
                {translateResultLabel(latestPostMatchReport.resultLabel)}
              </p>
              <p>
                体能：首发 {latestPostMatchReport.fitnessChangeSummary.startersAverageDelta}，替补{' '}
                {latestPostMatchReport.fitnessChangeSummary.benchAverageDelta}。影响最大：
                {latestPostMatchReport.fitnessChangeSummary.mostAffectedPlayer ?? '无'}。
              </p>
              <p>
                士气：全队平均 {latestPostMatchReport.moraleChangeSummary.teamAverageDelta}。提升最大：
                {latestPostMatchReport.moraleChangeSummary.mostBoostedPlayer ?? '无'}，下降最多：
                {latestPostMatchReport.moraleChangeSummary.mostDroppedPlayer ?? '无'}。
              </p>
              {latestPostMatchReport.eventReport && (
                <div className="feedback-block">
                  <strong>事件结果</strong>
                  <span>
                    {latestPostMatchReport.eventReport.title} - {latestPostMatchReport.eventReport.optionLabel}
                  </span>
                  <span>
                    进攻 {latestPostMatchReport.eventReport.modifier.attackDelta >= 0 ? '+' : ''}
                    {latestPostMatchReport.eventReport.modifier.attackDelta} / 防守{' '}
                    {latestPostMatchReport.eventReport.modifier.defenseDelta >= 0 ? '+' : ''}
                    {latestPostMatchReport.eventReport.modifier.defenseDelta} / 士气{' '}
                    {latestPostMatchReport.eventReport.modifier.moraleDelta >= 0 ? '+' : ''}
                    {latestPostMatchReport.eventReport.modifier.moraleDelta}
                  </span>
                </div>
              )}
              <ul className="compact-list status-shift-list">
                {latestPostMatchReport.playerChanges.slice(0, 5).map((change) => (
                  <li key={change.playerId}>
                    {change.playerName} | 体能 {change.fitnessBefore}→{change.fitnessAfter} | 士气{' '}
                    {change.moraleBefore}→{change.moraleAfter} | {change.isStarter ? '首发' : '替补'}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {activeMatchSetup && (
            <>
              {activeEventSelection && (
                <section className="panel">
                  <h3>关键事件</h3>
                  <p>
                    {activeEventSelection.template.title}（{translateEventCategory(activeEventSelection.template.category)}）
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
                <h3>赛前设置</h3>
                <p>对阵：{teamNameById(activeMatchSetup.fixture.homeTeamId)} 对阵 {teamNameById(activeMatchSetup.fixture.awayTeamId)}</p>
                <label className="control">
                  <span>阵型</span>
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
                  <span>战术</span>
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
                  首发人数：{activeMatchSetup.players.filter((player) => player.isStarter).length}/
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
                <h3>阵容管理</h3>
                <ul className="squad-list">
                  {activeMatchSetup.players.map((entry) => (
                    <li key={entry.player.id} className={entry.isStarter ? 'starter' : 'reserve'}>
                      <div>
                        <strong>
                          #{entry.player.shirtNumber} {entry.player.name}
                        </strong>
                        <span>
                          {translatePosition(entry.player.primaryPosition)} | 综合 {entry.player.overallRating} | 体能{' '}
                          {entry.state.fitnessValue} | 士气 {entry.state.moraleValue}
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
                        {entry.isStarter ? '移至替补' : '设为首发'}
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
            <p>当前阶段已经接入关键事件选择、小组赛晋级判断和完整样例淘汰赛树，下一步会继续扩展更多赛事数据。</p>
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
