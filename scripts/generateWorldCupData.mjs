import fs from 'node:fs'
import path from 'node:path'
import { toMainlandChinesePlayerName } from './playerNameZhCn.mjs'

const OUTPUT_FILE = path.resolve('src/data/seeds/worldCupData.generated.ts')
const SQUADS_SOURCE = path.join(process.env.TEMP ?? '', 'wc2026_squads.json')
const THIRD_PLACE_SOURCE = path.join(process.env.TEMP ?? '', 'wc2026_third_place_table.json')
const SEED_TIMESTAMP = '2026-06-14T00:00:00.000Z'

const preservedTeamIds = {
  ARG: 'team-arg-sample',
  USA: 'team-usa-sample',
  JPN: 'team-jpn-sample',
  SEN: 'team-sen-sample',
}

const teamMetadata = {
  'Algeria': { code: 'ALG', shortName: '阿尔及利亚', overallBase: 80, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'counter_attack'] },
  'Argentina': { code: 'ARG', shortName: '阿根廷', overallBase: 90, formationId: 'formation-4-3-3', styleTags: ['control', 'central_control'] },
  'Australia': { code: 'AUS', shortName: '澳大利亚', overallBase: 77, formationId: 'formation-4-2-3-1', styleTags: ['direct', 'athletic'] },
  'Austria': { code: 'AUT', shortName: '奥地利', overallBase: 82, formationId: 'formation-4-2-3-1', styleTags: ['high_press', 'central_control'] },
  'Belgium': { code: 'BEL', shortName: '比利时', overallBase: 84, formationId: 'formation-4-3-3', styleTags: ['control', 'wing_play'] },
  'Bosnia and Herzegovina': { code: 'BIH', shortName: '波黑', overallBase: 77, formationId: 'formation-4-2-3-1', styleTags: ['direct', 'compact'] },
  'Brazil': { code: 'BRA', shortName: '巴西', overallBase: 88, formationId: 'formation-4-3-3', styleTags: ['wing_play', 'high_press'] },
  'Canada': { code: 'CAN', shortName: '加拿大', overallBase: 79, formationId: 'formation-4-3-3', styleTags: ['high_press', 'direct'] },
  'Cape Verde': { code: 'CPV', shortName: '佛得角', overallBase: 75, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'counter_attack'] },
  'Colombia': { code: 'COL', shortName: '哥伦比亚', overallBase: 84, formationId: 'formation-4-2-3-1', styleTags: ['control', 'wing_play'] },
  'Croatia': { code: 'CRO', shortName: '克罗地亚', overallBase: 84, formationId: 'formation-4-3-3', styleTags: ['control', 'central_control'] },
  'Curaçao': { code: 'CUW', shortName: '库拉索', overallBase: 72, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'direct'] },
  'Czech Republic': { code: 'CZE', shortName: '捷克', overallBase: 79, formationId: 'formation-4-2-3-1', styleTags: ['direct', 'set_piece'] },
  'DR Congo': { code: 'COD', shortName: '刚果（金）', overallBase: 78, formationId: 'formation-4-3-3', styleTags: ['athletic', 'counter_attack'] },
  'Ecuador': { code: 'ECU', shortName: '厄瓜多尔', overallBase: 81, formationId: 'formation-4-3-3', styleTags: ['athletic', 'compact'] },
  'Egypt': { code: 'EGY', shortName: '埃及', overallBase: 80, formationId: 'formation-4-2-3-1', styleTags: ['counter_attack', 'direct'] },
  'England': { code: 'ENG', shortName: '英格兰', overallBase: 89, formationId: 'formation-4-3-3', styleTags: ['wing_play', 'high_press'] },
  'France': { code: 'FRA', shortName: '法国', overallBase: 91, formationId: 'formation-4-3-3', styleTags: ['athletic', 'counter_attack'] },
  'Germany': { code: 'GER', shortName: '德国', overallBase: 87, formationId: 'formation-4-2-3-1', styleTags: ['high_press', 'control'] },
  'Ghana': { code: 'GHA', shortName: '加纳', overallBase: 78, formationId: 'formation-4-2-3-1', styleTags: ['athletic', 'counter_attack'] },
  'Haiti': { code: 'HAI', shortName: '海地', overallBase: 70, formationId: 'formation-4-4-2', styleTags: ['direct', 'compact'] },
  'Iran': { code: 'IRN', shortName: '伊朗', overallBase: 79, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'counter_attack'] },
  'Iraq': { code: 'IRQ', shortName: '伊拉克', overallBase: 75, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'direct'] },
  'Ivory Coast': { code: 'CIV', shortName: '科特迪瓦', overallBase: 81, formationId: 'formation-4-3-3', styleTags: ['athletic', 'wing_play'] },
  'Japan': { code: 'JPN', shortName: '日本', overallBase: 82, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'high_press'] },
  'Jordan': { code: 'JOR', shortName: '约旦', overallBase: 74, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'counter_attack'] },
  'Mexico': { code: 'MEX', shortName: '墨西哥', overallBase: 80, formationId: 'formation-4-3-3', styleTags: ['wing_play', 'direct'] },
  'Morocco': { code: 'MAR', shortName: '摩洛哥', overallBase: 84, formationId: 'formation-4-3-3', styleTags: ['compact', 'counter_attack'] },
  'Netherlands': { code: 'NED', shortName: '荷兰', overallBase: 86, formationId: 'formation-3-4-3', styleTags: ['control', 'wing_play'] },
  'New Zealand': { code: 'NZL', shortName: '新西兰', overallBase: 72, formationId: 'formation-4-4-2', styleTags: ['direct', 'set_piece'] },
  'Norway': { code: 'NOR', shortName: '挪威', overallBase: 82, formationId: 'formation-4-3-3', styleTags: ['direct', 'wing_play'] },
  'Panama': { code: 'PAN', shortName: '巴拿马', overallBase: 76, formationId: 'formation-4-4-2', styleTags: ['compact', 'athletic'] },
  'Paraguay': { code: 'PAR', shortName: '巴拉圭', overallBase: 78, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'set_piece'] },
  'Portugal': { code: 'POR', shortName: '葡萄牙', overallBase: 87, formationId: 'formation-4-3-3', styleTags: ['control', 'wing_play'] },
  'Qatar': { code: 'QAT', shortName: '卡塔尔', overallBase: 75, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'central_control'] },
  'Saudi Arabia': { code: 'KSA', shortName: '沙特阿拉伯', overallBase: 77, formationId: 'formation-4-2-3-1', styleTags: ['direct', 'high_press'] },
  'Scotland': { code: 'SCO', shortName: '苏格兰', overallBase: 80, formationId: 'formation-3-5-2', styleTags: ['set_piece', 'direct'] },
  'Senegal': { code: 'SEN', shortName: '塞内加尔', overallBase: 82, formationId: 'formation-4-3-3', styleTags: ['athletic', 'counter_attack'] },
  'South Africa': { code: 'RSA', shortName: '南非', overallBase: 74, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'athletic'] },
  'South Korea': { code: 'KOR', shortName: '韩国', overallBase: 79, formationId: 'formation-4-2-3-1', styleTags: ['high_press', 'direct'] },
  'Spain': { code: 'ESP', shortName: '西班牙', overallBase: 88, formationId: 'formation-4-3-3', styleTags: ['control', 'central_control'] },
  'Sweden': { code: 'SWE', shortName: '瑞典', overallBase: 79, formationId: 'formation-4-4-2', styleTags: ['direct', 'set_piece'] },
  'Switzerland': { code: 'SUI', shortName: '瑞士', overallBase: 82, formationId: 'formation-3-4-3', styleTags: ['compact', 'counter_attack'] },
  'Tunisia': { code: 'TUN', shortName: '突尼斯', overallBase: 76, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'direct'] },
  'Turkey': { code: 'TUR', shortName: '土耳其', overallBase: 81, formationId: 'formation-4-2-3-1', styleTags: ['athletic', 'wing_play'] },
  'United States': { code: 'USA', shortName: '美国', overallBase: 81, formationId: 'formation-4-3-3', styleTags: ['high_press', 'wing_play'] },
  'Uruguay': { code: 'URU', shortName: '乌拉圭', overallBase: 85, formationId: 'formation-3-5-2', styleTags: ['athletic', 'counter_attack'] },
  'Uzbekistan': { code: 'UZB', shortName: '乌兹别克斯坦', overallBase: 76, formationId: 'formation-4-2-3-1', styleTags: ['compact', 'direct'] },
}

const eliteClubKeywords = new Map([
  ['Real Madrid', 4],
  ['Barcelona', 4],
  ['Manchester City', 4],
  ['Liverpool', 4],
  ['Arsenal', 4],
  ['Bayern Munich', 4],
  ['Paris Saint-Germain', 4],
  ['Inter Milan', 4],
  ['Atlético Madrid', 4],
  ['Atletico Madrid', 4],
  ['Chelsea', 3],
  ['Tottenham', 3],
  ['Juventus', 3],
  ['Milan', 3],
  ['Borussia Dortmund', 3],
  ['Bayer Leverkusen', 3],
  ['Napoli', 3],
  ['Benfica', 3],
  ['Porto', 3],
  ['Sporting CP', 3],
  ['PSV Eindhoven', 3],
  ['Ajax', 3],
  ['Newcastle United', 3],
  ['Aston Villa', 3],
  ['Monaco', 3],
])

const leagueBonusByCountry = {
  ENG: 2.4,
  ESP: 2.4,
  GER: 2.3,
  ITA: 2.3,
  FRA: 2.2,
  NED: 1.8,
  POR: 1.8,
  BEL: 1.5,
  TUR: 1.5,
  BRA: 1.2,
  ARG: 1.1,
  USA: 1,
  MEX: 1,
  KSA: 0.9,
}

const starBoosts = {
  'achraf hakimi': 4,
  'alexis mac allister': 2,
  'alisson': 3,
  'antonio rudiger': 2,
  'arda guler': 3,
  'bernardo silva': 3,
  'bruno fernandes': 4,
  'bukayo saka': 3,
  'cole palmer': 3,
  'declan rice': 2,
  'eduardo camavinga': 2,
  'eder militao': 2,
  'enzo fernandez': 2,
  'federico valverde': 3,
  'florian wirtz': 4,
  'gianluigi donnarumma': 3,
  'granit xhaka': 2,
  'harry kane': 4,
  'iliman ndiaye': 2,
  'jamal musiala': 4,
  'jude bellingham': 5,
  'julian alvarez': 3,
  'kylian mbappe': 5,
  'lautaro martinez': 4,
  'lamine yamal': 5,
  'leandro trossard': 2,
  'lionel messi': 5,
  'luka modric': 3,
  'martin odegaard': 4,
  'mohamed صلاح': 4,
  'mohamed salah': 4,
  'pedri': 3,
  'phil foden': 3,
  'rafinha': 2,
  'rodri': 5,
  'rodrygo': 3,
  'ronald araujo': 3,
  'santiago gimenez': 2,
  'son heung-min': 4,
  'son heung min': 4,
  'takefusa kubo': 3,
  'theo hernandez': 2,
  'thibaut courtois': 4,
  'trent alexander-arnold': 3,
  'trent alexander arnold': 3,
  'vinicius junior': 5,
  'vinicius jr.': 5,
  'virgil van dijk': 4,
  'vitinha': 2,
  'xavi simons': 3,
}

function clamp(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, value))
}

function slugify(input) {
  return input
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

function parseTopLevelParams(raw) {
  const parts = []
  let current = ''
  let braceDepth = 0
  let bracketDepth = 0

  for (let index = 0; index < raw.length; index += 1) {
    const currentChar = raw[index]
    const nextChar = raw[index + 1] ?? ''

    if (currentChar === '{' && nextChar === '{') {
      braceDepth += 1
      current += currentChar
      continue
    }

    if (currentChar === '}' && nextChar === '}' && braceDepth > 0) {
      braceDepth -= 1
      current += currentChar
      continue
    }

    if (currentChar === '[' && nextChar === '[') {
      bracketDepth += 1
      current += currentChar
      continue
    }

    if (currentChar === ']' && nextChar === ']' && bracketDepth > 0) {
      bracketDepth -= 1
      current += currentChar
      continue
    }

    if (currentChar === '|' && braceDepth === 0 && bracketDepth === 0) {
      parts.push(current)
      current = ''
      continue
    }

    current += currentChar
  }

  parts.push(current)

  return parts
}

function parseTemplateFields(raw) {
  const fields = {}

  parseTopLevelParams(raw).forEach((part) => {
    const separatorIndex = part.indexOf('=')
    if (separatorIndex === -1) {
      return
    }

    const key = part.slice(0, separatorIndex).trim()
    const value = part.slice(separatorIndex + 1).trim()
    fields[key] = value
  })

  return fields
}

function stripMarkup(value) {
  return value
    .replace(/<ref[^>]*>.*?<\/ref>/g, '')
    .replace(/<ref[^/]*\/>/g, '')
    .replace(/\{\{nowrap\|([^{}]+)\}\}/g, '$1')
    .replace(/\{\{small\|([^{}]+)\}\}/g, '$1')
    .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/'''+/g, '')
    .replace(/''/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseBirthAge(rawAge) {
  const match = rawAge.match(/\{\{birth date and age2\|(\d{4})\|(\d{1,2})\|(\d{1,2})\|(\d{4})\|(\d{1,2})\|(\d{1,2})\}\}/i)

  if (!match) {
    return { age: 27, birthYear: 1999 }
  }

  const [, referenceYear, referenceMonth, referenceDay, birthYear, birthMonth, birthDay] = match.map(Number)
  let age = referenceYear - birthYear

  if (referenceMonth < birthMonth || (referenceMonth === birthMonth && referenceDay < birthDay)) {
    age -= 1
  }

  return { age, birthYear }
}

function normalizeName(name) {
  return name
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-zA-Z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function computeClubBonus(clubName, clubCountryCode) {
  const eliteBonus = [...eliteClubKeywords.entries()].find(([keyword]) => clubName.includes(keyword))?.[1] ?? 0
  const leagueBonus = leagueBonusByCountry[clubCountryCode] ?? 0.4

  return eliteBonus + leagueBonus
}

function computeAgeBonus(age, position) {
  if (position === 'GK') {
    if (age >= 27 && age <= 34) {
      return 2
    }
    if (age >= 35) {
      return 0.5
    }
    if (age <= 21) {
      return -1
    }
    return 1
  }

  if (age >= 24 && age <= 29) {
    return 2
  }
  if (age >= 30 && age <= 33) {
    return 1
  }
  if (age <= 20) {
    return -2
  }
  if (age <= 23) {
    return 0
  }
  if (age >= 34) {
    return -1
  }

  return 0
}

function computeGoalContributionBonus(position, goals) {
  if (position === 'FW') {
    return clamp(goals / 10, 0, 3.5)
  }
  if (position === 'MF') {
    return clamp(goals / 14, 0, 2.2)
  }
  if (position === 'DF') {
    return clamp(goals / 20, 0, 1.2)
  }
  return 0
}

function computePositionRatings(position, overall) {
  if (position === 'GK') {
    return {
      attackRating: clamp(overall - 26, 40, 72),
      defenseRating: clamp(overall + 8, 65, 96),
      staminaRating: clamp(overall - 2, 60, 90),
      positionFitRating: 95,
    }
  }

  if (position === 'DF') {
    return {
      attackRating: clamp(overall - 7, 54, 84),
      defenseRating: clamp(overall + 5, 62, 95),
      staminaRating: clamp(overall + 1, 62, 93),
      positionFitRating: 88,
    }
  }

  if (position === 'MF') {
    return {
      attackRating: clamp(overall + 2, 58, 92),
      defenseRating: clamp(overall + 1, 56, 90),
      staminaRating: clamp(overall + 2, 64, 94),
      positionFitRating: 89,
    }
  }

  return {
    attackRating: clamp(overall + 6, 62, 96),
    defenseRating: clamp(overall - 8, 42, 78),
    staminaRating: clamp(overall + 1, 62, 93),
    positionFitRating: 90,
  }
}

function secondaryPositionsFor(position) {
  if (position === 'GK') {
    return []
  }
  if (position === 'DF') {
    return ['MF']
  }
  if (position === 'MF') {
    return ['DF', 'FW']
  }
  return ['MF']
}

function buildTeamId(teamName, code) {
  return preservedTeamIds[code] ?? `team-${slugify(code.toLowerCase())}`
}

function buildPlayerName(rawName) {
  return stripMarkup(rawName)
    .replace(/\s+\(captain\)$/i, '')
    .trim()
}

function parseSquads() {
  const raw = JSON.parse(fs.readFileSync(SQUADS_SOURCE, 'utf8'))
  const lines = raw.parse.wikitext['*'].split(/\r?\n/)
  const teams = []
  let currentGroup = null
  let currentTeam = null

  for (const line of lines) {
    const groupMatch = line.match(/^==Group ([A-L])==$/)
    if (groupMatch) {
      currentGroup = groupMatch[1]
      continue
    }

    const teamMatch = line.match(/^===([^=]+)===$/)
    if (teamMatch) {
      const teamName = teamMatch[1].trim()
      if (!currentGroup || !teamMetadata[teamName]) {
        currentTeam = null
        continue
      }

      currentTeam = {
        groupCode: currentGroup,
        teamName,
        players: [],
      }
      teams.push(currentTeam)
      continue
    }

    const playerMatch = line.match(/^\{\{nat fs g player\|(.+)\}\}$/)
    if (!playerMatch || !currentTeam) {
      continue
    }

    currentTeam.players.push(parseTemplateFields(playerMatch[1]))
  }

  return teams
}

function parseThirdPlaceCombinationMap() {
  const raw = JSON.parse(fs.readFileSync(THIRD_PLACE_SOURCE, 'utf8'))
  const lines = raw.parse.wikitext['*'].split(/\r?\n/)
  const combinationMap = {}

  for (let index = 0; index < lines.length; index += 1) {
    const rowMatch = lines[index].match(/^! scope="row" \| (\d+)$/)
    if (!rowMatch) {
      continue
    }

    const blockLines = []
    let nextIndex = index + 1

    while (nextIndex < lines.length && !/^! scope="row" \| \d+$/.test(lines[nextIndex])) {
      blockLines.push(lines[nextIndex])
      nextIndex += 1
    }

    const block = blockLines.join(' ')
    const groups = [...block.matchAll(/'''([A-L])'''/g)].map((match) => match[1]).sort()
    const assignments = [...block.matchAll(/\b3([A-L])\b/g)].map((match) => `3${match[1]}`)

    if (groups.length === 8 && assignments.length === 8) {
      combinationMap[groups.join('')] = {
        forA: assignments[0],
        forB: assignments[1],
        forD: assignments[2],
        forE: assignments[3],
        forG: assignments[4],
        forI: assignments[5],
        forK: assignments[6],
        forL: assignments[7],
      }
    }

    index = nextIndex - 1
  }

  return combinationMap
}

function rankPlayers(players) {
  return [...players].sort((left, right) => {
    if (right.overallRating !== left.overallRating) {
      return right.overallRating - left.overallRating
    }
    if (right.mentalityRating !== left.mentalityRating) {
      return right.mentalityRating - left.mentalityRating
    }
    return left.shirtNumber - right.shirtNumber
  })
}

function buildTournamentFixtures(teamsByGroup) {
  const fixtures = []
  let fixtureOrder = 1

  for (const [groupCode, teamIds] of teamsByGroup.entries()) {
    const [slot1, slot2, slot3, slot4] = teamIds
    const groupFixtures = [
      { roundCode: 'group-round-1', homeTeamId: slot1, awayTeamId: slot2 },
      { roundCode: 'group-round-1', homeTeamId: slot3, awayTeamId: slot4 },
      { roundCode: 'group-round-2', homeTeamId: slot1, awayTeamId: slot3 },
      { roundCode: 'group-round-2', homeTeamId: slot2, awayTeamId: slot4 },
      { roundCode: 'group-round-3', homeTeamId: slot1, awayTeamId: slot4 },
      { roundCode: 'group-round-3', homeTeamId: slot2, awayTeamId: slot3 },
    ]

    groupFixtures.forEach((fixture, index) => {
      fixtures.push({
        id: `fixture-group-${groupCode.toLowerCase()}-${index + 1}`,
        stage: 'group',
        roundCode: fixture.roundCode,
        groupCode,
        homeTeamId: fixture.homeTeamId,
        awayTeamId: fixture.awayTeamId,
        fixtureOrder: fixtureOrder,
        knockoutSlot: null,
        dependsOn: [],
      })
      fixtureOrder += 1
    })
  }

  const roundOf32 = [
    ['73', ['A2', 'B2'], 'round-32-73'],
    ['74', ['E1', '3P-E1'], 'round-32-74'],
    ['75', ['F1', 'C2'], 'round-32-75'],
    ['76', ['C1', 'F2'], 'round-32-76'],
    ['77', ['I1', '3P-I1'], 'round-32-77'],
    ['78', ['E2', 'I2'], 'round-32-78'],
    ['79', ['A1', '3P-A1'], 'round-32-79'],
    ['80', ['L1', '3P-L1'], 'round-32-80'],
    ['81', ['D1', '3P-D1'], 'round-32-81'],
    ['82', ['G1', '3P-G1'], 'round-32-82'],
    ['83', ['K2', 'L2'], 'round-32-83'],
    ['84', ['H1', 'J2'], 'round-32-84'],
    ['85', ['B1', '3P-B1'], 'round-32-85'],
    ['86', ['J1', 'H2'], 'round-32-86'],
    ['87', ['K1', '3P-K1'], 'round-32-87'],
    ['88', ['D2', 'G2'], 'round-32-88'],
  ]

  roundOf32.forEach(([matchNo, dependsOn, knockoutSlot]) => {
    fixtures.push({
      id: `fixture-knockout-${matchNo}`,
      stage: 'knockout',
      roundCode: 'knockout-round-32',
      groupCode: null,
      homeTeamId: null,
      awayTeamId: null,
      fixtureOrder,
      knockoutSlot,
      dependsOn,
    })
    fixtureOrder += 1
  })

  const roundOf16 = [
    ['89', ['W:fixture-knockout-74', 'W:fixture-knockout-77'], 'round-16-89'],
    ['90', ['W:fixture-knockout-73', 'W:fixture-knockout-75'], 'round-16-90'],
    ['91', ['W:fixture-knockout-83', 'W:fixture-knockout-84'], 'round-16-91'],
    ['92', ['W:fixture-knockout-81', 'W:fixture-knockout-82'], 'round-16-92'],
    ['93', ['W:fixture-knockout-76', 'W:fixture-knockout-78'], 'round-16-93'],
    ['94', ['W:fixture-knockout-79', 'W:fixture-knockout-80'], 'round-16-94'],
    ['95', ['W:fixture-knockout-86', 'W:fixture-knockout-88'], 'round-16-95'],
    ['96', ['W:fixture-knockout-85', 'W:fixture-knockout-87'], 'round-16-96'],
  ]

  roundOf16.forEach(([matchNo, dependsOn, knockoutSlot]) => {
    fixtures.push({
      id: `fixture-knockout-${matchNo}`,
      stage: 'knockout',
      roundCode: 'knockout-round-16',
      groupCode: null,
      homeTeamId: null,
      awayTeamId: null,
      fixtureOrder,
      knockoutSlot,
      dependsOn,
    })
    fixtureOrder += 1
  })

  const quarterfinals = [
    ['97', ['W:fixture-knockout-89', 'W:fixture-knockout-90'], 'quarterfinal-97'],
    ['98', ['W:fixture-knockout-93', 'W:fixture-knockout-94'], 'quarterfinal-98'],
    ['99', ['W:fixture-knockout-91', 'W:fixture-knockout-92'], 'quarterfinal-99'],
    ['100', ['W:fixture-knockout-95', 'W:fixture-knockout-96'], 'quarterfinal-100'],
  ]

  quarterfinals.forEach(([matchNo, dependsOn, knockoutSlot]) => {
    fixtures.push({
      id: `fixture-knockout-${matchNo}`,
      stage: 'knockout',
      roundCode: 'knockout-quarterfinal',
      groupCode: null,
      homeTeamId: null,
      awayTeamId: null,
      fixtureOrder,
      knockoutSlot,
      dependsOn,
    })
    fixtureOrder += 1
  })

  const semifinals = [
    ['101', ['W:fixture-knockout-97', 'W:fixture-knockout-98'], 'semi-1'],
    ['102', ['W:fixture-knockout-99', 'W:fixture-knockout-100'], 'semi-2'],
  ]

  semifinals.forEach(([matchNo, dependsOn, knockoutSlot]) => {
    fixtures.push({
      id: `fixture-knockout-${matchNo}`,
      stage: 'knockout',
      roundCode: 'knockout-semi',
      groupCode: null,
      homeTeamId: null,
      awayTeamId: null,
      fixtureOrder,
      knockoutSlot,
      dependsOn,
    })
    fixtureOrder += 1
  })

  fixtures.push({
    id: 'fixture-knockout-103',
    stage: 'knockout',
    roundCode: 'knockout-third-place',
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder,
    knockoutSlot: 'third-place',
    dependsOn: ['L:fixture-knockout-101', 'L:fixture-knockout-102'],
  })
  fixtureOrder += 1

  fixtures.push({
    id: 'fixture-knockout-104',
    stage: 'knockout',
    roundCode: 'knockout-final',
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder,
    knockoutSlot: 'final',
    dependsOn: ['W:fixture-knockout-101', 'W:fixture-knockout-102'],
  })

  return fixtures
}

function createWorldCupData() {
  const parsedTeams = parseSquads()
  const teams = []
  const players = []
  const groups = []
  const teamsByGroup = new Map()

  parsedTeams.forEach((teamEntry) => {
    const metadata = teamMetadata[teamEntry.teamName]
    if (!metadata) {
      throw new Error(`Missing metadata for team ${teamEntry.teamName}`)
    }

    const teamId = buildTeamId(teamEntry.teamName, metadata.code)
    const teamPlayers = teamEntry.players.map((playerFields) => {
      const englishName = buildPlayerName(playerFields.name ?? '')
      const name = toMainlandChinesePlayerName(englishName, teamEntry.teamName)
      const shirtNumber = Number(playerFields.no)
      const position = playerFields.pos ?? 'MF'
      const caps = Number(playerFields.caps ?? 0)
      const goals = Number(playerFields.goals ?? 0)
      const club = stripMarkup(playerFields.club ?? '')
      const clubCountryCode = (playerFields.clubnat ?? '').trim().toUpperCase()
      const { age } = parseBirthAge(playerFields.age ?? '')
      const normalizedName = normalizeName(englishName)
      const clubBonus = computeClubBonus(club, clubCountryCode)
      const capBonus = clamp(caps / 16, 0, 5)
      const goalBonus = computeGoalContributionBonus(position, goals)
      const ageBonus = computeAgeBonus(age, position)
      const starBoost = starBoosts[normalizedName] ?? 0
      const shirtBias = shirtNumber <= 11 ? 1.2 : 0
      const overallRating = Math.round(
        clamp(
          metadata.overallBase - 8 + capBonus + goalBonus + ageBonus + clubBonus + starBoost + shirtBias,
          metadata.overallBase - 16,
          metadata.overallBase + 5,
        ),
      )
      const positional = computePositionRatings(position, overallRating)
      const mentalityRating = clamp(
        Math.round(overallRating + capBonus * 0.8 + (age >= 29 ? 1.5 : 0)),
        58,
        95,
      )

      return {
        id: `${teamId}-player-${shirtNumber}`,
        teamId,
        name,
        shirtNumber,
        primaryPosition: position,
        secondaryPositions: secondaryPositionsFor(position),
        overallRating,
        attackRating: positional.attackRating,
        defenseRating: positional.defenseRating,
        staminaRating: positional.staminaRating,
        mentalityRating,
        positionFitRating: positional.positionFitRating,
        isCorePlayer: false,
        statusTag: 'available',
        caps,
      }
    }).sort((left, right) => left.shirtNumber - right.shirtNumber)

    rankPlayers(teamPlayers).slice(0, 5).forEach((player) => {
      player.isCorePlayer = true
    })

    const goalkeepers = rankPlayers(teamPlayers.filter((player) => player.primaryPosition === 'GK'))
    const defenders = rankPlayers(teamPlayers.filter((player) => player.primaryPosition === 'DF'))
    const midfielders = rankPlayers(teamPlayers.filter((player) => player.primaryPosition === 'MF'))
    const forwards = rankPlayers(teamPlayers.filter((player) => player.primaryPosition === 'FW'))
    const topEleven = rankPlayers(teamPlayers).slice(0, 11)
    const average = (items) =>
      items.length === 0
        ? metadata.overallBase
        : Math.round(items.reduce((sum, item) => sum + item.overallRating, 0) / items.length)

    teams.push({
      id: teamId,
      name: metadata.shortName,
      shortName: metadata.shortName,
      fifaCode: metadata.code,
      groupCode: teamEntry.groupCode,
      defaultFormationId: metadata.formationId,
      styleTags: metadata.styleTags,
      overallRating: average(topEleven),
      goalkeepingRating: average(goalkeepers.slice(0, 1)),
      defenseRating: average(defenders.slice(0, 4)),
      midfieldRating: average(midfielders.slice(0, 4)),
      attackRating: average(forwards.slice(0, 3)),
    })

    players.push(...teamPlayers.map(({ caps: _caps, ...player }) => player))
    teamsByGroup.set(teamEntry.groupCode, [...(teamsByGroup.get(teamEntry.groupCode) ?? []), teamId])
  })

  for (const [groupCode, teamIds] of teamsByGroup.entries()) {
    groups.push({
      id: `group-${groupCode.toLowerCase()}`,
      groupCode,
      teamIds,
    })
  }

  return {
    teams,
    players,
    groups,
    fixtures: buildTournamentFixtures(teamsByGroup),
    thirdPlaceCombinationMap: parseThirdPlaceCombinationMap(),
  }
}

function toTsLiteral(value, indent = 0) {
  const padding = ' '.repeat(indent)

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '[]'
    }

    return `[\n${value.map((item) => `${' '.repeat(indent + 2)}${toTsLiteral(item, indent + 2)}`).join(',\n')}\n${padding}]`
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
    if (entries.length === 0) {
      return '{}'
    }

    return `{\n${entries
      .map(([key, item]) => `${' '.repeat(indent + 2)}${/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) ? key : JSON.stringify(key)}: ${toTsLiteral(item, indent + 2)}`)
      .join(',\n')}\n${padding}}`
  }

  return JSON.stringify(value)
}

const worldCupData = createWorldCupData()

const fileContents = `import type { MatchFixture, Player, Team, TournamentGroup } from '../../types/entities'

export const worldCupSeedTimestamp = ${JSON.stringify(SEED_TIMESTAMP)}

export const worldCupTeams: Team[] = ${toTsLiteral(worldCupData.teams)}

export const worldCupPlayers: Player[] = ${toTsLiteral(worldCupData.players)}

export const worldCupTournamentGroups: TournamentGroup[] = ${toTsLiteral(worldCupData.groups)}

export const worldCupFixtures: MatchFixture[] = ${toTsLiteral(worldCupData.fixtures)}

export const worldCupThirdPlaceCombinationMap = ${toTsLiteral(worldCupData.thirdPlaceCombinationMap)} as const
`

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
fs.writeFileSync(OUTPUT_FILE, fileContents, 'utf8')

console.log(`Generated ${OUTPUT_FILE}`)
