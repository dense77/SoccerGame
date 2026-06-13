import type { MatchFixture, Player, Team, TournamentGroup } from '../../types/entities'

export const worldCupSeedTimestamp = "2026-06-14T00:00:00.000Z"

export const worldCupTeams: Team[] = [
  {
    id: "team-cze",
    name: "捷克",
    shortName: "捷克",
    fifaCode: "CZE",
    groupCode: "A",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "direct",
      "set_piece"
    ],
    overallRating: 79,
    goalkeepingRating: 79,
    defenseRating: 78,
    midfieldRating: 78,
    attackRating: 80
  },
  {
    id: "team-mex",
    name: "墨西哥",
    shortName: "墨西哥",
    fifaCode: "MEX",
    groupCode: "A",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "wing_play",
      "direct"
    ],
    overallRating: 81,
    goalkeepingRating: 78,
    defenseRating: 81,
    midfieldRating: 79,
    attackRating: 83
  },
  {
    id: "team-rsa",
    name: "南非",
    shortName: "南非",
    fifaCode: "RSA",
    groupCode: "A",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "athletic"
    ],
    overallRating: 72,
    goalkeepingRating: 73,
    defenseRating: 70,
    midfieldRating: 72,
    attackRating: 72
  },
  {
    id: "team-kor",
    name: "韩国",
    shortName: "韩国",
    fifaCode: "KOR",
    groupCode: "A",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "high_press",
      "direct"
    ],
    overallRating: 80,
    goalkeepingRating: 78,
    defenseRating: 78,
    midfieldRating: 82,
    attackRating: 80
  },
  {
    id: "team-bih",
    name: "波黑",
    shortName: "波黑",
    fifaCode: "BIH",
    groupCode: "B",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "direct",
      "compact"
    ],
    overallRating: 76,
    goalkeepingRating: 76,
    defenseRating: 77,
    midfieldRating: 74,
    attackRating: 77
  },
  {
    id: "team-can",
    name: "加拿大",
    shortName: "加拿大",
    fifaCode: "CAN",
    groupCode: "B",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "high_press",
      "direct"
    ],
    overallRating: 80,
    goalkeepingRating: 76,
    defenseRating: 79,
    midfieldRating: 78,
    attackRating: 83
  },
  {
    id: "team-qat",
    name: "卡塔尔",
    shortName: "卡塔尔",
    fifaCode: "QAT",
    groupCode: "B",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "central_control"
    ],
    overallRating: 75,
    goalkeepingRating: 73,
    defenseRating: 74,
    midfieldRating: 72,
    attackRating: 78
  },
  {
    id: "team-sui",
    name: "瑞士",
    shortName: "瑞士",
    fifaCode: "SUI",
    groupCode: "B",
    defaultFormationId: "formation-3-4-3",
    styleTags: [
      "compact",
      "counter_attack"
    ],
    overallRating: 84,
    goalkeepingRating: 84,
    defenseRating: 84,
    midfieldRating: 85,
    attackRating: 84
  },
  {
    id: "team-bra",
    name: "巴西",
    shortName: "巴西",
    fifaCode: "BRA",
    groupCode: "C",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "wing_play",
      "high_press"
    ],
    overallRating: 91,
    goalkeepingRating: 93,
    defenseRating: 89,
    midfieldRating: 89,
    attackRating: 92
  },
  {
    id: "team-hai",
    name: "海地",
    shortName: "海地",
    fifaCode: "HAI",
    groupCode: "C",
    defaultFormationId: "formation-4-4-2",
    styleTags: [
      "direct",
      "compact"
    ],
    overallRating: 69,
    goalkeepingRating: 71,
    defenseRating: 68,
    midfieldRating: 67,
    attackRating: 71
  },
  {
    id: "team-mar",
    name: "摩洛哥",
    shortName: "摩洛哥",
    fifaCode: "MAR",
    groupCode: "C",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "compact",
      "counter_attack"
    ],
    overallRating: 85,
    goalkeepingRating: 84,
    defenseRating: 85,
    midfieldRating: 85,
    attackRating: 85
  },
  {
    id: "team-sco",
    name: "苏格兰",
    shortName: "苏格兰",
    fifaCode: "SCO",
    groupCode: "C",
    defaultFormationId: "formation-3-5-2",
    styleTags: [
      "set_piece",
      "direct"
    ],
    overallRating: 81,
    goalkeepingRating: 79,
    defenseRating: 80,
    midfieldRating: 83,
    attackRating: 80
  },
  {
    id: "team-aus",
    name: "澳大利亚",
    shortName: "澳大利亚",
    fifaCode: "AUS",
    groupCode: "D",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "direct",
      "athletic"
    ],
    overallRating: 76,
    goalkeepingRating: 80,
    defenseRating: 75,
    midfieldRating: 75,
    attackRating: 77
  },
  {
    id: "team-par",
    name: "巴拉圭",
    shortName: "巴拉圭",
    fifaCode: "PAR",
    groupCode: "D",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "set_piece"
    ],
    overallRating: 76,
    goalkeepingRating: 74,
    defenseRating: 77,
    midfieldRating: 76,
    attackRating: 76
  },
  {
    id: "team-tur",
    name: "土耳其",
    shortName: "土耳其",
    fifaCode: "TUR",
    groupCode: "D",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "athletic",
      "wing_play"
    ],
    overallRating: 82,
    goalkeepingRating: 79,
    defenseRating: 81,
    midfieldRating: 83,
    attackRating: 83
  },
  {
    id: "team-usa-sample",
    name: "美国",
    shortName: "美国",
    fifaCode: "USA",
    groupCode: "D",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "high_press",
      "wing_play"
    ],
    overallRating: 83,
    goalkeepingRating: 81,
    defenseRating: 82,
    midfieldRating: 83,
    attackRating: 84
  },
  {
    id: "team-cuw",
    name: "库拉索",
    shortName: "库拉索",
    fifaCode: "CUW",
    groupCode: "E",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "direct"
    ],
    overallRating: 71,
    goalkeepingRating: 71,
    defenseRating: 71,
    midfieldRating: 71,
    attackRating: 69
  },
  {
    id: "team-ecu",
    name: "厄瓜多尔",
    shortName: "厄瓜多尔",
    fifaCode: "ECU",
    groupCode: "E",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "athletic",
      "compact"
    ],
    overallRating: 82,
    goalkeepingRating: 78,
    defenseRating: 84,
    midfieldRating: 80,
    attackRating: 81
  },
  {
    id: "team-ger",
    name: "德国",
    shortName: "德国",
    fifaCode: "GER",
    groupCode: "E",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "high_press",
      "control"
    ],
    overallRating: 91,
    goalkeepingRating: 92,
    defenseRating: 91,
    midfieldRating: 91,
    attackRating: 89
  },
  {
    id: "team-civ",
    name: "科特迪瓦",
    shortName: "科特迪瓦",
    fifaCode: "CIV",
    groupCode: "E",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "athletic",
      "wing_play"
    ],
    overallRating: 81,
    goalkeepingRating: 79,
    defenseRating: 80,
    midfieldRating: 82,
    attackRating: 82
  },
  {
    id: "team-jpn-sample",
    name: "日本",
    shortName: "日本",
    fifaCode: "JPN",
    groupCode: "F",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "high_press"
    ],
    overallRating: 83,
    goalkeepingRating: 80,
    defenseRating: 84,
    midfieldRating: 84,
    attackRating: 81
  },
  {
    id: "team-ned",
    name: "荷兰",
    shortName: "荷兰",
    fifaCode: "NED",
    groupCode: "F",
    defaultFormationId: "formation-3-4-3",
    styleTags: [
      "control",
      "wing_play"
    ],
    overallRating: 90,
    goalkeepingRating: 86,
    defenseRating: 90,
    midfieldRating: 89,
    attackRating: 90
  },
  {
    id: "team-swe",
    name: "瑞典",
    shortName: "瑞典",
    fifaCode: "SWE",
    groupCode: "F",
    defaultFormationId: "formation-4-4-2",
    styleTags: [
      "direct",
      "set_piece"
    ],
    overallRating: 80,
    goalkeepingRating: 77,
    defenseRating: 80,
    midfieldRating: 77,
    attackRating: 83
  },
  {
    id: "team-tun",
    name: "突尼斯",
    shortName: "突尼斯",
    fifaCode: "TUN",
    groupCode: "F",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "direct"
    ],
    overallRating: 75,
    goalkeepingRating: 73,
    defenseRating: 75,
    midfieldRating: 75,
    attackRating: 74
  },
  {
    id: "team-bel",
    name: "比利时",
    shortName: "比利时",
    fifaCode: "BEL",
    groupCode: "G",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "control",
      "wing_play"
    ],
    overallRating: 87,
    goalkeepingRating: 89,
    defenseRating: 84,
    midfieldRating: 87,
    attackRating: 89
  },
  {
    id: "team-egy",
    name: "埃及",
    shortName: "埃及",
    fifaCode: "EGY",
    groupCode: "G",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "counter_attack",
      "direct"
    ],
    overallRating: 80,
    goalkeepingRating: 79,
    defenseRating: 78,
    midfieldRating: 77,
    attackRating: 84
  },
  {
    id: "team-irn",
    name: "伊朗",
    shortName: "伊朗",
    fifaCode: "IRN",
    groupCode: "G",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "counter_attack"
    ],
    overallRating: 78,
    goalkeepingRating: 80,
    defenseRating: 77,
    midfieldRating: 79,
    attackRating: 78
  },
  {
    id: "team-nzl",
    name: "新西兰",
    shortName: "新西兰",
    fifaCode: "NZL",
    groupCode: "G",
    defaultFormationId: "formation-4-4-2",
    styleTags: [
      "direct",
      "set_piece"
    ],
    overallRating: 71,
    goalkeepingRating: 71,
    defenseRating: 69,
    midfieldRating: 71,
    attackRating: 72
  },
  {
    id: "team-cpv",
    name: "佛得角",
    shortName: "佛得角",
    fifaCode: "CPV",
    groupCode: "H",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "counter_attack"
    ],
    overallRating: 74,
    goalkeepingRating: 76,
    defenseRating: 73,
    midfieldRating: 74,
    attackRating: 74
  },
  {
    id: "team-ksa",
    name: "沙特阿拉伯",
    shortName: "沙特阿拉伯",
    fifaCode: "KSA",
    groupCode: "H",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "direct",
      "high_press"
    ],
    overallRating: 77,
    goalkeepingRating: 76,
    defenseRating: 76,
    midfieldRating: 75,
    attackRating: 78
  },
  {
    id: "team-esp",
    name: "西班牙",
    shortName: "西班牙",
    fifaCode: "ESP",
    groupCode: "H",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "control",
      "central_control"
    ],
    overallRating: 92,
    goalkeepingRating: 90,
    defenseRating: 90,
    midfieldRating: 92,
    attackRating: 93
  },
  {
    id: "team-uru",
    name: "乌拉圭",
    shortName: "乌拉圭",
    fifaCode: "URU",
    groupCode: "H",
    defaultFormationId: "formation-3-5-2",
    styleTags: [
      "athletic",
      "counter_attack"
    ],
    overallRating: 87,
    goalkeepingRating: 84,
    defenseRating: 88,
    midfieldRating: 88,
    attackRating: 83
  },
  {
    id: "team-fra",
    name: "法国",
    shortName: "法国",
    fifaCode: "FRA",
    groupCode: "I",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "athletic",
      "counter_attack"
    ],
    overallRating: 95,
    goalkeepingRating: 93,
    defenseRating: 95,
    midfieldRating: 93,
    attackRating: 96
  },
  {
    id: "team-irq",
    name: "伊拉克",
    shortName: "伊拉克",
    fifaCode: "IRQ",
    groupCode: "I",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "direct"
    ],
    overallRating: 74,
    goalkeepingRating: 73,
    defenseRating: 72,
    midfieldRating: 73,
    attackRating: 76
  },
  {
    id: "team-nor",
    name: "挪威",
    shortName: "挪威",
    fifaCode: "NOR",
    groupCode: "I",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "direct",
      "wing_play"
    ],
    overallRating: 84,
    goalkeepingRating: 83,
    defenseRating: 83,
    midfieldRating: 83,
    attackRating: 85
  },
  {
    id: "team-sen-sample",
    name: "塞内加尔",
    shortName: "塞内加尔",
    fifaCode: "SEN",
    groupCode: "I",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "athletic",
      "counter_attack"
    ],
    overallRating: 83,
    goalkeepingRating: 80,
    defenseRating: 81,
    midfieldRating: 82,
    attackRating: 85
  },
  {
    id: "team-alg",
    name: "阿尔及利亚",
    shortName: "阿尔及利亚",
    fifaCode: "ALG",
    groupCode: "J",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "counter_attack"
    ],
    overallRating: 80,
    goalkeepingRating: 77,
    defenseRating: 81,
    midfieldRating: 79,
    attackRating: 81
  },
  {
    id: "team-arg-sample",
    name: "阿根廷",
    shortName: "阿根廷",
    fifaCode: "ARG",
    groupCode: "J",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "control",
      "central_control"
    ],
    overallRating: 94,
    goalkeepingRating: 93,
    defenseRating: 92,
    midfieldRating: 94,
    attackRating: 95
  },
  {
    id: "team-aut",
    name: "奥地利",
    shortName: "奥地利",
    fifaCode: "AUT",
    groupCode: "J",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "high_press",
      "central_control"
    ],
    overallRating: 84,
    goalkeepingRating: 79,
    defenseRating: 84,
    midfieldRating: 85,
    attackRating: 83
  },
  {
    id: "team-jor",
    name: "约旦",
    shortName: "约旦",
    fifaCode: "JOR",
    groupCode: "J",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "counter_attack"
    ],
    overallRating: 74,
    goalkeepingRating: 74,
    defenseRating: 73,
    midfieldRating: 73,
    attackRating: 76
  },
  {
    id: "team-col",
    name: "哥伦比亚",
    shortName: "哥伦比亚",
    fifaCode: "COL",
    groupCode: "K",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "control",
      "wing_play"
    ],
    overallRating: 84,
    goalkeepingRating: 83,
    defenseRating: 84,
    midfieldRating: 84,
    attackRating: 85
  },
  {
    id: "team-cod",
    name: "刚果（金）",
    shortName: "刚果（金）",
    fifaCode: "COD",
    groupCode: "K",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "athletic",
      "counter_attack"
    ],
    overallRating: 78,
    goalkeepingRating: 77,
    defenseRating: 77,
    midfieldRating: 77,
    attackRating: 79
  },
  {
    id: "team-por",
    name: "葡萄牙",
    shortName: "葡萄牙",
    fifaCode: "POR",
    groupCode: "K",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "control",
      "wing_play"
    ],
    overallRating: 91,
    goalkeepingRating: 89,
    defenseRating: 90,
    midfieldRating: 92,
    attackRating: 90
  },
  {
    id: "team-uzb",
    name: "乌兹别克斯坦",
    shortName: "乌兹别克斯坦",
    fifaCode: "UZB",
    groupCode: "K",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "compact",
      "direct"
    ],
    overallRating: 76,
    goalkeepingRating: 73,
    defenseRating: 75,
    midfieldRating: 76,
    attackRating: 76
  },
  {
    id: "team-cro",
    name: "克罗地亚",
    shortName: "克罗地亚",
    fifaCode: "CRO",
    groupCode: "L",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "control",
      "central_control"
    ],
    overallRating: 87,
    goalkeepingRating: 84,
    defenseRating: 87,
    midfieldRating: 87,
    attackRating: 86
  },
  {
    id: "team-eng",
    name: "英格兰",
    shortName: "英格兰",
    fifaCode: "ENG",
    groupCode: "L",
    defaultFormationId: "formation-4-3-3",
    styleTags: [
      "wing_play",
      "high_press"
    ],
    overallRating: 93,
    goalkeepingRating: 92,
    defenseRating: 92,
    midfieldRating: 92,
    attackRating: 94
  },
  {
    id: "team-gha",
    name: "加纳",
    shortName: "加纳",
    fifaCode: "GHA",
    groupCode: "L",
    defaultFormationId: "formation-4-2-3-1",
    styleTags: [
      "athletic",
      "counter_attack"
    ],
    overallRating: 77,
    goalkeepingRating: 75,
    defenseRating: 76,
    midfieldRating: 78,
    attackRating: 78
  },
  {
    id: "team-pan",
    name: "巴拿马",
    shortName: "巴拿马",
    fifaCode: "PAN",
    groupCode: "L",
    defaultFormationId: "formation-4-4-2",
    styleTags: [
      "compact",
      "athletic"
    ],
    overallRating: 76,
    goalkeepingRating: 74,
    defenseRating: 76,
    midfieldRating: 77,
    attackRating: 73
  }
]

export const worldCupPlayers: Player[] = [
  {
    id: "team-cze-player-1",
    teamId: "team-cze",
    name: "Matěj Kovář",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 80,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cze-player-2",
    teamId: "team-cze",
    name: "David Zima",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-3",
    teamId: "team-cze",
    name: "Tomáš Holeš",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-4",
    teamId: "team-cze",
    name: "Robin Hranáč",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-5",
    teamId: "team-cze",
    name: "Vladimír Coufal",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cze-player-6",
    teamId: "team-cze",
    name: "Štěpán Chaloupek",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-7",
    teamId: "team-cze",
    name: "Ladislav Krejčí",
    shirtNumber: 7,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cze-player-8",
    teamId: "team-cze",
    name: "Vladimír Darida",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-9",
    teamId: "team-cze",
    name: "Adam Hložek",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-10",
    teamId: "team-cze",
    name: "Patrik Schick",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cze-player-11",
    teamId: "team-cze",
    name: "Jan Kuchta",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-12",
    teamId: "team-cze",
    name: "Lukáš Červ",
    shirtNumber: 12,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-13",
    teamId: "team-cze",
    name: "Mojmír Chytil",
    shirtNumber: 13,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-14",
    teamId: "team-cze",
    name: "David Jurásek",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-15",
    teamId: "team-cze",
    name: "Pavel Šulc",
    shirtNumber: 15,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-16",
    teamId: "team-cze",
    name: "Jindřich Staněk",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 76,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-17",
    teamId: "team-cze",
    name: "Lukáš Provod",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-18",
    teamId: "team-cze",
    name: "Michal Sadílek",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-19",
    teamId: "team-cze",
    name: "Tomáš Chorý",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-20",
    teamId: "team-cze",
    name: "Jaroslav Zelený",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-21",
    teamId: "team-cze",
    name: "David Douděra",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-22",
    teamId: "team-cze",
    name: "Tomáš Souček",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cze-player-23",
    teamId: "team-cze",
    name: "Lukáš Horníček",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 74,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-24",
    teamId: "team-cze",
    name: "Alexandr Sojka",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-25",
    teamId: "team-cze",
    name: "Hugo Sochůrek",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 69,
    attackRating: 71,
    defenseRating: 70,
    staminaRating: 71,
    mentalityRating: 69,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cze-player-26",
    teamId: "team-cze",
    name: "Denis Višinský",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-1",
    teamId: "team-mex",
    name: "Raúl Rangel",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-2",
    teamId: "team-mex",
    name: "Jorge Sánchez",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-3",
    teamId: "team-mex",
    name: "César Montes",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mex-player-4",
    teamId: "team-mex",
    name: "Edson Álvarez",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mex-player-5",
    teamId: "team-mex",
    name: "Johan Vásquez",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mex-player-6",
    teamId: "team-mex",
    name: "Érik Lira",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-7",
    teamId: "team-mex",
    name: "Luis Romo",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-8",
    teamId: "team-mex",
    name: "Álvaro Fidalgo",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-9",
    teamId: "team-mex",
    name: "Raúl Jiménez",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 89,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mex-player-10",
    teamId: "team-mex",
    name: "Alexis Vega",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-11",
    teamId: "team-mex",
    name: "Santiago Giménez",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mex-player-12",
    teamId: "team-mex",
    name: "Carlos Acevedo",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 75,
    attackRating: 49,
    defenseRating: 83,
    staminaRating: 73,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-13",
    teamId: "team-mex",
    name: "Guillermo Ochoa",
    shirtNumber: 13,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 78,
    attackRating: 52,
    defenseRating: 86,
    staminaRating: 76,
    mentalityRating: 84,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-14",
    teamId: "team-mex",
    name: "Armando González",
    shirtNumber: 14,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-15",
    teamId: "team-mex",
    name: "Israel Reyes",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-16",
    teamId: "team-mex",
    name: "Julián Quiñones",
    shirtNumber: 16,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-17",
    teamId: "team-mex",
    name: "Orbelín Pineda",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-18",
    teamId: "team-mex",
    name: "Obed Vargas",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-19",
    teamId: "team-mex",
    name: "Gilberto Mora",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-20",
    teamId: "team-mex",
    name: "Mateo Chávez",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-21",
    teamId: "team-mex",
    name: "César Huerta",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-22",
    teamId: "team-mex",
    name: "Guillermo Martínez",
    shirtNumber: 22,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-23",
    teamId: "team-mex",
    name: "Jesús Gallardo",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-24",
    teamId: "team-mex",
    name: "Luis Chávez",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-25",
    teamId: "team-mex",
    name: "Roberto Alvarado",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mex-player-26",
    teamId: "team-mex",
    name: "Brian Gutiérrez",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-1",
    teamId: "team-rsa",
    name: "Ronwen Williams",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 73,
    attackRating: 47,
    defenseRating: 81,
    staminaRating: 71,
    mentalityRating: 78,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-2",
    teamId: "team-rsa",
    name: "Thabang Matuludi",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-3",
    teamId: "team-rsa",
    name: "Khulumani Ndamane",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-4",
    teamId: "team-rsa",
    name: "Teboho Mokoena",
    shirtNumber: 4,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-5",
    teamId: "team-rsa",
    name: "Thalente Mbatha",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-6",
    teamId: "team-rsa",
    name: "Aubrey Modiba",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-7",
    teamId: "team-rsa",
    name: "Oswin Appollis",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-8",
    teamId: "team-rsa",
    name: "Tshepang Moremi",
    shirtNumber: 8,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 76,
    defenseRating: 62,
    staminaRating: 71,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-9",
    teamId: "team-rsa",
    name: "Lyle Foster",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-10",
    teamId: "team-rsa",
    name: "Relebohile Mofokeng",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 74,
    defenseRating: 60,
    staminaRating: 69,
    mentalityRating: 69,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-11",
    teamId: "team-rsa",
    name: "Themba Zwane",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-12",
    teamId: "team-rsa",
    name: "Thapelo Maseko",
    shirtNumber: 12,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 73,
    defenseRating: 59,
    staminaRating: 68,
    mentalityRating: 68,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-13",
    teamId: "team-rsa",
    name: "Sphephelo Sithole",
    shirtNumber: 13,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-14",
    teamId: "team-rsa",
    name: "Mbekezeli Mbokazi",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 59,
    defenseRating: 71,
    staminaRating: 67,
    mentalityRating: 67,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-15",
    teamId: "team-rsa",
    name: "Iqraam Rayners",
    shirtNumber: 15,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 75,
    defenseRating: 61,
    staminaRating: 70,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-16",
    teamId: "team-rsa",
    name: "Sipho Chaine",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 69,
    attackRating: 43,
    defenseRating: 77,
    staminaRating: 67,
    mentalityRating: 71,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-17",
    teamId: "team-rsa",
    name: "Evidence Makgopa",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-18",
    teamId: "team-rsa",
    name: "Samukele Kabini",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 60,
    defenseRating: 72,
    staminaRating: 68,
    mentalityRating: 67,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-19",
    teamId: "team-rsa",
    name: "Nkosinathi Sibisi",
    shirtNumber: 19,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-20",
    teamId: "team-rsa",
    name: "Khuliso Mudau",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-21",
    teamId: "team-rsa",
    name: "Ime Okon",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 69,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-22",
    teamId: "team-rsa",
    name: "Ricardo Goss",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 69,
    attackRating: 43,
    defenseRating: 77,
    staminaRating: 67,
    mentalityRating: 71,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-23",
    teamId: "team-rsa",
    name: "Jayden Adams",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 69,
    attackRating: 71,
    defenseRating: 70,
    staminaRating: 71,
    mentalityRating: 69,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-24",
    teamId: "team-rsa",
    name: "Olwethu Makhanya",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 60,
    defenseRating: 72,
    staminaRating: 68,
    mentalityRating: 67,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-25",
    teamId: "team-rsa",
    name: "Kamogelo Sebelebele",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 73,
    defenseRating: 59,
    staminaRating: 68,
    mentalityRating: 67,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-rsa-player-26",
    teamId: "team-rsa",
    name: "Bradley Cross",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-1",
    teamId: "team-kor",
    name: "Kim Seung-gyu",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 78,
    attackRating: 52,
    defenseRating: 86,
    staminaRating: 76,
    mentalityRating: 84,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-2",
    teamId: "team-kor",
    name: "Lee Han-beom",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-3",
    teamId: "team-kor",
    name: "Lee Gi-hyuk",
    shirtNumber: 3,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-4",
    teamId: "team-kor",
    name: "Kim Min-jae",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-kor-player-5",
    teamId: "team-kor",
    name: "Kim Tae-hyeon",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-6",
    teamId: "team-kor",
    name: "Hwang In-beom",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-7",
    teamId: "team-kor",
    name: "Son Heung-min",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-kor-player-8",
    teamId: "team-kor",
    name: "Paik Seung-ho",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-9",
    teamId: "team-kor",
    name: "Cho Gue-sung",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-10",
    teamId: "team-kor",
    name: "Lee Jae-sung",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-kor-player-11",
    teamId: "team-kor",
    name: "Hwang Hee-chan",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-kor-player-12",
    teamId: "team-kor",
    name: "Song Bum-keun",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 74,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-13",
    teamId: "team-kor",
    name: "Lee Tae-seok",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-14",
    teamId: "team-kor",
    name: "Cho Wi-je",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-15",
    teamId: "team-kor",
    name: "Kim Moon-hwan",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-16",
    teamId: "team-kor",
    name: "Park Jin-seob",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-17",
    teamId: "team-kor",
    name: "Bae Jun-ho",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-18",
    teamId: "team-kor",
    name: "Oh Hyeon-gyu",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-19",
    teamId: "team-kor",
    name: "Lee Kang-in",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-kor-player-20",
    teamId: "team-kor",
    name: "Yang Hyun-jun",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-21",
    teamId: "team-kor",
    name: "Jo Hyeon-woo",
    shirtNumber: 21,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 80,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-22",
    teamId: "team-kor",
    name: "Seol Young-woo",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-23",
    teamId: "team-kor",
    name: "Jens Castrop",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-24",
    teamId: "team-kor",
    name: "Kim Jin-gyu",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-25",
    teamId: "team-kor",
    name: "Eom Ji-sung",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-kor-player-26",
    teamId: "team-kor",
    name: "Lee Dong-gyeong",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-1",
    teamId: "team-bih",
    name: "Nikola Vasilj",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 79,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-2",
    teamId: "team-bih",
    name: "Nihad Mujakić",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-3",
    teamId: "team-bih",
    name: "Dennis Hadžikadunić",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bih-player-4",
    teamId: "team-bih",
    name: "Tarik Muharemović",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-5",
    teamId: "team-bih",
    name: "Sead Kolašinac",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bih-player-6",
    teamId: "team-bih",
    name: "Benjamin Tahirović",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-7",
    teamId: "team-bih",
    name: "Amar Dedić",
    shirtNumber: 7,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bih-player-8",
    teamId: "team-bih",
    name: "Armin Gigović",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-9",
    teamId: "team-bih",
    name: "Samed Baždar",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-10",
    teamId: "team-bih",
    name: "Ermedin Demirović",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bih-player-11",
    teamId: "team-bih",
    name: "Edin Džeko",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 86,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bih-player-12",
    teamId: "team-bih",
    name: "Mladen Jurkas",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 68,
    attackRating: 42,
    defenseRating: 76,
    staminaRating: 66,
    mentalityRating: 68,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-13",
    teamId: "team-bih",
    name: "Ivan Bašić",
    shirtNumber: 13,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-14",
    teamId: "team-bih",
    name: "Ivan Šunjić",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-15",
    teamId: "team-bih",
    name: "Amar Memić",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-16",
    teamId: "team-bih",
    name: "Amir Hadžiahmetović",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-17",
    teamId: "team-bih",
    name: "Dženis Burnić",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-18",
    teamId: "team-bih",
    name: "Nikola Katić",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-19",
    teamId: "team-bih",
    name: "Kerim Alajbegović",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 74,
    defenseRating: 60,
    staminaRating: 69,
    mentalityRating: 69,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-20",
    teamId: "team-bih",
    name: "Esmir Bajraktarević",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-21",
    teamId: "team-bih",
    name: "Stjepan Radeljić",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-22",
    teamId: "team-bih",
    name: "Martin Zlomislić",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 72,
    attackRating: 46,
    defenseRating: 80,
    staminaRating: 70,
    mentalityRating: 72,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-23",
    teamId: "team-bih",
    name: "Haris Tabaković",
    shirtNumber: 23,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-24",
    teamId: "team-bih",
    name: "Arjan Malić",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-25",
    teamId: "team-bih",
    name: "Jovo Lukić",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bih-player-26",
    teamId: "team-bih",
    name: "Ermin Mahmić",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 70,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-1",
    teamId: "team-can",
    name: "Dayne St. Clair",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 79,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-2",
    teamId: "team-can",
    name: "Alistair Johnston",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-3",
    teamId: "team-can",
    name: "Alfie Jones",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-4",
    teamId: "team-can",
    name: "Luc de Fougerolles",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-5",
    teamId: "team-can",
    name: "Joel Waterman",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-6",
    teamId: "team-can",
    name: "Mathieu Choinière",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-7",
    teamId: "team-can",
    name: "Stephen Eustáquio",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-can-player-8",
    teamId: "team-can",
    name: "Ismaël Koné",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-9",
    teamId: "team-can",
    name: "Cyle Larin",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-can-player-10",
    teamId: "team-can",
    name: "Jonathan David",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-can-player-11",
    teamId: "team-can",
    name: "Liam Millar",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-12",
    teamId: "team-can",
    name: "Tani Oluwaseyi",
    shirtNumber: 12,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-13",
    teamId: "team-can",
    name: "Derek Cornelius",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-14",
    teamId: "team-can",
    name: "Jacob Shaffelburg",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-15",
    teamId: "team-can",
    name: "Moïse Bombito",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-16",
    teamId: "team-can",
    name: "Maxime Crépeau",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 79,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-17",
    teamId: "team-can",
    name: "Tajon Buchanan",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-can-player-18",
    teamId: "team-can",
    name: "Owen Goodman",
    shirtNumber: 18,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 74,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-19",
    teamId: "team-can",
    name: "Alphonso Davies",
    shirtNumber: 19,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-can-player-20",
    teamId: "team-can",
    name: "Ali Ahmed",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-21",
    teamId: "team-can",
    name: "Jonathan Osorio",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-22",
    teamId: "team-can",
    name: "Richie Laryea",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-23",
    teamId: "team-can",
    name: "Niko Sigur",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-24",
    teamId: "team-can",
    name: "Promise David",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-25",
    teamId: "team-can",
    name: "Nathan Saliba",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-can-player-26",
    teamId: "team-can",
    name: "Jayden Nelson",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-1",
    teamId: "team-qat",
    name: "Mahmud Abunada",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 70,
    attackRating: 44,
    defenseRating: 78,
    staminaRating: 68,
    mentalityRating: 70,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-2",
    teamId: "team-qat",
    name: "Pedro Miguel",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-3",
    teamId: "team-qat",
    name: "Lucas Mendes",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-4",
    teamId: "team-qat",
    name: "Issa Laye",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-5",
    teamId: "team-qat",
    name: "Jassem Gaber",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-6",
    teamId: "team-qat",
    name: "Abdulaziz Hatem",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-7",
    teamId: "team-qat",
    name: "Ahmed Alaaeldin",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-qat-player-8",
    teamId: "team-qat",
    name: "Edmilson Junior",
    shirtNumber: 8,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 73,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-9",
    teamId: "team-qat",
    name: "Mohammed Muntari",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-10",
    teamId: "team-qat",
    name: "Hassan Al-Haydos",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-qat-player-11",
    teamId: "team-qat",
    name: "Akram Afif",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-qat-player-12",
    teamId: "team-qat",
    name: "Karim Boudiaf",
    shirtNumber: 12,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-13",
    teamId: "team-qat",
    name: "Ayoub Al-Oui",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-14",
    teamId: "team-qat",
    name: "Homam Ahmed",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-qat-player-15",
    teamId: "team-qat",
    name: "Yusuf Abdurisag",
    shirtNumber: 15,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-16",
    teamId: "team-qat",
    name: "Boualem Khoukhi",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-17",
    teamId: "team-qat",
    name: "Ahmed Al-Ganehi",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-18",
    teamId: "team-qat",
    name: "Sultan Al-Brake",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-19",
    teamId: "team-qat",
    name: "Almoez Ali",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-qat-player-20",
    teamId: "team-qat",
    name: "Ahmed Fathy",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-21",
    teamId: "team-qat",
    name: "Salah Zakaria",
    shirtNumber: 21,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 70,
    attackRating: 44,
    defenseRating: 78,
    staminaRating: 68,
    mentalityRating: 70,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-22",
    teamId: "team-qat",
    name: "Meshaal Barsham",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 73,
    attackRating: 47,
    defenseRating: 81,
    staminaRating: 71,
    mentalityRating: 76,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-23",
    teamId: "team-qat",
    name: "Assim Madibo",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-24",
    teamId: "team-qat",
    name: "Tahsin Jamshid",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 72,
    defenseRating: 58,
    staminaRating: 67,
    mentalityRating: 66,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-25",
    teamId: "team-qat",
    name: "Al-Hashmi Al-Hussain",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-qat-player-26",
    teamId: "team-qat",
    name: "Mohamed Manai",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 74,
    defenseRating: 60,
    staminaRating: 69,
    mentalityRating: 69,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-1",
    teamId: "team-sui",
    name: "Gregor Kobel",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 84,
    attackRating: 58,
    defenseRating: 92,
    staminaRating: 82,
    mentalityRating: 85,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-2",
    teamId: "team-sui",
    name: "Miro Muheim",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-3",
    teamId: "team-sui",
    name: "Silvan Widmer",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-4",
    teamId: "team-sui",
    name: "Nico Elvedi",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sui-player-5",
    teamId: "team-sui",
    name: "Manuel Akanji",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 93,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sui-player-6",
    teamId: "team-sui",
    name: "Denis Zakaria",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 92,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sui-player-7",
    teamId: "team-sui",
    name: "Breel Embolo",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 93,
    defenseRating: 78,
    staminaRating: 88,
    mentalityRating: 93,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sui-player-8",
    teamId: "team-sui",
    name: "Remo Freuler",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-9",
    teamId: "team-sui",
    name: "Johan Manzambi",
    shirtNumber: 9,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-10",
    teamId: "team-sui",
    name: "Granit Xhaka",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 93,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sui-player-11",
    teamId: "team-sui",
    name: "Dan Ndoye",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-12",
    teamId: "team-sui",
    name: "Yvon Mvogo",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 81,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-13",
    teamId: "team-sui",
    name: "Ricardo Rodriguez",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-14",
    teamId: "team-sui",
    name: "Ardon Jashari",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-15",
    teamId: "team-sui",
    name: "Djibril Sow",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-16",
    teamId: "team-sui",
    name: "Christian Fassnacht",
    shirtNumber: 16,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-17",
    teamId: "team-sui",
    name: "Rubén Vargas",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 86,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-18",
    teamId: "team-sui",
    name: "Eray Cömert",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-19",
    teamId: "team-sui",
    name: "Noah Okafor",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-20",
    teamId: "team-sui",
    name: "Michel Aebischer",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-21",
    teamId: "team-sui",
    name: "Marvin Keller",
    shirtNumber: 21,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 75,
    attackRating: 49,
    defenseRating: 83,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-22",
    teamId: "team-sui",
    name: "Fabian Rieder",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-23",
    teamId: "team-sui",
    name: "Zeki Amdouni",
    shirtNumber: 23,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-24",
    teamId: "team-sui",
    name: "Aurèle Amenda",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-25",
    teamId: "team-sui",
    name: "Luca Jaquez",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sui-player-26",
    teamId: "team-sui",
    name: "Cedric Itten",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-1",
    teamId: "team-bra",
    name: "Alisson",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 93,
    attackRating: 67,
    defenseRating: 96,
    staminaRating: 90,
    mentalityRating: 95,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bra-player-2",
    teamId: "team-bra",
    name: "Éderson Silva",
    shirtNumber: 2,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-3",
    teamId: "team-bra",
    name: "Gabriel Magalhães",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 92,
    mentalityRating: 92,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-4",
    teamId: "team-bra",
    name: "Marquinhos",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 93,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bra-player-5",
    teamId: "team-bra",
    name: "Casemiro",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 88,
    attackRating: 90,
    defenseRating: 89,
    staminaRating: 90,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-6",
    teamId: "team-bra",
    name: "Alex Sandro",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-7",
    teamId: "team-bra",
    name: "Vinícius Júnior",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 93,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bra-player-8",
    teamId: "team-bra",
    name: "Bruno Guimarães",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 92,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bra-player-9",
    teamId: "team-bra",
    name: "Matheus Cunha",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 93,
    defenseRating: 78,
    staminaRating: 88,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-10",
    teamId: "team-bra",
    name: "Neymar",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 91,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-11",
    teamId: "team-bra",
    name: "Raphinha",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 93,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bra-player-12",
    teamId: "team-bra",
    name: "Weverton",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 82,
    attackRating: 56,
    defenseRating: 90,
    staminaRating: 80,
    mentalityRating: 84,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-13",
    teamId: "team-bra",
    name: "Danilo Luiz",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-14",
    teamId: "team-bra",
    name: "Bremer",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 81,
    defenseRating: 93,
    staminaRating: 89,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-15",
    teamId: "team-bra",
    name: "Léo Pereira",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-16",
    teamId: "team-bra",
    name: "Douglas Santos",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-17",
    teamId: "team-bra",
    name: "Fabinho",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-18",
    teamId: "team-bra",
    name: "Danilo Santos",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-19",
    teamId: "team-bra",
    name: "Endrick",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-20",
    teamId: "team-bra",
    name: "Lucas Paquetá",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 88,
    attackRating: 90,
    defenseRating: 89,
    staminaRating: 90,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-21",
    teamId: "team-bra",
    name: "Luiz Henrique",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-22",
    teamId: "team-bra",
    name: "Gabriel Martinelli",
    shirtNumber: 22,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 91,
    mentalityRating: 91,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-23",
    teamId: "team-bra",
    name: "Ederson Moraes",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 86,
    attackRating: 60,
    defenseRating: 94,
    staminaRating: 84,
    mentalityRating: 89,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-24",
    teamId: "team-bra",
    name: "Roger Ibañez",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-25",
    teamId: "team-bra",
    name: "Igor Thiago",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bra-player-26",
    teamId: "team-bra",
    name: "Rayan",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-1",
    teamId: "team-hai",
    name: "Johny Placide",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-hai-player-2",
    teamId: "team-hai",
    name: "Carlens Arcus",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-hai-player-3",
    teamId: "team-hai",
    name: "Keeto Thermoncy",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 62,
    attackRating: 55,
    defenseRating: 67,
    staminaRating: 63,
    mentalityRating: 62,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-4",
    teamId: "team-hai",
    name: "Ricardo Adé",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 59,
    defenseRating: 71,
    staminaRating: 67,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-5",
    teamId: "team-hai",
    name: "Hannes Delcroix",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 59,
    defenseRating: 71,
    staminaRating: 67,
    mentalityRating: 66,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-6",
    teamId: "team-hai",
    name: "Carl Sainté",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 66,
    attackRating: 68,
    defenseRating: 67,
    staminaRating: 68,
    mentalityRating: 67,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-7",
    teamId: "team-hai",
    name: "Derrick Etienne Jr.",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 76,
    defenseRating: 62,
    staminaRating: 71,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-hai-player-8",
    teamId: "team-hai",
    name: "Martin Expérience",
    shirtNumber: 8,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-9",
    teamId: "team-hai",
    name: "Duckens Nazon",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-hai-player-10",
    teamId: "team-hai",
    name: "Jean-Ricner Bellegarde",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 68,
    attackRating: 70,
    defenseRating: 69,
    staminaRating: 70,
    mentalityRating: 69,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-11",
    teamId: "team-hai",
    name: "Louicius Deedson",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 75,
    defenseRating: 61,
    staminaRating: 70,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-12",
    teamId: "team-hai",
    name: "Alexandre Pierre",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 66,
    attackRating: 40,
    defenseRating: 74,
    staminaRating: 64,
    mentalityRating: 67,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-13",
    teamId: "team-hai",
    name: "Duke Lacroix",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 65,
    attackRating: 58,
    defenseRating: 70,
    staminaRating: 66,
    mentalityRating: 67,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-14",
    teamId: "team-hai",
    name: "Garven Metusala",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 59,
    defenseRating: 71,
    staminaRating: 67,
    mentalityRating: 67,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-15",
    teamId: "team-hai",
    name: "Ruben Providence",
    shirtNumber: 15,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 73,
    defenseRating: 59,
    staminaRating: 68,
    mentalityRating: 68,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-16",
    teamId: "team-hai",
    name: "Lenny Joseph",
    shirtNumber: 16,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 65,
    attackRating: 71,
    defenseRating: 57,
    staminaRating: 66,
    mentalityRating: 65,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-17",
    teamId: "team-hai",
    name: "Danley Jean Jacques",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 67,
    attackRating: 69,
    defenseRating: 68,
    staminaRating: 69,
    mentalityRating: 69,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-18",
    teamId: "team-hai",
    name: "Wilson Isidor",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 73,
    defenseRating: 59,
    staminaRating: 68,
    mentalityRating: 67,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-19",
    teamId: "team-hai",
    name: "Yassin Fortuné",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 72,
    defenseRating: 58,
    staminaRating: 67,
    mentalityRating: 66,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-20",
    teamId: "team-hai",
    name: "Frantzdy Pierrot",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-hai-player-21",
    teamId: "team-hai",
    name: "Josué Casimir",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 73,
    defenseRating: 59,
    staminaRating: 68,
    mentalityRating: 67,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-22",
    teamId: "team-hai",
    name: "Jean-Kévin Duverne",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 60,
    defenseRating: 72,
    staminaRating: 68,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-23",
    teamId: "team-hai",
    name: "Josué Duverger",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 66,
    attackRating: 40,
    defenseRating: 74,
    staminaRating: 64,
    mentalityRating: 66,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-24",
    teamId: "team-hai",
    name: "Wilguens Paugain",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 59,
    defenseRating: 71,
    staminaRating: 67,
    mentalityRating: 66,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-25",
    teamId: "team-hai",
    name: "Dominique Simon",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 65,
    attackRating: 67,
    defenseRating: 66,
    staminaRating: 67,
    mentalityRating: 65,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-hai-player-26",
    teamId: "team-hai",
    name: "Woodensky Pierre",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 62,
    attackRating: 64,
    defenseRating: 63,
    staminaRating: 64,
    mentalityRating: 62,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-1",
    teamId: "team-mar",
    name: "Yassine Bounou",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 84,
    attackRating: 58,
    defenseRating: 92,
    staminaRating: 82,
    mentalityRating: 90,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-2",
    teamId: "team-mar",
    name: "Achraf Hakimi",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 82,
    defenseRating: 94,
    staminaRating: 90,
    mentalityRating: 93,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mar-player-3",
    teamId: "team-mar",
    name: "Noussair Mazraoui",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-4",
    teamId: "team-mar",
    name: "Sofyan Amrabat",
    shirtNumber: 4,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mar-player-5",
    teamId: "team-mar",
    name: "Marwane Saâdane",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-6",
    teamId: "team-mar",
    name: "Ayyoub Bouaddi",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-7",
    teamId: "team-mar",
    name: "Chemsdine Talbi",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-8",
    teamId: "team-mar",
    name: "Azzedine Ounahi",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-9",
    teamId: "team-mar",
    name: "Soufiane Rahimi",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-10",
    teamId: "team-mar",
    name: "Brahim Díaz",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 95,
    defenseRating: 78,
    staminaRating: 90,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mar-player-11",
    teamId: "team-mar",
    name: "Ismael Saibari",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 89,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mar-player-12",
    teamId: "team-mar",
    name: "Munir Mohamedi",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 80,
    attackRating: 54,
    defenseRating: 88,
    staminaRating: 78,
    mentalityRating: 84,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-13",
    teamId: "team-mar",
    name: "Zakaria El Ouahdi",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-14",
    teamId: "team-mar",
    name: "Issa Diop",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-15",
    teamId: "team-mar",
    name: "Samir El Mourabet",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-16",
    teamId: "team-mar",
    name: "Gessime Yassine",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-17",
    teamId: "team-mar",
    name: "Amine Sbaï",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-18",
    teamId: "team-mar",
    name: "Chadi Riad",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-19",
    teamId: "team-mar",
    name: "Youssef Belammari",
    shirtNumber: 19,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-20",
    teamId: "team-mar",
    name: "Ayoub El Kaabi",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-mar-player-21",
    teamId: "team-mar",
    name: "Ayoube Amaimouni",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-22",
    teamId: "team-mar",
    name: "Ahmed Reda Tagnaouti",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 81,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-23",
    teamId: "team-mar",
    name: "Bilal El Khannouss",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-24",
    teamId: "team-mar",
    name: "Neil El Aynaoui",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-25",
    teamId: "team-mar",
    name: "Redouane Halhal",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-mar-player-26",
    teamId: "team-mar",
    name: "Anass Salah-Eddine",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-1",
    teamId: "team-sco",
    name: "Angus Gunn",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 82,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-2",
    teamId: "team-sco",
    name: "Aaron Hickey",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-3",
    teamId: "team-sco",
    name: "Andy Robertson",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 91,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sco-player-4",
    teamId: "team-sco",
    name: "Scott McTominay",
    shirtNumber: 4,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 90,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sco-player-5",
    teamId: "team-sco",
    name: "Grant Hanley",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-6",
    teamId: "team-sco",
    name: "Kieran Tierney",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-7",
    teamId: "team-sco",
    name: "John McGinn",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sco-player-8",
    teamId: "team-sco",
    name: "Tyler Fletcher",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-9",
    teamId: "team-sco",
    name: "Lyndon Dykes",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-10",
    teamId: "team-sco",
    name: "Ché Adams",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 86,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sco-player-11",
    teamId: "team-sco",
    name: "Ryan Christie",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sco-player-12",
    teamId: "team-sco",
    name: "Liam Kelly",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 75,
    attackRating: 49,
    defenseRating: 83,
    staminaRating: 73,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-13",
    teamId: "team-sco",
    name: "Jack Hendry",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-14",
    teamId: "team-sco",
    name: "Ross Stewart",
    shirtNumber: 14,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-15",
    teamId: "team-sco",
    name: "John Souttar",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-16",
    teamId: "team-sco",
    name: "Dominic Hyam",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-17",
    teamId: "team-sco",
    name: "Ben Gannon-Doak",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-18",
    teamId: "team-sco",
    name: "George Hirst",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-19",
    teamId: "team-sco",
    name: "Lewis Ferguson",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-20",
    teamId: "team-sco",
    name: "Lawrence Shankland",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-21",
    teamId: "team-sco",
    name: "Craig Gordon",
    shirtNumber: 21,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 78,
    attackRating: 52,
    defenseRating: 86,
    staminaRating: 76,
    mentalityRating: 84,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-22",
    teamId: "team-sco",
    name: "Nathan Patterson",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-23",
    teamId: "team-sco",
    name: "Kenny McLean",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-24",
    teamId: "team-sco",
    name: "Anthony Ralston",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-25",
    teamId: "team-sco",
    name: "Findlay Curtis",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sco-player-26",
    teamId: "team-sco",
    name: "Scott McKenna",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-1",
    teamId: "team-aus",
    name: "Mathew Ryan",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 80,
    attackRating: 54,
    defenseRating: 88,
    staminaRating: 78,
    mentalityRating: 86,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aus-player-2",
    teamId: "team-aus",
    name: "Miloš Degenek",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-3",
    teamId: "team-aus",
    name: "Alessandro Circati",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-4",
    teamId: "team-aus",
    name: "Jacob Italiano",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-5",
    teamId: "team-aus",
    name: "Jordan Bos",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-6",
    teamId: "team-aus",
    name: "Jason Geria",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-7",
    teamId: "team-aus",
    name: "Mathew Leckie",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-8",
    teamId: "team-aus",
    name: "Connor Metcalfe",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aus-player-9",
    teamId: "team-aus",
    name: "Mohamed Touré",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-10",
    teamId: "team-aus",
    name: "Ajdin Hrustic",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aus-player-11",
    teamId: "team-aus",
    name: "Awer Mabil",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aus-player-12",
    teamId: "team-aus",
    name: "Paul Izzo",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 72,
    attackRating: 46,
    defenseRating: 80,
    staminaRating: 70,
    mentalityRating: 74,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-13",
    teamId: "team-aus",
    name: "Aiden O'Neill",
    shirtNumber: 13,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-14",
    teamId: "team-aus",
    name: "Cammy Devlin",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-15",
    teamId: "team-aus",
    name: "Kai Trewin",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-16",
    teamId: "team-aus",
    name: "Aziz Behich",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-17",
    teamId: "team-aus",
    name: "Nestory Irankunda",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-18",
    teamId: "team-aus",
    name: "Patrick Beach",
    shirtNumber: 18,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 71,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-19",
    teamId: "team-aus",
    name: "Harry Souttar",
    shirtNumber: 19,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-20",
    teamId: "team-aus",
    name: "Cristian Volpato",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-21",
    teamId: "team-aus",
    name: "Cameron Burgess",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-22",
    teamId: "team-aus",
    name: "Jackson Irvine",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aus-player-23",
    teamId: "team-aus",
    name: "Nishan Velupillay",
    shirtNumber: 23,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-24",
    teamId: "team-aus",
    name: "Paul Okon-Engstler",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 70,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-25",
    teamId: "team-aus",
    name: "Lucas Herrington",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aus-player-26",
    teamId: "team-aus",
    name: "Tete Yengi",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-1",
    teamId: "team-par",
    name: "Gatito Fernández",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-2",
    teamId: "team-par",
    name: "Gustavo Velázquez",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-3",
    teamId: "team-par",
    name: "Omar Alderete",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-par-player-4",
    teamId: "team-par",
    name: "Juan José Cáceres",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-5",
    teamId: "team-par",
    name: "Fabián Balbuena",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-6",
    teamId: "team-par",
    name: "Júnior Alonso",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-par-player-7",
    teamId: "team-par",
    name: "Ramón Sosa",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-8",
    teamId: "team-par",
    name: "Diego Gómez",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-9",
    teamId: "team-par",
    name: "Antonio Sanabria",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-par-player-10",
    teamId: "team-par",
    name: "Miguel Almirón",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-par-player-11",
    teamId: "team-par",
    name: "Maurício",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-12",
    teamId: "team-par",
    name: "Orlando Gill",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 72,
    attackRating: 46,
    defenseRating: 80,
    staminaRating: 70,
    mentalityRating: 72,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-13",
    teamId: "team-par",
    name: "José Canale",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-14",
    teamId: "team-par",
    name: "Andrés Cubas",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-15",
    teamId: "team-par",
    name: "Gustavo Gómez",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-par-player-16",
    teamId: "team-par",
    name: "Damián Bobadilla",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-17",
    teamId: "team-par",
    name: "Kaku",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-18",
    teamId: "team-par",
    name: "Álex Arce",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-19",
    teamId: "team-par",
    name: "Julio Enciso",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-20",
    teamId: "team-par",
    name: "Braian Ojeda",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-21",
    teamId: "team-par",
    name: "Gabriel Ávalos",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-22",
    teamId: "team-par",
    name: "Gastón Olveira",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 72,
    attackRating: 46,
    defenseRating: 80,
    staminaRating: 70,
    mentalityRating: 74,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-23",
    teamId: "team-par",
    name: "Matías Galarza",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-24",
    teamId: "team-par",
    name: "Gustavo Caballero",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-25",
    teamId: "team-par",
    name: "Isidro Pitta",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-par-player-26",
    teamId: "team-par",
    name: "Alexandro Maidana",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 69,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-1",
    teamId: "team-tur",
    name: "Mert Günok",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 82,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-2",
    teamId: "team-tur",
    name: "Zeki Çelik",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tur-player-3",
    teamId: "team-tur",
    name: "Merih Demiral",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-4",
    teamId: "team-tur",
    name: "Çağlar Söyüncü",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-5",
    teamId: "team-tur",
    name: "Salih Özcan",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tur-player-6",
    teamId: "team-tur",
    name: "Orkun Kökçü",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-7",
    teamId: "team-tur",
    name: "Kerem Aktürkoğlu",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tur-player-8",
    teamId: "team-tur",
    name: "Arda Güler",
    shirtNumber: 8,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 92,
    defenseRating: 78,
    staminaRating: 87,
    mentalityRating: 87,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tur-player-9",
    teamId: "team-tur",
    name: "Deniz Gül",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-10",
    teamId: "team-tur",
    name: "Hakan Çalhanoğlu",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 92,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tur-player-11",
    teamId: "team-tur",
    name: "Kenan Yıldız",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-12",
    teamId: "team-tur",
    name: "Altay Bayındır",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 78,
    attackRating: 52,
    defenseRating: 86,
    staminaRating: 76,
    mentalityRating: 79,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-13",
    teamId: "team-tur",
    name: "Eren Elmalı",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-14",
    teamId: "team-tur",
    name: "Abdülkerim Bardakcı",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-15",
    teamId: "team-tur",
    name: "Ozan Kabak",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-16",
    teamId: "team-tur",
    name: "İsmail Yüksek",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-17",
    teamId: "team-tur",
    name: "İrfan Can Kahveci",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-18",
    teamId: "team-tur",
    name: "Mert Müldür",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-19",
    teamId: "team-tur",
    name: "Yunus Akgün",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-20",
    teamId: "team-tur",
    name: "Ferdi Kadıoğlu",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-21",
    teamId: "team-tur",
    name: "Barış Alper Yılmaz",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-22",
    teamId: "team-tur",
    name: "Kaan Ayhan",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-23",
    teamId: "team-tur",
    name: "Uğurcan Çakır",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 82,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-24",
    teamId: "team-tur",
    name: "Oğuz Aydın",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-25",
    teamId: "team-tur",
    name: "Samet Akaydin",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tur-player-26",
    teamId: "team-tur",
    name: "Can Uzun",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-1",
    teamId: "team-usa-sample",
    name: "Matt Turner",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 81,
    attackRating: 55,
    defenseRating: 89,
    staminaRating: 79,
    mentalityRating: 85,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-2",
    teamId: "team-usa-sample",
    name: "Sergiño Dest",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-3",
    teamId: "team-usa-sample",
    name: "Chris Richards",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-4",
    teamId: "team-usa-sample",
    name: "Tyler Adams",
    shirtNumber: 4,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-5",
    teamId: "team-usa-sample",
    name: "Antonee Robinson",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-6",
    teamId: "team-usa-sample",
    name: "Auston Trusty",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-7",
    teamId: "team-usa-sample",
    name: "Giovanni Reyna",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-8",
    teamId: "team-usa-sample",
    name: "Weston McKennie",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 89,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-9",
    teamId: "team-usa-sample",
    name: "Ricardo Pepi",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-10",
    teamId: "team-usa-sample",
    name: "Christian Pulisic",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 92,
    defenseRating: 78,
    staminaRating: 87,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-11",
    teamId: "team-usa-sample",
    name: "Brenden Aaronson",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 86,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-12",
    teamId: "team-usa-sample",
    name: "Miles Robinson",
    shirtNumber: 12,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-13",
    teamId: "team-usa-sample",
    name: "Tim Ream",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-14",
    teamId: "team-usa-sample",
    name: "Sebastian Berhalter",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-15",
    teamId: "team-usa-sample",
    name: "Cristian Roldan",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-16",
    teamId: "team-usa-sample",
    name: "Alex Freeman",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-17",
    teamId: "team-usa-sample",
    name: "Malik Tillman",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-18",
    teamId: "team-usa-sample",
    name: "Max Arfsten",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-19",
    teamId: "team-usa-sample",
    name: "Haji Wright",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-20",
    teamId: "team-usa-sample",
    name: "Folarin Balogun",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-21",
    teamId: "team-usa-sample",
    name: "Timothy Weah",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-22",
    teamId: "team-usa-sample",
    name: "Mark McKenzie",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-23",
    teamId: "team-usa-sample",
    name: "Joe Scally",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-24",
    teamId: "team-usa-sample",
    name: "Matt Freese",
    shirtNumber: 24,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 77,
    attackRating: 51,
    defenseRating: 85,
    staminaRating: 75,
    mentalityRating: 78,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-25",
    teamId: "team-usa-sample",
    name: "Chris Brady",
    shirtNumber: 25,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 75,
    attackRating: 49,
    defenseRating: 83,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-usa-sample-player-26",
    teamId: "team-usa-sample",
    name: "Alejandro Zendejas",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-1",
    teamId: "team-cuw",
    name: "Eloy Room",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 76,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-2",
    teamId: "team-cuw",
    name: "Shurandy Sambo",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-3",
    teamId: "team-cuw",
    name: "Juriën Gaari",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-4",
    teamId: "team-cuw",
    name: "Roshon van Eijma",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-5",
    teamId: "team-cuw",
    name: "Sherel Floranus",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-6",
    teamId: "team-cuw",
    name: "Godfried Roemeratoe",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-7",
    teamId: "team-cuw",
    name: "Juninho Bacuna",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-8",
    teamId: "team-cuw",
    name: "Livano Comenencia",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 67,
    attackRating: 69,
    defenseRating: 68,
    staminaRating: 69,
    mentalityRating: 68,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-9",
    teamId: "team-cuw",
    name: "Jürgen Locadia",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 74,
    defenseRating: 60,
    staminaRating: 69,
    mentalityRating: 70,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-10",
    teamId: "team-cuw",
    name: "Leandro Bacuna",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-11",
    teamId: "team-cuw",
    name: "Jeremy Antonisse",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 76,
    defenseRating: 62,
    staminaRating: 71,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-12",
    teamId: "team-cuw",
    name: "Sontje Hansen",
    shirtNumber: 12,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 75,
    defenseRating: 61,
    staminaRating: 70,
    mentalityRating: 69,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-13",
    teamId: "team-cuw",
    name: "Tyrese Noslin",
    shirtNumber: 13,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 72,
    defenseRating: 58,
    staminaRating: 67,
    mentalityRating: 66,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-14",
    teamId: "team-cuw",
    name: "Kenji Gorré",
    shirtNumber: 14,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 74,
    defenseRating: 60,
    staminaRating: 69,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-15",
    teamId: "team-cuw",
    name: "Ar'jany Martha",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 67,
    attackRating: 69,
    defenseRating: 68,
    staminaRating: 69,
    mentalityRating: 67,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-16",
    teamId: "team-cuw",
    name: "Jearl Margaritha",
    shirtNumber: 16,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 75,
    defenseRating: 61,
    staminaRating: 70,
    mentalityRating: 70,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-17",
    teamId: "team-cuw",
    name: "Brandley Kuwas",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 75,
    defenseRating: 61,
    staminaRating: 70,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-18",
    teamId: "team-cuw",
    name: "Armando Obispo",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-19",
    teamId: "team-cuw",
    name: "Gervane Kastaneer",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 74,
    defenseRating: 60,
    staminaRating: 69,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-20",
    teamId: "team-cuw",
    name: "Joshua Brenet",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-21",
    teamId: "team-cuw",
    name: "Tahith Chong",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 69,
    attackRating: 71,
    defenseRating: 70,
    staminaRating: 71,
    mentalityRating: 69,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-22",
    teamId: "team-cuw",
    name: "Kevin Felida",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 69,
    attackRating: 71,
    defenseRating: 70,
    staminaRating: 71,
    mentalityRating: 70,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-23",
    teamId: "team-cuw",
    name: "Riechedly Bazoer",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-24",
    teamId: "team-cuw",
    name: "Deveron Fonville",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 59,
    defenseRating: 71,
    staminaRating: 67,
    mentalityRating: 66,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-25",
    teamId: "team-cuw",
    name: "Tyrick Bodak",
    shirtNumber: 25,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 67,
    attackRating: 41,
    defenseRating: 75,
    staminaRating: 65,
    mentalityRating: 67,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cuw-player-26",
    teamId: "team-cuw",
    name: "Trevor Doornbusch",
    shirtNumber: 26,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 67,
    attackRating: 41,
    defenseRating: 75,
    staminaRating: 65,
    mentalityRating: 67,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-1",
    teamId: "team-ecu",
    name: "Hernán Galíndez",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 78,
    attackRating: 52,
    defenseRating: 86,
    staminaRating: 76,
    mentalityRating: 81,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-2",
    teamId: "team-ecu",
    name: "Félix Torres",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-3",
    teamId: "team-ecu",
    name: "Piero Hincapié",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 79,
    defenseRating: 91,
    staminaRating: 87,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-4",
    teamId: "team-ecu",
    name: "Joel Ordóñez",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-5",
    teamId: "team-ecu",
    name: "Jordy Alcívar",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-6",
    teamId: "team-ecu",
    name: "Willian Pacho",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-7",
    teamId: "team-ecu",
    name: "Pervis Estupiñán",
    shirtNumber: 7,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-8",
    teamId: "team-ecu",
    name: "Anthony Valencia",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-9",
    teamId: "team-ecu",
    name: "John Yeboah",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-10",
    teamId: "team-ecu",
    name: "Kendry Páez",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-11",
    teamId: "team-ecu",
    name: "Kevin Rodríguez",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-12",
    teamId: "team-ecu",
    name: "Moisés Ramírez",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 75,
    attackRating: 49,
    defenseRating: 83,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-13",
    teamId: "team-ecu",
    name: "Enner Valencia",
    shirtNumber: 13,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-14",
    teamId: "team-ecu",
    name: "Alan Minda",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-15",
    teamId: "team-ecu",
    name: "Pedro Vite",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-16",
    teamId: "team-ecu",
    name: "Jordy Caicedo",
    shirtNumber: 16,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-17",
    teamId: "team-ecu",
    name: "Ángelo Preciado",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-18",
    teamId: "team-ecu",
    name: "Denil Castillo",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-19",
    teamId: "team-ecu",
    name: "Gonzalo Plata",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-20",
    teamId: "team-ecu",
    name: "Nilson Angulo",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-21",
    teamId: "team-ecu",
    name: "Alan Franco",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-22",
    teamId: "team-ecu",
    name: "Gonzalo Valle",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 78,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-23",
    teamId: "team-ecu",
    name: "Moisés Caicedo",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-24",
    teamId: "team-ecu",
    name: "Jeremy Arévalo",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-25",
    teamId: "team-ecu",
    name: "Jackson Porozo",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ecu-player-26",
    teamId: "team-ecu",
    name: "Yaimar Medina",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-1",
    teamId: "team-ger",
    name: "Manuel Neuer",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 92,
    attackRating: 66,
    defenseRating: 96,
    staminaRating: 90,
    mentalityRating: 95,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ger-player-2",
    teamId: "team-ger",
    name: "Antonio Rüdiger",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 92,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ger-player-3",
    teamId: "team-ger",
    name: "Waldemar Anton",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 81,
    defenseRating: 93,
    staminaRating: 89,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-4",
    teamId: "team-ger",
    name: "Jonathan Tah",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 83,
    defenseRating: 95,
    staminaRating: 91,
    mentalityRating: 94,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-5",
    teamId: "team-ger",
    name: "Aleksandar Pavlović",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-6",
    teamId: "team-ger",
    name: "Joshua Kimmich",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 92,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ger-player-7",
    teamId: "team-ger",
    name: "Kai Havertz",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 92,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ger-player-8",
    teamId: "team-ger",
    name: "Leon Goretzka",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 92,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ger-player-9",
    teamId: "team-ger",
    name: "Jamie Leweling",
    shirtNumber: 9,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-10",
    teamId: "team-ger",
    name: "Jamal Musiala",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 92,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-11",
    teamId: "team-ger",
    name: "Nick Woltemade",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 95,
    defenseRating: 78,
    staminaRating: 90,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-12",
    teamId: "team-ger",
    name: "Oliver Baumann",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 83,
    attackRating: 57,
    defenseRating: 91,
    staminaRating: 81,
    mentalityRating: 85,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-13",
    teamId: "team-ger",
    name: "Pascal Groß",
    shirtNumber: 13,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-14",
    teamId: "team-ger",
    name: "Maximilian Beier",
    shirtNumber: 14,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-15",
    teamId: "team-ger",
    name: "Nico Schlotterbeck",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 81,
    defenseRating: 93,
    staminaRating: 89,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-16",
    teamId: "team-ger",
    name: "Angelo Stiller",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-17",
    teamId: "team-ger",
    name: "Florian Wirtz",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 92,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-18",
    teamId: "team-ger",
    name: "Nathaniel Brown",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-19",
    teamId: "team-ger",
    name: "Leroy Sané",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 92,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-20",
    teamId: "team-ger",
    name: "Nadiem Amiri",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-21",
    teamId: "team-ger",
    name: "Alexander Nübel",
    shirtNumber: 21,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 83,
    attackRating: 57,
    defenseRating: 91,
    staminaRating: 81,
    mentalityRating: 85,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-22",
    teamId: "team-ger",
    name: "David Raum",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 79,
    defenseRating: 91,
    staminaRating: 87,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-23",
    teamId: "team-ger",
    name: "Felix Nmecha",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-24",
    teamId: "team-ger",
    name: "Malick Thiaw",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-25",
    teamId: "team-ger",
    name: "Assan Ouédraogo",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ger-player-26",
    teamId: "team-ger",
    name: "Deniz Undav",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-1",
    teamId: "team-civ",
    name: "Yahia Fofana",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 81,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-2",
    teamId: "team-civ",
    name: "Ousmane Diomande",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-3",
    teamId: "team-civ",
    name: "Ghislain Konan",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-4",
    teamId: "team-civ",
    name: "Jean Michaël Seri",
    shirtNumber: 4,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-5",
    teamId: "team-civ",
    name: "Wilfried Singo",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-6",
    teamId: "team-civ",
    name: "Seko Fofana",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-civ-player-7",
    teamId: "team-civ",
    name: "Odilon Kossounou",
    shirtNumber: 7,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-8",
    teamId: "team-civ",
    name: "Franck Kessié",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 89,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-civ-player-9",
    teamId: "team-civ",
    name: "Ange-Yoan Bonny",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-10",
    teamId: "team-civ",
    name: "Simon Adingra",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-civ-player-11",
    teamId: "team-civ",
    name: "Yan Diomande",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-12",
    teamId: "team-civ",
    name: "Elye Wahi",
    shirtNumber: 12,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-13",
    teamId: "team-civ",
    name: "Christopher Opéri",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-14",
    teamId: "team-civ",
    name: "Oumar Diakité",
    shirtNumber: 14,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-15",
    teamId: "team-civ",
    name: "Amad Diallo",
    shirtNumber: 15,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-16",
    teamId: "team-civ",
    name: "Mohamed Koné",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 76,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-17",
    teamId: "team-civ",
    name: "Guéla Doué",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-18",
    teamId: "team-civ",
    name: "Ibrahim Sangaré",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-civ-player-19",
    teamId: "team-civ",
    name: "Nicolas Pépé",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-civ-player-20",
    teamId: "team-civ",
    name: "Emmanuel Agbadou",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-21",
    teamId: "team-civ",
    name: "Evan Ndicka",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-22",
    teamId: "team-civ",
    name: "Evann Guessand",
    shirtNumber: 22,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-23",
    teamId: "team-civ",
    name: "Alban Lafont",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 76,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-24",
    teamId: "team-civ",
    name: "Bazoumana Touré",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-25",
    teamId: "team-civ",
    name: "Parfait Guiagon",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-civ-player-26",
    teamId: "team-civ",
    name: "Christ Inao Oulaï",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-1",
    teamId: "team-jpn-sample",
    name: "Zion Suzuki",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 80,
    attackRating: 54,
    defenseRating: 88,
    staminaRating: 78,
    mentalityRating: 81,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-2",
    teamId: "team-jpn-sample",
    name: "Yukinari Sugawara",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-3",
    teamId: "team-jpn-sample",
    name: "Shōgo Taniguchi",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-4",
    teamId: "team-jpn-sample",
    name: "Kō Itakura",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-5",
    teamId: "team-jpn-sample",
    name: "Yūto Nagatomo",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-6",
    teamId: "team-jpn-sample",
    name: "Shūto Machino",
    shirtNumber: 6,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-7",
    teamId: "team-jpn-sample",
    name: "Ao Tanaka",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-8",
    teamId: "team-jpn-sample",
    name: "Takefusa Kubo",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-9",
    teamId: "team-jpn-sample",
    name: "Keisuke Gotō",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-10",
    teamId: "team-jpn-sample",
    name: "Ritsu Dōan",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-11",
    teamId: "team-jpn-sample",
    name: "Daizen Maeda",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-12",
    teamId: "team-jpn-sample",
    name: "Keisuke Ōsako",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-13",
    teamId: "team-jpn-sample",
    name: "Keito Nakamura",
    shirtNumber: 13,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-14",
    teamId: "team-jpn-sample",
    name: "Junya Itō",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-15",
    teamId: "team-jpn-sample",
    name: "Daichi Kamada",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-16",
    teamId: "team-jpn-sample",
    name: "Tsuyoshi Watanabe",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-17",
    teamId: "team-jpn-sample",
    name: "Yuito Suzuki",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-18",
    teamId: "team-jpn-sample",
    name: "Ayase Ueda",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-19",
    teamId: "team-jpn-sample",
    name: "Kōki Ogawa",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-20",
    teamId: "team-jpn-sample",
    name: "Ayumu Seko",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-21",
    teamId: "team-jpn-sample",
    name: "Hiroki Itō",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-22",
    teamId: "team-jpn-sample",
    name: "Takehiro Tomiyasu",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-23",
    teamId: "team-jpn-sample",
    name: "Tomoki Hayakawa",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 77,
    attackRating: 51,
    defenseRating: 85,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-24",
    teamId: "team-jpn-sample",
    name: "Kaishū Sano",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-25",
    teamId: "team-jpn-sample",
    name: "Junnosuke Suzuki",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jpn-sample-player-26",
    teamId: "team-jpn-sample",
    name: "Kento Shiogai",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-1",
    teamId: "team-ned",
    name: "Bart Verbruggen",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 84,
    attackRating: 58,
    defenseRating: 92,
    staminaRating: 82,
    mentalityRating: 85,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-2",
    teamId: "team-ned",
    name: "Lutsharel Geertruida",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-3",
    teamId: "team-ned",
    name: "Marten de Roon",
    shirtNumber: 3,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-4",
    teamId: "team-ned",
    name: "Virgil van Dijk",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 92,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ned-player-5",
    teamId: "team-ned",
    name: "Nathan Aké",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 92,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ned-player-6",
    teamId: "team-ned",
    name: "Jan Paul van Hecke",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-7",
    teamId: "team-ned",
    name: "Justin Kluivert",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-8",
    teamId: "team-ned",
    name: "Ryan Gravenberch",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 89,
    attackRating: 91,
    defenseRating: 90,
    staminaRating: 91,
    mentalityRating: 90,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-9",
    teamId: "team-ned",
    name: "Wout Weghorst",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 91,
    mentalityRating: 94,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-10",
    teamId: "team-ned",
    name: "Memphis Depay",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 91,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ned-player-11",
    teamId: "team-ned",
    name: "Cody Gakpo",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 92,
    mentalityRating: 94,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ned-player-12",
    teamId: "team-ned",
    name: "Mats Wieffer",
    shirtNumber: 12,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-13",
    teamId: "team-ned",
    name: "Robin Roefs",
    shirtNumber: 13,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 81,
    attackRating: 55,
    defenseRating: 89,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-14",
    teamId: "team-ned",
    name: "Tijjani Reijnders",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 89,
    attackRating: 91,
    defenseRating: 90,
    staminaRating: 91,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-15",
    teamId: "team-ned",
    name: "Micky van de Ven",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-16",
    teamId: "team-ned",
    name: "Guus Til",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-17",
    teamId: "team-ned",
    name: "Noa Lang",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-18",
    teamId: "team-ned",
    name: "Donyell Malen",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 93,
    defenseRating: 78,
    staminaRating: 88,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-19",
    teamId: "team-ned",
    name: "Brian Brobbey",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-20",
    teamId: "team-ned",
    name: "Teun Koopmeiners",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-21",
    teamId: "team-ned",
    name: "Frenkie de Jong",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 91,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ned-player-22",
    teamId: "team-ned",
    name: "Denzel Dumfries",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 83,
    defenseRating: 95,
    staminaRating: 91,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-23",
    teamId: "team-ned",
    name: "Mark Flekken",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 86,
    attackRating: 60,
    defenseRating: 94,
    staminaRating: 84,
    mentalityRating: 88,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-24",
    teamId: "team-ned",
    name: "Crysencio Summerville",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-25",
    teamId: "team-ned",
    name: "Jorrel Hato",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ned-player-26",
    teamId: "team-ned",
    name: "Quinten Timber",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-1",
    teamId: "team-swe",
    name: "Jacob Widell Zetterström",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 77,
    attackRating: 51,
    defenseRating: 85,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-2",
    teamId: "team-swe",
    name: "Gustaf Lagerbielke",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-3",
    teamId: "team-swe",
    name: "Victor Lindelöf",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-swe-player-4",
    teamId: "team-swe",
    name: "Isak Hien",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-5",
    teamId: "team-swe",
    name: "Gabriel Gudmundsson",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-6",
    teamId: "team-swe",
    name: "Herman Johansson",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-7",
    teamId: "team-swe",
    name: "Lucas Bergvall",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-8",
    teamId: "team-swe",
    name: "Daniel Svensson",
    shirtNumber: 8,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-swe-player-9",
    teamId: "team-swe",
    name: "Alexander Isak",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 87,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-swe-player-10",
    teamId: "team-swe",
    name: "Benjamin Nygren",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-11",
    teamId: "team-swe",
    name: "Anthony Elanga",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-swe-player-12",
    teamId: "team-swe",
    name: "Viktor Johansson",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-13",
    teamId: "team-swe",
    name: "Ken Sema",
    shirtNumber: 13,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-14",
    teamId: "team-swe",
    name: "Hjalmar Ekdal",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-15",
    teamId: "team-swe",
    name: "Carl Starfelt",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-16",
    teamId: "team-swe",
    name: "Jesper Karlström",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-17",
    teamId: "team-swe",
    name: "Viktor Gyökeres",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-swe-player-18",
    teamId: "team-swe",
    name: "Yasin Ayari",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-19",
    teamId: "team-swe",
    name: "Mattias Svanberg",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-20",
    teamId: "team-swe",
    name: "Eric Smith",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-21",
    teamId: "team-swe",
    name: "Alexander Bernhardsson",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-22",
    teamId: "team-swe",
    name: "Besfort Zeneli",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-23",
    teamId: "team-swe",
    name: "Kristoffer Nordfeldt",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 73,
    attackRating: 47,
    defenseRating: 81,
    staminaRating: 71,
    mentalityRating: 76,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-24",
    teamId: "team-swe",
    name: "Elliot Stroud",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-25",
    teamId: "team-swe",
    name: "Gustaf Nilsson",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-swe-player-26",
    teamId: "team-swe",
    name: "Taha Ali",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-1",
    teamId: "team-tun",
    name: "Mouhib Chamakh",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 71,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-2",
    teamId: "team-tun",
    name: "Ali Abdi",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tun-player-3",
    teamId: "team-tun",
    name: "Montassar Talbi",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tun-player-4",
    teamId: "team-tun",
    name: "Omar Rekik",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-5",
    teamId: "team-tun",
    name: "Adem Arous",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-6",
    teamId: "team-tun",
    name: "Dylan Bronn",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-7",
    teamId: "team-tun",
    name: "Elias Achouri",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-8",
    teamId: "team-tun",
    name: "Elias Saad",
    shirtNumber: 8,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tun-player-9",
    teamId: "team-tun",
    name: "Hazem Mastouri",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-10",
    teamId: "team-tun",
    name: "Hannibal Mejbri",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-11",
    teamId: "team-tun",
    name: "Ismaël Gharbi",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-12",
    teamId: "team-tun",
    name: "Mortadha Ben Ouanes",
    shirtNumber: 12,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-13",
    teamId: "team-tun",
    name: "Rani Khedira",
    shirtNumber: 13,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-14",
    teamId: "team-tun",
    name: "Khalil Ayari",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-15",
    teamId: "team-tun",
    name: "Hadj Mahmoud",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 71,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-16",
    teamId: "team-tun",
    name: "Aymen Dahmen",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 73,
    attackRating: 47,
    defenseRating: 81,
    staminaRating: 71,
    mentalityRating: 76,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-17",
    teamId: "team-tun",
    name: "Ellyes Skhiri",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tun-player-18",
    teamId: "team-tun",
    name: "Rayan Elloumi",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 73,
    defenseRating: 59,
    staminaRating: 68,
    mentalityRating: 67,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-19",
    teamId: "team-tun",
    name: "Firas Chaouat",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-20",
    teamId: "team-tun",
    name: "Yan Valery",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-21",
    teamId: "team-tun",
    name: "Mohamed Amine Ben Hamida",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-22",
    teamId: "team-tun",
    name: "Sabri Ben Hessen",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 73,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-23",
    teamId: "team-tun",
    name: "Moutaz Neffati",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 69,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-24",
    teamId: "team-tun",
    name: "Raed Chikhaoui",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-tun-player-25",
    teamId: "team-tun",
    name: "Anis Ben Slimane",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-tun-player-26",
    teamId: "team-tun",
    name: "Sebastian Tounekti",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 69,
    attackRating: 71,
    defenseRating: 70,
    staminaRating: 71,
    mentalityRating: 70,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-1",
    teamId: "team-bel",
    name: "Thibaut Courtois",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 89,
    attackRating: 63,
    defenseRating: 96,
    staminaRating: 87,
    mentalityRating: 95,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bel-player-2",
    teamId: "team-bel",
    name: "Zeno Debast",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-3",
    teamId: "team-bel",
    name: "Arthur Theate",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-4",
    teamId: "team-bel",
    name: "Brandon Mechele",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-5",
    teamId: "team-bel",
    name: "Maxim De Cuyper",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-6",
    teamId: "team-bel",
    name: "Axel Witsel",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 90,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-7",
    teamId: "team-bel",
    name: "Kevin De Bruyne",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 89,
    attackRating: 91,
    defenseRating: 90,
    staminaRating: 91,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bel-player-8",
    teamId: "team-bel",
    name: "Youri Tielemans",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 89,
    attackRating: 91,
    defenseRating: 90,
    staminaRating: 91,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bel-player-9",
    teamId: "team-bel",
    name: "Romelu Lukaku",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 95,
    defenseRating: 78,
    staminaRating: 90,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bel-player-10",
    teamId: "team-bel",
    name: "Leandro Trossard",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 95,
    defenseRating: 78,
    staminaRating: 90,
    mentalityRating: 93,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-bel-player-11",
    teamId: "team-bel",
    name: "Jérémy Doku",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 95,
    defenseRating: 78,
    staminaRating: 90,
    mentalityRating: 91,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-12",
    teamId: "team-bel",
    name: "Senne Lammens",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 80,
    attackRating: 54,
    defenseRating: 88,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-13",
    teamId: "team-bel",
    name: "Mike Penders",
    shirtNumber: 13,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 77,
    attackRating: 51,
    defenseRating: 85,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-14",
    teamId: "team-bel",
    name: "Dodi Lukébakio",
    shirtNumber: 14,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-15",
    teamId: "team-bel",
    name: "Thomas Meunier",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-16",
    teamId: "team-bel",
    name: "Koni De Winter",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-17",
    teamId: "team-bel",
    name: "Charles De Ketelaere",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-18",
    teamId: "team-bel",
    name: "Joaquin Seys",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-19",
    teamId: "team-bel",
    name: "Diego Moreira",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-20",
    teamId: "team-bel",
    name: "Hans Vanaken",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-21",
    teamId: "team-bel",
    name: "Timothy Castagne",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-22",
    teamId: "team-bel",
    name: "Alexis Saelemaekers",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-23",
    teamId: "team-bel",
    name: "Nicolas Raskin",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-24",
    teamId: "team-bel",
    name: "Amadou Onana",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-25",
    teamId: "team-bel",
    name: "Nathan Ngoy",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-bel-player-26",
    teamId: "team-bel",
    name: "Matias Fernandez-Pardo",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-1",
    teamId: "team-egy",
    name: "Mohamed El Shenawy",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 84,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-egy-player-2",
    teamId: "team-egy",
    name: "Yasser Ibrahim",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-3",
    teamId: "team-egy",
    name: "Mohamed Hany",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-4",
    teamId: "team-egy",
    name: "Hossam Abdelmaguid",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-5",
    teamId: "team-egy",
    name: "Ramy Rabia",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-6",
    teamId: "team-egy",
    name: "Mohamed Abdelmonem",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-egy-player-7",
    teamId: "team-egy",
    name: "Trézéguet",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-egy-player-8",
    teamId: "team-egy",
    name: "Emam Ashour",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-9",
    teamId: "team-egy",
    name: "Hamza Abdelkarim",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-10",
    teamId: "team-egy",
    name: "Mohamed Salah",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 91,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-egy-player-11",
    teamId: "team-egy",
    name: "Mostafa Ziko",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-12",
    teamId: "team-egy",
    name: "Haissem Hassan",
    shirtNumber: 12,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-13",
    teamId: "team-egy",
    name: "Ahmed Fatouh",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-14",
    teamId: "team-egy",
    name: "Hamdy Fathy",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-15",
    teamId: "team-egy",
    name: "Karim Hafez",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-16",
    teamId: "team-egy",
    name: "El Mahdy Soliman",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 73,
    attackRating: 47,
    defenseRating: 81,
    staminaRating: 71,
    mentalityRating: 75,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-17",
    teamId: "team-egy",
    name: "Mohanad Lasheen",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-18",
    teamId: "team-egy",
    name: "Nabil Emad",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-19",
    teamId: "team-egy",
    name: "Marwan Attia",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-20",
    teamId: "team-egy",
    name: "Ibrahim Adel",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-21",
    teamId: "team-egy",
    name: "Mahmoud Saber",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-22",
    teamId: "team-egy",
    name: "Omar Marmoush",
    shirtNumber: 22,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-egy-player-23",
    teamId: "team-egy",
    name: "Mostafa Shobeir",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 74,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-24",
    teamId: "team-egy",
    name: "Tarek Alaa",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-25",
    teamId: "team-egy",
    name: "Zizo",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-egy-player-26",
    teamId: "team-egy",
    name: "Mohamed Alaa",
    shirtNumber: 26,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 74,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-1",
    teamId: "team-irn",
    name: "Alireza Beiranvand",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 80,
    attackRating: 54,
    defenseRating: 88,
    staminaRating: 78,
    mentalityRating: 86,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irn-player-2",
    teamId: "team-irn",
    name: "Saleh Hardani",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-3",
    teamId: "team-irn",
    name: "Ehsan Hajsafi",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-4",
    teamId: "team-irn",
    name: "Shojae Khalilzadeh",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-5",
    teamId: "team-irn",
    name: "Milad Mohammadi",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irn-player-6",
    teamId: "team-irn",
    name: "Saeid Ezatolahi",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irn-player-7",
    teamId: "team-irn",
    name: "Alireza Jahanbakhsh",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irn-player-8",
    teamId: "team-irn",
    name: "Mohammad Mohebi",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-9",
    teamId: "team-irn",
    name: "Mehdi Taremi",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irn-player-10",
    teamId: "team-irn",
    name: "Mehdi Ghayedi",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-11",
    teamId: "team-irn",
    name: "Ali Alipour",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-12",
    teamId: "team-irn",
    name: "Payam Niazmand",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 76,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-13",
    teamId: "team-irn",
    name: "Hossein Kanaanizadegan",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-14",
    teamId: "team-irn",
    name: "Saman Ghoddos",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-15",
    teamId: "team-irn",
    name: "Rouzbeh Cheshmi",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-16",
    teamId: "team-irn",
    name: "Mehdi Torabi",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-17",
    teamId: "team-irn",
    name: "Aria Yousefi",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-18",
    teamId: "team-irn",
    name: "Amirhossein Hosseinzadeh",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-19",
    teamId: "team-irn",
    name: "Ali Nemati",
    shirtNumber: 19,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-20",
    teamId: "team-irn",
    name: "Shahriyar Moghanlou",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-21",
    teamId: "team-irn",
    name: "Mohammad Ghorbani",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-22",
    teamId: "team-irn",
    name: "Hossein Hosseini",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 76,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-23",
    teamId: "team-irn",
    name: "Ramin Rezaeian",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-24",
    teamId: "team-irn",
    name: "Dennis Eckert",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-25",
    teamId: "team-irn",
    name: "Danial Eiri",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irn-player-26",
    teamId: "team-irn",
    name: "Amirmohammad Razzaghinia",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 70,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-1",
    teamId: "team-nzl",
    name: "Max Crocombe",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 74,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-2",
    teamId: "team-nzl",
    name: "Tim Payne",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-3",
    teamId: "team-nzl",
    name: "Francis de Vries",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-4",
    teamId: "team-nzl",
    name: "Tyler Bindon",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-5",
    teamId: "team-nzl",
    name: "Michael Boxall",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-6",
    teamId: "team-nzl",
    name: "Joe Bell",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-7",
    teamId: "team-nzl",
    name: "Matthew Garbett",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-8",
    teamId: "team-nzl",
    name: "Marko Stamenić",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-9",
    teamId: "team-nzl",
    name: "Chris Wood",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-10",
    teamId: "team-nzl",
    name: "Sarpreet Singh",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-11",
    teamId: "team-nzl",
    name: "Elijah Just",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-12",
    teamId: "team-nzl",
    name: "Alex Paulsen",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 66,
    attackRating: 40,
    defenseRating: 74,
    staminaRating: 64,
    mentalityRating: 66,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-13",
    teamId: "team-nzl",
    name: "Liberato Cacace",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-14",
    teamId: "team-nzl",
    name: "Alex Rufer",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 68,
    attackRating: 70,
    defenseRating: 69,
    staminaRating: 70,
    mentalityRating: 71,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-15",
    teamId: "team-nzl",
    name: "Nando Pijnaker",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 69,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-16",
    teamId: "team-nzl",
    name: "Finn Surman",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 59,
    defenseRating: 71,
    staminaRating: 67,
    mentalityRating: 67,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-17",
    teamId: "team-nzl",
    name: "Kosta Barbarouses",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 75,
    defenseRating: 61,
    staminaRating: 70,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-18",
    teamId: "team-nzl",
    name: "Ben Waine",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 73,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-19",
    teamId: "team-nzl",
    name: "Ben Old",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 68,
    attackRating: 70,
    defenseRating: 69,
    staminaRating: 70,
    mentalityRating: 69,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-20",
    teamId: "team-nzl",
    name: "Callum McCowatt",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 69,
    attackRating: 71,
    defenseRating: 70,
    staminaRating: 71,
    mentalityRating: 71,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-21",
    teamId: "team-nzl",
    name: "Jesse Randall",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 65,
    attackRating: 71,
    defenseRating: 57,
    staminaRating: 66,
    mentalityRating: 66,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-22",
    teamId: "team-nzl",
    name: "Michael Woud",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 67,
    attackRating: 41,
    defenseRating: 75,
    staminaRating: 65,
    mentalityRating: 67,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-23",
    teamId: "team-nzl",
    name: "Ryan Thomas",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 69,
    attackRating: 71,
    defenseRating: 70,
    staminaRating: 71,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-24",
    teamId: "team-nzl",
    name: "Callan Elliot",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 60,
    defenseRating: 72,
    staminaRating: 68,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-25",
    teamId: "team-nzl",
    name: "Lachlan Bayliss",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 65,
    attackRating: 67,
    defenseRating: 66,
    staminaRating: 67,
    mentalityRating: 65,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nzl-player-26",
    teamId: "team-nzl",
    name: "Tommy Smith",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-1",
    teamId: "team-cpv",
    name: "Vozinha",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 82,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-2",
    teamId: "team-cpv",
    name: "Stopira",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-3",
    teamId: "team-cpv",
    name: "Diney",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-4",
    teamId: "team-cpv",
    name: "Roberto Lopes",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-5",
    teamId: "team-cpv",
    name: "Logan Costa",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-6",
    teamId: "team-cpv",
    name: "Kevin Pina",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-7",
    teamId: "team-cpv",
    name: "Jovane Cabral",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-8",
    teamId: "team-cpv",
    name: "João Paulo",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-9",
    teamId: "team-cpv",
    name: "Gilson Benchimol",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-10",
    teamId: "team-cpv",
    name: "Jamiro Monteiro",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-11",
    teamId: "team-cpv",
    name: "Garry Rodrigues",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-12",
    teamId: "team-cpv",
    name: "Márcio Rosa",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 70,
    attackRating: 44,
    defenseRating: 78,
    staminaRating: 68,
    mentalityRating: 72,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-13",
    teamId: "team-cpv",
    name: "Sidny Lopes Cabral",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-14",
    teamId: "team-cpv",
    name: "Deroy Duarte",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-15",
    teamId: "team-cpv",
    name: "Laros Duarte",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-16",
    teamId: "team-cpv",
    name: "Yannick Semedo",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-17",
    teamId: "team-cpv",
    name: "Willy Semedo",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-18",
    teamId: "team-cpv",
    name: "Telmo Arcanjo",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-19",
    teamId: "team-cpv",
    name: "Dailon Livramento",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-20",
    teamId: "team-cpv",
    name: "Ryan Mendes",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-21",
    teamId: "team-cpv",
    name: "Nuno da Costa",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 68,
    attackRating: 70,
    defenseRating: 69,
    staminaRating: 70,
    mentalityRating: 70,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-22",
    teamId: "team-cpv",
    name: "Steven Moreira",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-23",
    teamId: "team-cpv",
    name: "CJ dos Santos",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 69,
    attackRating: 43,
    defenseRating: 77,
    staminaRating: 67,
    mentalityRating: 69,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-24",
    teamId: "team-cpv",
    name: "Wagner Pina",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-25",
    teamId: "team-cpv",
    name: "Kelvin Pires",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cpv-player-26",
    teamId: "team-cpv",
    name: "Hélio Varela",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-1",
    teamId: "team-ksa",
    name: "Nawaf Al-Aqidi",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 75,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-2",
    teamId: "team-ksa",
    name: "Ali Majrashi",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-3",
    teamId: "team-ksa",
    name: "Ali Lajami",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-4",
    teamId: "team-ksa",
    name: "Abdulelah Al-Amri",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-5",
    teamId: "team-ksa",
    name: "Hassan Al-Tambakti",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-6",
    teamId: "team-ksa",
    name: "Nasser Al-Dawsari",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-7",
    teamId: "team-ksa",
    name: "Musab Al-Juwayr",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-8",
    teamId: "team-ksa",
    name: "Ayman Yahya",
    shirtNumber: 8,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-9",
    teamId: "team-ksa",
    name: "Firas Al-Buraikan",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-10",
    teamId: "team-ksa",
    name: "Salem Al-Dawsari",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-11",
    teamId: "team-ksa",
    name: "Saleh Al-Shehri",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-12",
    teamId: "team-ksa",
    name: "Saud Abdulhamid",
    shirtNumber: 12,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-13",
    teamId: "team-ksa",
    name: "Nawaf Boushal",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-14",
    teamId: "team-ksa",
    name: "Hassan Kadesh",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-15",
    teamId: "team-ksa",
    name: "Abdullah Al-Khaibari",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-16",
    teamId: "team-ksa",
    name: "Ziyad Al-Johani",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-17",
    teamId: "team-ksa",
    name: "Khalid Al-Ghannam",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-18",
    teamId: "team-ksa",
    name: "Alaa Al-Hejji",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-19",
    teamId: "team-ksa",
    name: "Abdullah Al-Hamdan",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-20",
    teamId: "team-ksa",
    name: "Sultan Mandash",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-21",
    teamId: "team-ksa",
    name: "Mohammed Al-Owais",
    shirtNumber: 21,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 76,
    attackRating: 50,
    defenseRating: 84,
    staminaRating: 74,
    mentalityRating: 81,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-22",
    teamId: "team-ksa",
    name: "Ahmed Al-Kassar",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 73,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-23",
    teamId: "team-ksa",
    name: "Mohamed Kanno",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-24",
    teamId: "team-ksa",
    name: "Moteb Al-Harbi",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-25",
    teamId: "team-ksa",
    name: "Jehad Thakri",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-ksa-player-26",
    teamId: "team-ksa",
    name: "Mohammed Abu Al-Shamat",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-1",
    teamId: "team-esp",
    name: "David Raya",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 90,
    attackRating: 64,
    defenseRating: 96,
    staminaRating: 88,
    mentalityRating: 92,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-2",
    teamId: "team-esp",
    name: "Marc Pubill",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 81,
    defenseRating: 93,
    staminaRating: 89,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-3",
    teamId: "team-esp",
    name: "Álex Grimaldo",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 81,
    defenseRating: 93,
    staminaRating: 89,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-4",
    teamId: "team-esp",
    name: "Eric García",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 92,
    mentalityRating: 92,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-5",
    teamId: "team-esp",
    name: "Marcos Llorente",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 83,
    defenseRating: 95,
    staminaRating: 91,
    mentalityRating: 93,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-6",
    teamId: "team-esp",
    name: "Mikel Merino",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 93,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-esp-player-7",
    teamId: "team-esp",
    name: "Ferran Torres",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 93,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-esp-player-8",
    teamId: "team-esp",
    name: "Fabián Ruiz",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 91,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-9",
    teamId: "team-esp",
    name: "Gavi",
    shirtNumber: 9,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 90,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 92,
    mentalityRating: 92,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-10",
    teamId: "team-esp",
    name: "Dani Olmo",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 93,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-esp-player-11",
    teamId: "team-esp",
    name: "Yéremy Pino",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 86,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-12",
    teamId: "team-esp",
    name: "Pedro Porro",
    shirtNumber: 12,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 82,
    defenseRating: 94,
    staminaRating: 90,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-13",
    teamId: "team-esp",
    name: "Joan Garcia",
    shirtNumber: 13,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 88,
    attackRating: 62,
    defenseRating: 96,
    staminaRating: 86,
    mentalityRating: 88,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-14",
    teamId: "team-esp",
    name: "Aymeric Laporte",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 79,
    defenseRating: 91,
    staminaRating: 87,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-15",
    teamId: "team-esp",
    name: "Álex Baena",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 90,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 92,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-16",
    teamId: "team-esp",
    name: "Rodri",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 93,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-esp-player-17",
    teamId: "team-esp",
    name: "Nico Williams",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-18",
    teamId: "team-esp",
    name: "Martín Zubimendi",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 90,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 92,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-19",
    teamId: "team-esp",
    name: "Lamine Yamal",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 92,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 93,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-20",
    teamId: "team-esp",
    name: "Pedri",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 92,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-esp-player-21",
    teamId: "team-esp",
    name: "Mikel Oyarzabal",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 91,
    mentalityRating: 94,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-22",
    teamId: "team-esp",
    name: "Pau Cubarsí",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-23",
    teamId: "team-esp",
    name: "Unai Simón",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 88,
    attackRating: 62,
    defenseRating: 96,
    staminaRating: 86,
    mentalityRating: 92,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-24",
    teamId: "team-esp",
    name: "Marc Cucurella",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 82,
    defenseRating: 94,
    staminaRating: 90,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-25",
    teamId: "team-esp",
    name: "Víctor Muñoz",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-esp-player-26",
    teamId: "team-esp",
    name: "Borja Iglesias",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-1",
    teamId: "team-uru",
    name: "Sergio Rochet",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 84,
    attackRating: 58,
    defenseRating: 92,
    staminaRating: 82,
    mentalityRating: 87,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-2",
    teamId: "team-uru",
    name: "José María Giménez",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 83,
    defenseRating: 95,
    staminaRating: 91,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uru-player-3",
    teamId: "team-uru",
    name: "Sebastián Cáceres",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-4",
    teamId: "team-uru",
    name: "Ronald Araújo",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 83,
    defenseRating: 95,
    staminaRating: 91,
    mentalityRating: 91,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uru-player-5",
    teamId: "team-uru",
    name: "Manuel Ugarte",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-6",
    teamId: "team-uru",
    name: "Rodrigo Bentancur",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 90,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 92,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uru-player-7",
    teamId: "team-uru",
    name: "Nicolás de la Cruz",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-8",
    teamId: "team-uru",
    name: "Federico Valverde",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 90,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 92,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uru-player-9",
    teamId: "team-uru",
    name: "Darwin Núñez",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-10",
    teamId: "team-uru",
    name: "Giorgian de Arrascaeta",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 90,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-11",
    teamId: "team-uru",
    name: "Facundo Pellistri",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-12",
    teamId: "team-uru",
    name: "Santiago Mele",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 81,
    attackRating: 55,
    defenseRating: 89,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-13",
    teamId: "team-uru",
    name: "Guillermo Varela",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-14",
    teamId: "team-uru",
    name: "Agustín Canobbio",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-15",
    teamId: "team-uru",
    name: "Emiliano Martínez",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-16",
    teamId: "team-uru",
    name: "Mathías Olivera",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uru-player-17",
    teamId: "team-uru",
    name: "Matías Viña",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-18",
    teamId: "team-uru",
    name: "Brian Rodríguez",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-19",
    teamId: "team-uru",
    name: "Rodrigo Aguirre",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-20",
    teamId: "team-uru",
    name: "Maximiliano Araújo",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-21",
    teamId: "team-uru",
    name: "Federico Viñas",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-22",
    teamId: "team-uru",
    name: "Joaquín Piquerez",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-23",
    teamId: "team-uru",
    name: "Fernando Muslera",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 84,
    attackRating: 58,
    defenseRating: 92,
    staminaRating: 82,
    mentalityRating: 90,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-24",
    teamId: "team-uru",
    name: "Santiago Bueno",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-25",
    teamId: "team-uru",
    name: "Juan Manuel Sanabria",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uru-player-26",
    teamId: "team-uru",
    name: "Rodrigo Zalazar",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-1",
    teamId: "team-fra",
    name: "Brice Samba",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 89,
    attackRating: 63,
    defenseRating: 96,
    staminaRating: 87,
    mentalityRating: 91,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-2",
    teamId: "team-fra",
    name: "Malo Gusto",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 83,
    defenseRating: 95,
    staminaRating: 91,
    mentalityRating: 91,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-3",
    teamId: "team-fra",
    name: "Lucas Digne",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 94,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-4",
    teamId: "team-fra",
    name: "Dayot Upamecano",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 95,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-fra-player-5",
    teamId: "team-fra",
    name: "Jules Koundé",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 96,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-fra-player-6",
    teamId: "team-fra",
    name: "Manu Koné",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 89,
    attackRating: 91,
    defenseRating: 90,
    staminaRating: 91,
    mentalityRating: 90,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-7",
    teamId: "team-fra",
    name: "Ousmane Dembélé",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 96,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-fra-player-8",
    teamId: "team-fra",
    name: "Aurélien Tchouaméni",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 96,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-fra-player-9",
    teamId: "team-fra",
    name: "Marcus Thuram",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 95,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-10",
    teamId: "team-fra",
    name: "Kylian Mbappé",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 96,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-fra-player-11",
    teamId: "team-fra",
    name: "Michael Olise",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 94,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-12",
    teamId: "team-fra",
    name: "Bradley Barcola",
    shirtNumber: 12,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 92,
    mentalityRating: 92,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-13",
    teamId: "team-fra",
    name: "N'Golo Kanté",
    shirtNumber: 13,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 88,
    attackRating: 90,
    defenseRating: 89,
    staminaRating: 90,
    mentalityRating: 93,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-14",
    teamId: "team-fra",
    name: "Adrien Rabiot",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 93,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-15",
    teamId: "team-fra",
    name: "Ibrahima Konaté",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 93,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 94,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-16",
    teamId: "team-fra",
    name: "Mike Maignan",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 93,
    attackRating: 67,
    defenseRating: 96,
    staminaRating: 90,
    mentalityRating: 95,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-17",
    teamId: "team-fra",
    name: "William Saliba",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 93,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-18",
    teamId: "team-fra",
    name: "Warren Zaïre-Emery",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 88,
    attackRating: 90,
    defenseRating: 89,
    staminaRating: 90,
    mentalityRating: 89,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-19",
    teamId: "team-fra",
    name: "Théo Hernandez",
    shirtNumber: 19,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 92,
    mentalityRating: 93,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-20",
    teamId: "team-fra",
    name: "Désiré Doué",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 91,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-21",
    teamId: "team-fra",
    name: "Lucas Hernandez",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 93,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-22",
    teamId: "team-fra",
    name: "Jean-Philippe Mateta",
    shirtNumber: 22,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 94,
    defenseRating: 78,
    staminaRating: 89,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-23",
    teamId: "team-fra",
    name: "Robin Risser",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 84,
    attackRating: 58,
    defenseRating: 92,
    staminaRating: 82,
    mentalityRating: 84,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-24",
    teamId: "team-fra",
    name: "Rayan Cherki",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 90,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 92,
    mentalityRating: 90,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-25",
    teamId: "team-fra",
    name: "Maghnes Akliouche",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 91,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 93,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-fra-player-26",
    teamId: "team-fra",
    name: "Maxence Lacroix",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 81,
    defenseRating: 93,
    staminaRating: 89,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-1",
    teamId: "team-irq",
    name: "Fahad Talib",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 72,
    attackRating: 46,
    defenseRating: 80,
    staminaRating: 70,
    mentalityRating: 75,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-2",
    teamId: "team-irq",
    name: "Rebin Sulaka",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-3",
    teamId: "team-irq",
    name: "Hussein Ali",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-4",
    teamId: "team-irq",
    name: "Zaid Tahseen",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-5",
    teamId: "team-irq",
    name: "Akam Hashim",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-6",
    teamId: "team-irq",
    name: "Manaf Younis",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-7",
    teamId: "team-irq",
    name: "Youssef Amyn",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-8",
    teamId: "team-irq",
    name: "Ibrahim Bayesh",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irq-player-9",
    teamId: "team-irq",
    name: "Ali Al-Hamadi",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irq-player-10",
    teamId: "team-irq",
    name: "Mohanad Ali",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irq-player-11",
    teamId: "team-irq",
    name: "Ahmed Qasem",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 75,
    defenseRating: 61,
    staminaRating: 70,
    mentalityRating: 69,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-12",
    teamId: "team-irq",
    name: "Jalal Hassan",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 73,
    attackRating: 47,
    defenseRating: 81,
    staminaRating: 71,
    mentalityRating: 79,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irq-player-13",
    teamId: "team-irq",
    name: "Ali Yousif",
    shirtNumber: 13,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 75,
    defenseRating: 61,
    staminaRating: 70,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-14",
    teamId: "team-irq",
    name: "Zidane Iqbal",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 71,
    attackRating: 73,
    defenseRating: 72,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-15",
    teamId: "team-irq",
    name: "Ahmed Maknzi",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-16",
    teamId: "team-irq",
    name: "Amir Al-Ammari",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-17",
    teamId: "team-irq",
    name: "Ali Jasim",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 76,
    defenseRating: 62,
    staminaRating: 71,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-18",
    teamId: "team-irq",
    name: "Aymen Hussein",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-irq-player-19",
    teamId: "team-irq",
    name: "Kevin Yakob",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 70,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-20",
    teamId: "team-irq",
    name: "Aimar Sher",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 68,
    attackRating: 70,
    defenseRating: 69,
    staminaRating: 70,
    mentalityRating: 68,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-21",
    teamId: "team-irq",
    name: "Marko Farji",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 76,
    defenseRating: 62,
    staminaRating: 71,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-22",
    teamId: "team-irq",
    name: "Ahmed Basil",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 70,
    attackRating: 44,
    defenseRating: 78,
    staminaRating: 68,
    mentalityRating: 72,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-23",
    teamId: "team-irq",
    name: "Merchas Doski",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-24",
    teamId: "team-irq",
    name: "Zaid Ismail",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 70,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-25",
    teamId: "team-irq",
    name: "Mustafa Saadoon",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-irq-player-26",
    teamId: "team-irq",
    name: "Frans Putros",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-1",
    teamId: "team-nor",
    name: "Ørjan Nyland",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 83,
    attackRating: 57,
    defenseRating: 91,
    staminaRating: 81,
    mentalityRating: 88,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-2",
    teamId: "team-nor",
    name: "Morten Thorsby",
    shirtNumber: 2,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-3",
    teamId: "team-nor",
    name: "Kristoffer Ajer",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-4",
    teamId: "team-nor",
    name: "Leo Østigård",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-5",
    teamId: "team-nor",
    name: "David Møller Wolfe",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-6",
    teamId: "team-nor",
    name: "Patrick Berg",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 82,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-7",
    teamId: "team-nor",
    name: "Alexander Sørloth",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 93,
    defenseRating: 78,
    staminaRating: 88,
    mentalityRating: 92,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-nor-player-8",
    teamId: "team-nor",
    name: "Sander Berge",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-nor-player-9",
    teamId: "team-nor",
    name: "Erling Haaland",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 93,
    defenseRating: 78,
    staminaRating: 88,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-nor-player-10",
    teamId: "team-nor",
    name: "Martin Ødegaard",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 90,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-nor-player-11",
    teamId: "team-nor",
    name: "Jørgen Strand Larsen",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-12",
    teamId: "team-nor",
    name: "Sander Tangvik",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 77,
    attackRating: 51,
    defenseRating: 85,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-13",
    teamId: "team-nor",
    name: "Egil Selvik",
    shirtNumber: 13,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-14",
    teamId: "team-nor",
    name: "Fredrik Aursnes",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-15",
    teamId: "team-nor",
    name: "Fredrik André Bjørkan",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-16",
    teamId: "team-nor",
    name: "Marcus Holmgren Pedersen",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-17",
    teamId: "team-nor",
    name: "Torbjørn Heggem",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-18",
    teamId: "team-nor",
    name: "Kristian Thorstvedt",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-19",
    teamId: "team-nor",
    name: "Thelo Aasgaard",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-20",
    teamId: "team-nor",
    name: "Antonio Nusa",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-21",
    teamId: "team-nor",
    name: "Andreas Schjelderup",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-22",
    teamId: "team-nor",
    name: "Oscar Bobb",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-23",
    teamId: "team-nor",
    name: "Jens Petter Hauge",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-24",
    teamId: "team-nor",
    name: "Sondre Langås",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-25",
    teamId: "team-nor",
    name: "Henrik Falchener",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-nor-player-26",
    teamId: "team-nor",
    name: "Julian Ryerson",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-1",
    teamId: "team-sen-sample",
    name: "Yehvann Diouf",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-2",
    teamId: "team-sen-sample",
    name: "Mamadou Sarr",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-3",
    teamId: "team-sen-sample",
    name: "Kalidou Koulibaly",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-4",
    teamId: "team-sen-sample",
    name: "Abdoulaye Seck",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-5",
    teamId: "team-sen-sample",
    name: "Idrissa Gueye",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-6",
    teamId: "team-sen-sample",
    name: "Pathé Ciss",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-7",
    teamId: "team-sen-sample",
    name: "Assane Diao",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-8",
    teamId: "team-sen-sample",
    name: "Lamine Camara",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-9",
    teamId: "team-sen-sample",
    name: "Bamba Dieng",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-10",
    teamId: "team-sen-sample",
    name: "Sadio Mané",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-11",
    teamId: "team-sen-sample",
    name: "Nicolas Jackson",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 92,
    defenseRating: 78,
    staminaRating: 87,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-12",
    teamId: "team-sen-sample",
    name: "Cherif Ndiaye",
    shirtNumber: 12,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-13",
    teamId: "team-sen-sample",
    name: "Iliman Ndiaye",
    shirtNumber: 13,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-14",
    teamId: "team-sen-sample",
    name: "Ismail Jakobs",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 81,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-15",
    teamId: "team-sen-sample",
    name: "Krépin Diatta",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-16",
    teamId: "team-sen-sample",
    name: "Édouard Mendy",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 80,
    attackRating: 54,
    defenseRating: 88,
    staminaRating: 78,
    mentalityRating: 84,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-17",
    teamId: "team-sen-sample",
    name: "Pape Matar Sarr",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-18",
    teamId: "team-sen-sample",
    name: "Ismaïla Sarr",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 89,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-19",
    teamId: "team-sen-sample",
    name: "Moussa Niakhaté",
    shirtNumber: 19,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-20",
    teamId: "team-sen-sample",
    name: "Ibrahim Mbaye",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-21",
    teamId: "team-sen-sample",
    name: "Habib Diarra",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-22",
    teamId: "team-sen-sample",
    name: "Bara Sapoko Ndiaye",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-23",
    teamId: "team-sen-sample",
    name: "Mory Diaw",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 81,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-24",
    teamId: "team-sen-sample",
    name: "Antoine Mendy",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-25",
    teamId: "team-sen-sample",
    name: "El Hadji Malick Diouf",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-sen-sample-player-26",
    teamId: "team-sen-sample",
    name: "Pape Gueye",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-1",
    teamId: "team-alg",
    name: "Melvin Mastil",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 75,
    attackRating: 49,
    defenseRating: 83,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-2",
    teamId: "team-alg",
    name: "Aïssa Mandi",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-3",
    teamId: "team-alg",
    name: "Achref Abada",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-4",
    teamId: "team-alg",
    name: "Mohamed Amine Tougai",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 71,
    defenseRating: 83,
    staminaRating: 79,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-5",
    teamId: "team-alg",
    name: "Zineddine Belaïd",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-6",
    teamId: "team-alg",
    name: "Ramiz Zerrouki",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-alg-player-7",
    teamId: "team-alg",
    name: "Riyad Mahrez",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-alg-player-8",
    teamId: "team-alg",
    name: "Houssem Aouar",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-9",
    teamId: "team-alg",
    name: "Amine Gouiri",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-10",
    teamId: "team-alg",
    name: "Farès Chaïbi",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-11",
    teamId: "team-alg",
    name: "Anis Hadj Moussa",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-12",
    teamId: "team-alg",
    name: "Nadhir Benbouali",
    shirtNumber: 12,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-13",
    teamId: "team-alg",
    name: "Jaouen Hadjam",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-14",
    teamId: "team-alg",
    name: "Hicham Boudaoui",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-15",
    teamId: "team-alg",
    name: "Rayan Aït-Nouri",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-alg-player-16",
    teamId: "team-alg",
    name: "Oussama Benbot",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 75,
    attackRating: 49,
    defenseRating: 83,
    staminaRating: 73,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-17",
    teamId: "team-alg",
    name: "Rafik Belghali",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-18",
    teamId: "team-alg",
    name: "Mohamed Amoura",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-alg-player-19",
    teamId: "team-alg",
    name: "Nabil Bentaleb",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-20",
    teamId: "team-alg",
    name: "Adil Boulbina",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-21",
    teamId: "team-alg",
    name: "Ramy Bensebaini",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-alg-player-22",
    teamId: "team-alg",
    name: "Ibrahim Maza",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-23",
    teamId: "team-alg",
    name: "Luca Zidane",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 77,
    attackRating: 51,
    defenseRating: 85,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-24",
    teamId: "team-alg",
    name: "Yacine Titraoui",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-25",
    teamId: "team-alg",
    name: "Farès Ghedjemis",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-alg-player-26",
    teamId: "team-alg",
    name: "Samir Chergui",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-1",
    teamId: "team-arg-sample",
    name: "Juan Musso",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 92,
    attackRating: 66,
    defenseRating: 96,
    staminaRating: 90,
    mentalityRating: 94,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-2",
    teamId: "team-arg-sample",
    name: "Marcos Senesi",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 81,
    defenseRating: 93,
    staminaRating: 89,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-3",
    teamId: "team-arg-sample",
    name: "Nicolás Tagliafico",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 92,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-4",
    teamId: "team-arg-sample",
    name: "Gonzalo Montiel",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 82,
    defenseRating: 94,
    staminaRating: 90,
    mentalityRating: 92,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-5",
    teamId: "team-arg-sample",
    name: "Leandro Paredes",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 90,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 92,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-6",
    teamId: "team-arg-sample",
    name: "Lisandro Martínez",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 82,
    defenseRating: 94,
    staminaRating: 90,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-7",
    teamId: "team-arg-sample",
    name: "Rodrigo De Paul",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 90,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 92,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-8",
    teamId: "team-arg-sample",
    name: "Valentín Barco",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-9",
    teamId: "team-arg-sample",
    name: "Julián Alvarez",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 95,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-10",
    teamId: "team-arg-sample",
    name: "Lionel Messi",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 95,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-11",
    teamId: "team-arg-sample",
    name: "Giovani Lo Celso",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 91,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-12",
    teamId: "team-arg-sample",
    name: "Gerónimo Rulli",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 87,
    attackRating: 61,
    defenseRating: 95,
    staminaRating: 85,
    mentalityRating: 89,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-13",
    teamId: "team-arg-sample",
    name: "Cristian Romero",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 93,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-14",
    teamId: "team-arg-sample",
    name: "Exequiel Palacios",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 92,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-15",
    teamId: "team-arg-sample",
    name: "Nicolás González",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 94,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-16",
    teamId: "team-arg-sample",
    name: "Thiago Almada",
    shirtNumber: 16,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 92,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 93,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-17",
    teamId: "team-arg-sample",
    name: "Giuliano Simeone",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 95,
    defenseRating: 78,
    staminaRating: 90,
    mentalityRating: 90,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-18",
    teamId: "team-arg-sample",
    name: "Nico Paz",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 91,
    defenseRating: 77,
    staminaRating: 86,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-19",
    teamId: "team-arg-sample",
    name: "Nicolás Otamendi",
    shirtNumber: 19,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 92,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-20",
    teamId: "team-arg-sample",
    name: "Alexis Mac Allister",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 95,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-21",
    teamId: "team-arg-sample",
    name: "José Manuel López",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 92,
    defenseRating: 78,
    staminaRating: 87,
    mentalityRating: 86,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-22",
    teamId: "team-arg-sample",
    name: "Lautaro Martínez",
    shirtNumber: 22,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 95,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-23",
    teamId: "team-arg-sample",
    name: "Emiliano Martínez",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 93,
    attackRating: 67,
    defenseRating: 96,
    staminaRating: 90,
    mentalityRating: 95,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-24",
    teamId: "team-arg-sample",
    name: "Enzo Fernández",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 94,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-25",
    teamId: "team-arg-sample",
    name: "Facundo Medina",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-arg-sample-player-26",
    teamId: "team-arg-sample",
    name: "Nahuel Molina",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 94,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-1",
    teamId: "team-aut",
    name: "Alexander Schlager",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 82,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-2",
    teamId: "team-aut",
    name: "David Affengruber",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-3",
    teamId: "team-aut",
    name: "Kevin Danso",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aut-player-4",
    teamId: "team-aut",
    name: "Xaver Schlager",
    shirtNumber: 4,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-5",
    teamId: "team-aut",
    name: "Stefan Posch",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-6",
    teamId: "team-aut",
    name: "Nicolas Seiwald",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-7",
    teamId: "team-aut",
    name: "Marko Arnautović",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 89,
    defenseRating: 75,
    staminaRating: 84,
    mentalityRating: 89,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-8",
    teamId: "team-aut",
    name: "David Alaba",
    shirtNumber: 8,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 93,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aut-player-9",
    teamId: "team-aut",
    name: "Marcel Sabitzer",
    shirtNumber: 9,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 93,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aut-player-10",
    teamId: "team-aut",
    name: "Florian Grillitsch",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-11",
    teamId: "team-aut",
    name: "Michael Gregoritsch",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 92,
    defenseRating: 78,
    staminaRating: 87,
    mentalityRating: 91,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aut-player-12",
    teamId: "team-aut",
    name: "Florian Wiegele",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 75,
    attackRating: 49,
    defenseRating: 83,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-13",
    teamId: "team-aut",
    name: "Patrick Pentz",
    shirtNumber: 13,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 78,
    attackRating: 52,
    defenseRating: 86,
    staminaRating: 76,
    mentalityRating: 80,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-14",
    teamId: "team-aut",
    name: "Saša Kalajdžić",
    shirtNumber: 14,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-15",
    teamId: "team-aut",
    name: "Philipp Lienhart",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-16",
    teamId: "team-aut",
    name: "Phillipp Mwene",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-17",
    teamId: "team-aut",
    name: "Carney Chukwuemeka",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-18",
    teamId: "team-aut",
    name: "Romano Schmid",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 81,
    attackRating: 83,
    defenseRating: 82,
    staminaRating: 83,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-19",
    teamId: "team-aut",
    name: "Dejan Ljubičić",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-20",
    teamId: "team-aut",
    name: "Konrad Laimer",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 90,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-aut-player-21",
    teamId: "team-aut",
    name: "Patrick Wimmer",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-22",
    teamId: "team-aut",
    name: "Alexander Prass",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-23",
    teamId: "team-aut",
    name: "Marco Friedl",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-24",
    teamId: "team-aut",
    name: "Paul Wanner",
    shirtNumber: 24,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-25",
    teamId: "team-aut",
    name: "Michael Svoboda",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-aut-player-26",
    teamId: "team-aut",
    name: "Alessandro Schöpf",
    shirtNumber: 26,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 78,
    attackRating: 80,
    defenseRating: 79,
    staminaRating: 80,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-1",
    teamId: "team-jor",
    name: "Yazeed Abulaila",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 79,
    positionFitRating: 95,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jor-player-2",
    teamId: "team-jor",
    name: "Mohammad Abu Hashish",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-3",
    teamId: "team-jor",
    name: "Abdallah Nasib",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-4",
    teamId: "team-jor",
    name: "Husam Abu Dahab",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-5",
    teamId: "team-jor",
    name: "Yazan Al-Arab",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jor-player-6",
    teamId: "team-jor",
    name: "Amer Jamous",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 69,
    attackRating: 71,
    defenseRating: 70,
    staminaRating: 71,
    mentalityRating: 70,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-7",
    teamId: "team-jor",
    name: "Mohammad Abu Zrayq",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-8",
    teamId: "team-jor",
    name: "Noor Al-Rawabdeh",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jor-player-9",
    teamId: "team-jor",
    name: "Ali Olwan",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jor-player-10",
    teamId: "team-jor",
    name: "Musa Al-Taamari",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-jor-player-11",
    teamId: "team-jor",
    name: "Odeh Al-Fakhouri",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 72,
    defenseRating: 58,
    staminaRating: 67,
    mentalityRating: 67,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-12",
    teamId: "team-jor",
    name: "Nour Bani Attiah",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 69,
    attackRating: 43,
    defenseRating: 77,
    staminaRating: 67,
    mentalityRating: 71,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-13",
    teamId: "team-jor",
    name: "Mahmoud Al-Mardi",
    shirtNumber: 13,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-14",
    teamId: "team-jor",
    name: "Rajaei Ayed",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-15",
    teamId: "team-jor",
    name: "Ibrahim Sadeh",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-16",
    teamId: "team-jor",
    name: "Mo Abualnadi",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 71,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-17",
    teamId: "team-jor",
    name: "Salim Obaid",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 66,
    attackRating: 59,
    defenseRating: 71,
    staminaRating: 67,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-18",
    teamId: "team-jor",
    name: "Mohammad Taha",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 65,
    attackRating: 67,
    defenseRating: 66,
    staminaRating: 67,
    mentalityRating: 65,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-19",
    teamId: "team-jor",
    name: "Saed Al-Rosan",
    shirtNumber: 19,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-20",
    teamId: "team-jor",
    name: "Mohannad Abu Taha",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 68,
    attackRating: 70,
    defenseRating: 69,
    staminaRating: 70,
    mentalityRating: 69,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-21",
    teamId: "team-jor",
    name: "Nizar Al-Rashdan",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-22",
    teamId: "team-jor",
    name: "Abdallah Al-Fakhouri",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 68,
    attackRating: 42,
    defenseRating: 76,
    staminaRating: 66,
    mentalityRating: 69,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-23",
    teamId: "team-jor",
    name: "Ihsan Haddad",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-24",
    teamId: "team-jor",
    name: "Ali Azaizeh",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 73,
    defenseRating: 59,
    staminaRating: 68,
    mentalityRating: 67,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-25",
    teamId: "team-jor",
    name: "Mohammad Al-Dawoud",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 66,
    attackRating: 68,
    defenseRating: 67,
    staminaRating: 68,
    mentalityRating: 68,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-jor-player-26",
    teamId: "team-jor",
    name: "Anas Badawi",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 68,
    attackRating: 61,
    defenseRating: 73,
    staminaRating: 69,
    mentalityRating: 68,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-1",
    teamId: "team-col",
    name: "David Ospina",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 83,
    attackRating: 57,
    defenseRating: 91,
    staminaRating: 81,
    mentalityRating: 89,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-2",
    teamId: "team-col",
    name: "Daniel Muñoz",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-3",
    teamId: "team-col",
    name: "Jhon Lucumí",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-4",
    teamId: "team-col",
    name: "Santiago Arias",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-5",
    teamId: "team-col",
    name: "Kevin Castaño",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-6",
    teamId: "team-col",
    name: "Richard Ríos",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-col-player-7",
    teamId: "team-col",
    name: "Luis Díaz",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 95,
    defenseRating: 78,
    staminaRating: 90,
    mentalityRating: 94,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-col-player-8",
    teamId: "team-col",
    name: "Jorge Carrascal",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-9",
    teamId: "team-col",
    name: "Jhon Córdoba",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-10",
    teamId: "team-col",
    name: "James Rodríguez",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 90,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-col-player-11",
    teamId: "team-col",
    name: "Jhon Arias",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-12",
    teamId: "team-col",
    name: "Camilo Vargas",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 80,
    attackRating: 54,
    defenseRating: 88,
    staminaRating: 78,
    mentalityRating: 84,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-13",
    teamId: "team-col",
    name: "Yerry Mina",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-14",
    teamId: "team-col",
    name: "Gustavo Puerta",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-15",
    teamId: "team-col",
    name: "Juan Portilla",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-16",
    teamId: "team-col",
    name: "Jefferson Lerma",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 89,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-col-player-17",
    teamId: "team-col",
    name: "Johan Mojica",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-18",
    teamId: "team-col",
    name: "Willer Ditta",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-19",
    teamId: "team-col",
    name: "Cucho Hernández",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-20",
    teamId: "team-col",
    name: "Juan Fernando Quintero",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 86,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-21",
    teamId: "team-col",
    name: "Jaminton Campaz",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-22",
    teamId: "team-col",
    name: "Deiver Machado",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 73,
    defenseRating: 85,
    staminaRating: 81,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-23",
    teamId: "team-col",
    name: "Davinson Sánchez",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 85,
    attackRating: 78,
    defenseRating: 90,
    staminaRating: 86,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-col-player-24",
    teamId: "team-col",
    name: "Álvaro Montero",
    shirtNumber: 24,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 80,
    attackRating: 54,
    defenseRating: 88,
    staminaRating: 78,
    mentalityRating: 82,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-25",
    teamId: "team-col",
    name: "Luis Suárez",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-col-player-26",
    teamId: "team-col",
    name: "Andrés Gómez",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-1",
    teamId: "team-cod",
    name: "Lionel Mpasi",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 77,
    attackRating: 51,
    defenseRating: 85,
    staminaRating: 75,
    mentalityRating: 80,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-2",
    teamId: "team-cod",
    name: "Aaron Wan-Bissaka",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-3",
    teamId: "team-cod",
    name: "Steve Kapuadi",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-4",
    teamId: "team-cod",
    name: "Axel Tuanzebe",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-5",
    teamId: "team-cod",
    name: "Dylan Batubinsika",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-6",
    teamId: "team-cod",
    name: "Ngal'ayel Mukau",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-7",
    teamId: "team-cod",
    name: "Nathanaël Mbuku",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-8",
    teamId: "team-cod",
    name: "Samuel Moutoussamy",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cod-player-9",
    teamId: "team-cod",
    name: "Brian Cipenga",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-10",
    teamId: "team-cod",
    name: "Théo Bongonda",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-11",
    teamId: "team-cod",
    name: "Gaël Kakuta",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-12",
    teamId: "team-cod",
    name: "Joris Kayembe",
    shirtNumber: 12,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-13",
    teamId: "team-cod",
    name: "Meschak Elia",
    shirtNumber: 13,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 82,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cod-player-14",
    teamId: "team-cod",
    name: "Noah Sadiki",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-15",
    teamId: "team-cod",
    name: "Aaron Tshibola",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-16",
    teamId: "team-cod",
    name: "Timothy Fayulu",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 72,
    attackRating: 46,
    defenseRating: 80,
    staminaRating: 70,
    mentalityRating: 72,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-17",
    teamId: "team-cod",
    name: "Cédric Bakambu",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 78,
    attackRating: 84,
    defenseRating: 70,
    staminaRating: 79,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cod-player-18",
    teamId: "team-cod",
    name: "Charles Pickel",
    shirtNumber: 18,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-19",
    teamId: "team-cod",
    name: "Fiston Mayele",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-20",
    teamId: "team-cod",
    name: "Yoane Wissa",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 84,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cod-player-21",
    teamId: "team-cod",
    name: "Matthieu Epolo",
    shirtNumber: 21,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 71,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-22",
    teamId: "team-cod",
    name: "Chancel Mbemba",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 85,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cod-player-23",
    teamId: "team-cod",
    name: "Simon Banza",
    shirtNumber: 23,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-24",
    teamId: "team-cod",
    name: "Gédéon Kalulu",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-25",
    teamId: "team-cod",
    name: "Edo Kayembe",
    shirtNumber: 25,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cod-player-26",
    teamId: "team-cod",
    name: "Arthur Masuaku",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-1",
    teamId: "team-por",
    name: "Diogo Costa",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 89,
    attackRating: 63,
    defenseRating: 96,
    staminaRating: 87,
    mentalityRating: 91,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-2",
    teamId: "team-por",
    name: "Nélson Semedo",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 79,
    defenseRating: 91,
    staminaRating: 87,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-3",
    teamId: "team-por",
    name: "Rúben Dias",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 92,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-por-player-4",
    teamId: "team-por",
    name: "Tomás Araújo",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-5",
    teamId: "team-por",
    name: "Diogo Dalot",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-6",
    teamId: "team-por",
    name: "Matheus Nunes",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 90,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 92,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-7",
    teamId: "team-por",
    name: "Cristiano Ronaldo",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 95,
    defenseRating: 78,
    staminaRating: 90,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-8",
    teamId: "team-por",
    name: "Bruno Fernandes",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 92,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-por-player-9",
    teamId: "team-por",
    name: "Gonçalo Ramos",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 92,
    mentalityRating: 92,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-10",
    teamId: "team-por",
    name: "Bernardo Silva",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 92,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-por-player-11",
    teamId: "team-por",
    name: "João Félix",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 94,
    defenseRating: 78,
    staminaRating: 89,
    mentalityRating: 91,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-12",
    teamId: "team-por",
    name: "José Sá",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 84,
    attackRating: 58,
    defenseRating: 92,
    staminaRating: 82,
    mentalityRating: 86,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-13",
    teamId: "team-por",
    name: "Renato Veiga",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 75,
    defenseRating: 87,
    staminaRating: 83,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-14",
    teamId: "team-por",
    name: "Gonçalo Inácio",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-15",
    teamId: "team-por",
    name: "João Neves",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-16",
    teamId: "team-por",
    name: "Francisco Trincão",
    shirtNumber: 16,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 93,
    defenseRating: 78,
    staminaRating: 88,
    mentalityRating: 88,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-17",
    teamId: "team-por",
    name: "Rafael Leão",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 91,
    mentalityRating: 92,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-18",
    teamId: "team-por",
    name: "Pedro Neto",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 94,
    defenseRating: 78,
    staminaRating: 89,
    mentalityRating: 89,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-19",
    teamId: "team-por",
    name: "Gonçalo Guedes",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 92,
    defenseRating: 78,
    staminaRating: 87,
    mentalityRating: 89,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-20",
    teamId: "team-por",
    name: "João Cancelo",
    shirtNumber: 20,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 92,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-por-player-21",
    teamId: "team-por",
    name: "Rúben Neves",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 86,
    attackRating: 88,
    defenseRating: 87,
    staminaRating: 88,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-22",
    teamId: "team-por",
    name: "Rui Silva",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 86,
    attackRating: 60,
    defenseRating: 94,
    staminaRating: 84,
    mentalityRating: 88,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-23",
    teamId: "team-por",
    name: "Vitinha",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 92,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-por-player-24",
    teamId: "team-por",
    name: "Samú Costa",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-25",
    teamId: "team-por",
    name: "Nuno Mendes",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 81,
    defenseRating: 93,
    staminaRating: 89,
    mentalityRating: 90,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-por-player-26",
    teamId: "team-por",
    name: "Francisco Conceição",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 92,
    defenseRating: 78,
    staminaRating: 87,
    mentalityRating: 87,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-1",
    teamId: "team-uzb",
    name: "Utkir Yusupov",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 73,
    attackRating: 47,
    defenseRating: 81,
    staminaRating: 71,
    mentalityRating: 77,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-2",
    teamId: "team-uzb",
    name: "Abdukodir Khusanov",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-3",
    teamId: "team-uzb",
    name: "Khojiakbar Alijonov",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-4",
    teamId: "team-uzb",
    name: "Farrukh Sayfiev",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-5",
    teamId: "team-uzb",
    name: "Rustam Ashurmatov",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-6",
    teamId: "team-uzb",
    name: "Akmal Mozgovoy",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-7",
    teamId: "team-uzb",
    name: "Otabek Shukurov",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-8",
    teamId: "team-uzb",
    name: "Jamshid Iskanderov",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-9",
    teamId: "team-uzb",
    name: "Odiljon Hamrobekov",
    shirtNumber: 9,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 80,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-10",
    teamId: "team-uzb",
    name: "Jaloliddin Masharipov",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-11",
    teamId: "team-uzb",
    name: "Oston Urunov",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-12",
    teamId: "team-uzb",
    name: "Abduvohid Nematov",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 70,
    attackRating: 44,
    defenseRating: 78,
    staminaRating: 68,
    mentalityRating: 70,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-13",
    teamId: "team-uzb",
    name: "Sherzod Nasrullaev",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-14",
    teamId: "team-uzb",
    name: "Eldor Shomurodov",
    shirtNumber: 14,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-15",
    teamId: "team-uzb",
    name: "Umar Eshmurodov",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-16",
    teamId: "team-uzb",
    name: "Botirali Ergashev",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 73,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-17",
    teamId: "team-uzb",
    name: "Dostonbek Khamdamov",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-18",
    teamId: "team-uzb",
    name: "Abdulla Abdullaev",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-19",
    teamId: "team-uzb",
    name: "Azizjon Ganiev",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 73,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-20",
    teamId: "team-uzb",
    name: "Azizbek Amonov",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-21",
    teamId: "team-uzb",
    name: "Igor Sergeev",
    shirtNumber: 21,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 83,
    defenseRating: 69,
    staminaRating: 78,
    mentalityRating: 83,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-22",
    teamId: "team-uzb",
    name: "Abbosbek Fayzullaev",
    shirtNumber: 22,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 72,
    attackRating: 74,
    defenseRating: 73,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-23",
    teamId: "team-uzb",
    name: "Sherzod Esanov",
    shirtNumber: 23,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 68,
    attackRating: 70,
    defenseRating: 69,
    staminaRating: 70,
    mentalityRating: 68,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-24",
    teamId: "team-uzb",
    name: "Bekhruz Karimov",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 67,
    attackRating: 60,
    defenseRating: 72,
    staminaRating: 68,
    mentalityRating: 67,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-25",
    teamId: "team-uzb",
    name: "Avazbek Ulmasaliev",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 70,
    attackRating: 63,
    defenseRating: 75,
    staminaRating: 71,
    mentalityRating: 70,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-uzb-player-26",
    teamId: "team-uzb",
    name: "Jakhongir Urozov",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 69,
    attackRating: 62,
    defenseRating: 74,
    staminaRating: 70,
    mentalityRating: 69,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-1",
    teamId: "team-cro",
    name: "Dominik Livaković",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 84,
    attackRating: 58,
    defenseRating: 92,
    staminaRating: 82,
    mentalityRating: 89,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-2",
    teamId: "team-cro",
    name: "Josip Stanišić",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-3",
    teamId: "team-cro",
    name: "Marin Pongračić",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 83,
    attackRating: 76,
    defenseRating: 88,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-4",
    teamId: "team-cro",
    name: "Joško Gvardiol",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 82,
    defenseRating: 94,
    staminaRating: 90,
    mentalityRating: 91,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cro-player-5",
    teamId: "team-cro",
    name: "Duje Ćaleta-Car",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 77,
    defenseRating: 89,
    staminaRating: 85,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-6",
    teamId: "team-cro",
    name: "Josip Šutalo",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 79,
    defenseRating: 91,
    staminaRating: 87,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-7",
    teamId: "team-cro",
    name: "Nikola Moro",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-8",
    teamId: "team-cro",
    name: "Mateo Kovačić",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 89,
    attackRating: 91,
    defenseRating: 90,
    staminaRating: 91,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cro-player-9",
    teamId: "team-cro",
    name: "Andrej Kramarić",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 93,
    defenseRating: 78,
    staminaRating: 88,
    mentalityRating: 93,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cro-player-10",
    teamId: "team-cro",
    name: "Luka Modrić",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 89,
    attackRating: 91,
    defenseRating: 90,
    staminaRating: 91,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cro-player-11",
    teamId: "team-cro",
    name: "Ante Budimir",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 82,
    attackRating: 88,
    defenseRating: 74,
    staminaRating: 83,
    mentalityRating: 85,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-12",
    teamId: "team-cro",
    name: "Ivor Pandur",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 79,
    attackRating: 53,
    defenseRating: 87,
    staminaRating: 77,
    mentalityRating: 79,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-13",
    teamId: "team-cro",
    name: "Nikola Vlašić",
    shirtNumber: 13,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-14",
    teamId: "team-cro",
    name: "Ivan Perišić",
    shirtNumber: 14,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 88,
    attackRating: 94,
    defenseRating: 78,
    staminaRating: 89,
    mentalityRating: 94,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-cro-player-15",
    teamId: "team-cro",
    name: "Mario Pašalić",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 91,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-16",
    teamId: "team-cro",
    name: "Martin Baturina",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-17",
    teamId: "team-cro",
    name: "Petar Sučić",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 83,
    attackRating: 85,
    defenseRating: 84,
    staminaRating: 85,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-18",
    teamId: "team-cro",
    name: "Kristijan Jakić",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 74,
    defenseRating: 86,
    staminaRating: 82,
    mentalityRating: 83,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-19",
    teamId: "team-cro",
    name: "Toni Fruk",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-20",
    teamId: "team-cro",
    name: "Igor Matanović",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 85,
    defenseRating: 71,
    staminaRating: 80,
    mentalityRating: 79,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-21",
    teamId: "team-cro",
    name: "Luka Sučić",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 80,
    attackRating: 82,
    defenseRating: 81,
    staminaRating: 82,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-22",
    teamId: "team-cro",
    name: "Luka Vušković",
    shirtNumber: 22,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-23",
    teamId: "team-cro",
    name: "Dominik Kotarski",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 78,
    attackRating: 52,
    defenseRating: 86,
    staminaRating: 76,
    mentalityRating: 78,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-24",
    teamId: "team-cro",
    name: "Marco Pašalić",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-25",
    teamId: "team-cro",
    name: "Martin Erlić",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 79,
    attackRating: 72,
    defenseRating: 84,
    staminaRating: 80,
    mentalityRating: 80,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-cro-player-26",
    teamId: "team-cro",
    name: "Petar Musa",
    shirtNumber: 26,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 80,
    attackRating: 86,
    defenseRating: 72,
    staminaRating: 81,
    mentalityRating: 81,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-1",
    teamId: "team-eng",
    name: "Jordan Pickford",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 92,
    attackRating: 66,
    defenseRating: 96,
    staminaRating: 90,
    mentalityRating: 95,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-2",
    teamId: "team-eng",
    name: "Ezri Konsa",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 91,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 92,
    mentalityRating: 92,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-3",
    teamId: "team-eng",
    name: "Nico O'Reilly",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 82,
    defenseRating: 94,
    staminaRating: 90,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-4",
    teamId: "team-eng",
    name: "Declan Rice",
    shirtNumber: 4,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 94,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-eng-player-5",
    teamId: "team-eng",
    name: "John Stones",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 94,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-eng-player-6",
    teamId: "team-eng",
    name: "Marc Guéhi",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 92,
    attackRating: 84,
    defenseRating: 95,
    staminaRating: 93,
    mentalityRating: 93,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-7",
    teamId: "team-eng",
    name: "Bukayo Saka",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 94,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-eng-player-8",
    teamId: "team-eng",
    name: "Elliot Anderson",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 85,
    attackRating: 87,
    defenseRating: 86,
    staminaRating: 87,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-9",
    teamId: "team-eng",
    name: "Harry Kane",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 94,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-eng-player-10",
    teamId: "team-eng",
    name: "Jude Bellingham",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 94,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 94,
    mentalityRating: 95,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-eng-player-11",
    teamId: "team-eng",
    name: "Marcus Rashford",
    shirtNumber: 11,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 94,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 93,
    mentalityRating: 95,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-12",
    teamId: "team-eng",
    name: "Tino Livramento",
    shirtNumber: 12,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 87,
    attackRating: 80,
    defenseRating: 92,
    staminaRating: 88,
    mentalityRating: 87,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-13",
    teamId: "team-eng",
    name: "Dean Henderson",
    shirtNumber: 13,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 86,
    attackRating: 60,
    defenseRating: 94,
    staminaRating: 84,
    mentalityRating: 88,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-14",
    teamId: "team-eng",
    name: "Jordan Henderson",
    shirtNumber: 14,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 88,
    attackRating: 90,
    defenseRating: 89,
    staminaRating: 90,
    mentalityRating: 94,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-15",
    teamId: "team-eng",
    name: "Dan Burn",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 79,
    defenseRating: 91,
    staminaRating: 87,
    mentalityRating: 88,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-16",
    teamId: "team-eng",
    name: "Kobbie Mainoo",
    shirtNumber: 16,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 84,
    attackRating: 86,
    defenseRating: 85,
    staminaRating: 86,
    mentalityRating: 85,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-17",
    teamId: "team-eng",
    name: "Morgan Rogers",
    shirtNumber: 17,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 87,
    attackRating: 89,
    defenseRating: 88,
    staminaRating: 89,
    mentalityRating: 88,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-18",
    teamId: "team-eng",
    name: "Anthony Gordon",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 91,
    mentalityRating: 91,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-19",
    teamId: "team-eng",
    name: "Ollie Watkins",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 95,
    defenseRating: 78,
    staminaRating: 90,
    mentalityRating: 92,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-20",
    teamId: "team-eng",
    name: "Noni Madueke",
    shirtNumber: 20,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 96,
    defenseRating: 78,
    staminaRating: 91,
    mentalityRating: 91,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-21",
    teamId: "team-eng",
    name: "Eberechi Eze",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 91,
    attackRating: 92,
    defenseRating: 90,
    staminaRating: 93,
    mentalityRating: 92,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-22",
    teamId: "team-eng",
    name: "Ivan Toney",
    shirtNumber: 22,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 84,
    attackRating: 90,
    defenseRating: 76,
    staminaRating: 85,
    mentalityRating: 86,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-23",
    teamId: "team-eng",
    name: "James Trafford",
    shirtNumber: 23,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 89,
    attackRating: 63,
    defenseRating: 96,
    staminaRating: 87,
    mentalityRating: 89,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-24",
    teamId: "team-eng",
    name: "Reece James",
    shirtNumber: 24,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 90,
    attackRating: 83,
    defenseRating: 95,
    staminaRating: 91,
    mentalityRating: 91,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-25",
    teamId: "team-eng",
    name: "Djed Spence",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 89,
    attackRating: 82,
    defenseRating: 94,
    staminaRating: 90,
    mentalityRating: 89,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-eng-player-26",
    teamId: "team-eng",
    name: "Jarell Quansah",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 86,
    attackRating: 79,
    defenseRating: 91,
    staminaRating: 87,
    mentalityRating: 86,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-1",
    teamId: "team-gha",
    name: "Lawrence Ati-Zigi",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 75,
    attackRating: 49,
    defenseRating: 83,
    staminaRating: 73,
    mentalityRating: 78,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-2",
    teamId: "team-gha",
    name: "Alidu Seidu",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-gha-player-3",
    teamId: "team-gha",
    name: "Caleb Yirenkyi",
    shirtNumber: 3,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 70,
    attackRating: 72,
    defenseRating: 71,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-4",
    teamId: "team-gha",
    name: "Jonas Adjetey",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-5",
    teamId: "team-gha",
    name: "Thomas Partey",
    shirtNumber: 5,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 79,
    attackRating: 81,
    defenseRating: 80,
    staminaRating: 81,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-gha-player-6",
    teamId: "team-gha",
    name: "Abdul Mumin",
    shirtNumber: 6,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-7",
    teamId: "team-gha",
    name: "Abdul Fatawu",
    shirtNumber: 7,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-8",
    teamId: "team-gha",
    name: "Kwasi Sibo",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-9",
    teamId: "team-gha",
    name: "Jordan Ayew",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 81,
    attackRating: 87,
    defenseRating: 73,
    staminaRating: 82,
    mentalityRating: 87,
    positionFitRating: 90,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-gha-player-10",
    teamId: "team-gha",
    name: "Brandon Thomas-Asante",
    shirtNumber: 10,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-11",
    teamId: "team-gha",
    name: "Antoine Semenyo",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 82,
    attackRating: 84,
    defenseRating: 83,
    staminaRating: 84,
    mentalityRating: 84,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-gha-player-12",
    teamId: "team-gha",
    name: "Joseph Anang",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 71,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-13",
    teamId: "team-gha",
    name: "Christopher Bonsu Baah",
    shirtNumber: 13,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-14",
    teamId: "team-gha",
    name: "Gideon Mensah",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 77,
    attackRating: 70,
    defenseRating: 82,
    staminaRating: 78,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-gha-player-15",
    teamId: "team-gha",
    name: "Elisha Owusu",
    shirtNumber: 15,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 75,
    attackRating: 77,
    defenseRating: 76,
    staminaRating: 77,
    mentalityRating: 76,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-16",
    teamId: "team-gha",
    name: "Benjamin Asare",
    shirtNumber: 16,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 73,
    attackRating: 47,
    defenseRating: 81,
    staminaRating: 71,
    mentalityRating: 75,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-17",
    teamId: "team-gha",
    name: "Abdul Rahman Baba",
    shirtNumber: 17,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 68,
    defenseRating: 80,
    staminaRating: 76,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-18",
    teamId: "team-gha",
    name: "Jerome Opoku",
    shirtNumber: 18,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-19",
    teamId: "team-gha",
    name: "Iñaki Williams",
    shirtNumber: 19,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 78,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-20",
    teamId: "team-gha",
    name: "Augustine Boakye",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 74,
    attackRating: 76,
    defenseRating: 75,
    staminaRating: 76,
    mentalityRating: 74,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-21",
    teamId: "team-gha",
    name: "Kojo Peprah Oppong",
    shirtNumber: 21,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 72,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-22",
    teamId: "team-gha",
    name: "Kamaldeen Sulemana",
    shirtNumber: 22,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 82,
    defenseRating: 68,
    staminaRating: 77,
    mentalityRating: 77,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-23",
    teamId: "team-gha",
    name: "Derrick Luckassen",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-24",
    teamId: "team-gha",
    name: "Ernest Nuamah",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 80,
    defenseRating: 66,
    staminaRating: 75,
    mentalityRating: 75,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-25",
    teamId: "team-gha",
    name: "Prince Kwabena Adu",
    shirtNumber: 25,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 71,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-gha-player-26",
    teamId: "team-gha",
    name: "Marvin Senaya",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-1",
    teamId: "team-pan",
    name: "Luis Mejía",
    shirtNumber: 1,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 78,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-2",
    teamId: "team-pan",
    name: "César Blackman",
    shirtNumber: 2,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 76,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-3",
    teamId: "team-pan",
    name: "José Córdoba",
    shirtNumber: 3,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 78,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-4",
    teamId: "team-pan",
    name: "Fidel Escobar",
    shirtNumber: 4,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-pan-player-5",
    teamId: "team-pan",
    name: "Edgardo Fariña",
    shirtNumber: 5,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-6",
    teamId: "team-pan",
    name: "Cristian Martínez",
    shirtNumber: 6,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 76,
    attackRating: 78,
    defenseRating: 77,
    staminaRating: 78,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-7",
    teamId: "team-pan",
    name: "José Luis Rodríguez",
    shirtNumber: 7,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-pan-player-8",
    teamId: "team-pan",
    name: "Adalberto Carrasquilla",
    shirtNumber: 8,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-pan-player-9",
    teamId: "team-pan",
    name: "Tomás Rodríguez",
    shirtNumber: 9,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 79,
    defenseRating: 65,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-10",
    teamId: "team-pan",
    name: "Ismael Díaz",
    shirtNumber: 10,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 81,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-pan-player-11",
    teamId: "team-pan",
    name: "Yoel Bárcenas",
    shirtNumber: 11,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 77,
    attackRating: 79,
    defenseRating: 78,
    staminaRating: 79,
    mentalityRating: 83,
    positionFitRating: 89,
    isCorePlayer: true,
    statusTag: "available"
  },
  {
    id: "team-pan-player-12",
    teamId: "team-pan",
    name: "César Samudio",
    shirtNumber: 12,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 71,
    attackRating: 45,
    defenseRating: 79,
    staminaRating: 69,
    mentalityRating: 73,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-13",
    teamId: "team-pan",
    name: "Jiovany Ramos",
    shirtNumber: 13,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-14",
    teamId: "team-pan",
    name: "Carlos Harvey",
    shirtNumber: 14,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 74,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-15",
    teamId: "team-pan",
    name: "Eric Davis",
    shirtNumber: 15,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 73,
    attackRating: 66,
    defenseRating: 78,
    staminaRating: 74,
    mentalityRating: 79,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-16",
    teamId: "team-pan",
    name: "Andrés Andrade",
    shirtNumber: 16,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 74,
    attackRating: 67,
    defenseRating: 79,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-17",
    teamId: "team-pan",
    name: "José Fajardo",
    shirtNumber: 17,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 75,
    attackRating: 81,
    defenseRating: 67,
    staminaRating: 76,
    mentalityRating: 80,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-18",
    teamId: "team-pan",
    name: "Cecilio Waterman",
    shirtNumber: 18,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 78,
    defenseRating: 64,
    staminaRating: 73,
    mentalityRating: 76,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-19",
    teamId: "team-pan",
    name: "Alberto Quintero",
    shirtNumber: 19,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-20",
    teamId: "team-pan",
    name: "Aníbal Godoy",
    shirtNumber: 20,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 79,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-21",
    teamId: "team-pan",
    name: "César Yanis",
    shirtNumber: 21,
    primaryPosition: "MF",
    secondaryPositions: [
      "DF",
      "FW"
    ],
    overallRating: 73,
    attackRating: 75,
    defenseRating: 74,
    staminaRating: 75,
    mentalityRating: 77,
    positionFitRating: 89,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-22",
    teamId: "team-pan",
    name: "Orlando Mosquera",
    shirtNumber: 22,
    primaryPosition: "GK",
    secondaryPositions: [],
    overallRating: 74,
    attackRating: 48,
    defenseRating: 82,
    staminaRating: 72,
    mentalityRating: 78,
    positionFitRating: 95,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-23",
    teamId: "team-pan",
    name: "Michael Amir Murillo",
    shirtNumber: 23,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 76,
    attackRating: 69,
    defenseRating: 81,
    staminaRating: 77,
    mentalityRating: 82,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-24",
    teamId: "team-pan",
    name: "Azarias Londoño",
    shirtNumber: 24,
    primaryPosition: "FW",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 77,
    defenseRating: 63,
    staminaRating: 72,
    mentalityRating: 72,
    positionFitRating: 90,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-25",
    teamId: "team-pan",
    name: "Roderick Miller",
    shirtNumber: 25,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 71,
    attackRating: 64,
    defenseRating: 76,
    staminaRating: 72,
    mentalityRating: 75,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  },
  {
    id: "team-pan-player-26",
    teamId: "team-pan",
    name: "Jorge Gutiérrez",
    shirtNumber: 26,
    primaryPosition: "DF",
    secondaryPositions: [
      "MF"
    ],
    overallRating: 72,
    attackRating: 65,
    defenseRating: 77,
    staminaRating: 73,
    mentalityRating: 73,
    positionFitRating: 88,
    isCorePlayer: false,
    statusTag: "available"
  }
]

export const worldCupTournamentGroups: TournamentGroup[] = [
  {
    id: "group-a",
    groupCode: "A",
    teamIds: [
      "team-cze",
      "team-mex",
      "team-rsa",
      "team-kor"
    ]
  },
  {
    id: "group-b",
    groupCode: "B",
    teamIds: [
      "team-bih",
      "team-can",
      "team-qat",
      "team-sui"
    ]
  },
  {
    id: "group-c",
    groupCode: "C",
    teamIds: [
      "team-bra",
      "team-hai",
      "team-mar",
      "team-sco"
    ]
  },
  {
    id: "group-d",
    groupCode: "D",
    teamIds: [
      "team-aus",
      "team-par",
      "team-tur",
      "team-usa-sample"
    ]
  },
  {
    id: "group-e",
    groupCode: "E",
    teamIds: [
      "team-cuw",
      "team-ecu",
      "team-ger",
      "team-civ"
    ]
  },
  {
    id: "group-f",
    groupCode: "F",
    teamIds: [
      "team-jpn-sample",
      "team-ned",
      "team-swe",
      "team-tun"
    ]
  },
  {
    id: "group-g",
    groupCode: "G",
    teamIds: [
      "team-bel",
      "team-egy",
      "team-irn",
      "team-nzl"
    ]
  },
  {
    id: "group-h",
    groupCode: "H",
    teamIds: [
      "team-cpv",
      "team-ksa",
      "team-esp",
      "team-uru"
    ]
  },
  {
    id: "group-i",
    groupCode: "I",
    teamIds: [
      "team-fra",
      "team-irq",
      "team-nor",
      "team-sen-sample"
    ]
  },
  {
    id: "group-j",
    groupCode: "J",
    teamIds: [
      "team-alg",
      "team-arg-sample",
      "team-aut",
      "team-jor"
    ]
  },
  {
    id: "group-k",
    groupCode: "K",
    teamIds: [
      "team-col",
      "team-cod",
      "team-por",
      "team-uzb"
    ]
  },
  {
    id: "group-l",
    groupCode: "L",
    teamIds: [
      "team-cro",
      "team-eng",
      "team-gha",
      "team-pan"
    ]
  }
]

export const worldCupFixtures: MatchFixture[] = [
  {
    id: "fixture-group-a-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "A",
    homeTeamId: "team-cze",
    awayTeamId: "team-mex",
    fixtureOrder: 1,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-a-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "A",
    homeTeamId: "team-rsa",
    awayTeamId: "team-kor",
    fixtureOrder: 2,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-a-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "A",
    homeTeamId: "team-cze",
    awayTeamId: "team-rsa",
    fixtureOrder: 3,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-a-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "A",
    homeTeamId: "team-mex",
    awayTeamId: "team-kor",
    fixtureOrder: 4,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-a-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "A",
    homeTeamId: "team-cze",
    awayTeamId: "team-kor",
    fixtureOrder: 5,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-a-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "A",
    homeTeamId: "team-mex",
    awayTeamId: "team-rsa",
    fixtureOrder: 6,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-b-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "B",
    homeTeamId: "team-bih",
    awayTeamId: "team-can",
    fixtureOrder: 7,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-b-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "B",
    homeTeamId: "team-qat",
    awayTeamId: "team-sui",
    fixtureOrder: 8,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-b-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "B",
    homeTeamId: "team-bih",
    awayTeamId: "team-qat",
    fixtureOrder: 9,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-b-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "B",
    homeTeamId: "team-can",
    awayTeamId: "team-sui",
    fixtureOrder: 10,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-b-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "B",
    homeTeamId: "team-bih",
    awayTeamId: "team-sui",
    fixtureOrder: 11,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-b-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "B",
    homeTeamId: "team-can",
    awayTeamId: "team-qat",
    fixtureOrder: 12,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-c-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "C",
    homeTeamId: "team-bra",
    awayTeamId: "team-hai",
    fixtureOrder: 13,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-c-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "C",
    homeTeamId: "team-mar",
    awayTeamId: "team-sco",
    fixtureOrder: 14,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-c-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "C",
    homeTeamId: "team-bra",
    awayTeamId: "team-mar",
    fixtureOrder: 15,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-c-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "C",
    homeTeamId: "team-hai",
    awayTeamId: "team-sco",
    fixtureOrder: 16,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-c-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "C",
    homeTeamId: "team-bra",
    awayTeamId: "team-sco",
    fixtureOrder: 17,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-c-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "C",
    homeTeamId: "team-hai",
    awayTeamId: "team-mar",
    fixtureOrder: 18,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-d-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "D",
    homeTeamId: "team-aus",
    awayTeamId: "team-par",
    fixtureOrder: 19,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-d-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "D",
    homeTeamId: "team-tur",
    awayTeamId: "team-usa-sample",
    fixtureOrder: 20,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-d-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "D",
    homeTeamId: "team-aus",
    awayTeamId: "team-tur",
    fixtureOrder: 21,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-d-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "D",
    homeTeamId: "team-par",
    awayTeamId: "team-usa-sample",
    fixtureOrder: 22,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-d-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "D",
    homeTeamId: "team-aus",
    awayTeamId: "team-usa-sample",
    fixtureOrder: 23,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-d-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "D",
    homeTeamId: "team-par",
    awayTeamId: "team-tur",
    fixtureOrder: 24,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-e-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "E",
    homeTeamId: "team-cuw",
    awayTeamId: "team-ecu",
    fixtureOrder: 25,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-e-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "E",
    homeTeamId: "team-ger",
    awayTeamId: "team-civ",
    fixtureOrder: 26,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-e-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "E",
    homeTeamId: "team-cuw",
    awayTeamId: "team-ger",
    fixtureOrder: 27,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-e-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "E",
    homeTeamId: "team-ecu",
    awayTeamId: "team-civ",
    fixtureOrder: 28,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-e-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "E",
    homeTeamId: "team-cuw",
    awayTeamId: "team-civ",
    fixtureOrder: 29,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-e-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "E",
    homeTeamId: "team-ecu",
    awayTeamId: "team-ger",
    fixtureOrder: 30,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-f-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "F",
    homeTeamId: "team-jpn-sample",
    awayTeamId: "team-ned",
    fixtureOrder: 31,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-f-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "F",
    homeTeamId: "team-swe",
    awayTeamId: "team-tun",
    fixtureOrder: 32,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-f-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "F",
    homeTeamId: "team-jpn-sample",
    awayTeamId: "team-swe",
    fixtureOrder: 33,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-f-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "F",
    homeTeamId: "team-ned",
    awayTeamId: "team-tun",
    fixtureOrder: 34,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-f-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "F",
    homeTeamId: "team-jpn-sample",
    awayTeamId: "team-tun",
    fixtureOrder: 35,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-f-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "F",
    homeTeamId: "team-ned",
    awayTeamId: "team-swe",
    fixtureOrder: 36,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-g-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "G",
    homeTeamId: "team-bel",
    awayTeamId: "team-egy",
    fixtureOrder: 37,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-g-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "G",
    homeTeamId: "team-irn",
    awayTeamId: "team-nzl",
    fixtureOrder: 38,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-g-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "G",
    homeTeamId: "team-bel",
    awayTeamId: "team-irn",
    fixtureOrder: 39,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-g-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "G",
    homeTeamId: "team-egy",
    awayTeamId: "team-nzl",
    fixtureOrder: 40,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-g-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "G",
    homeTeamId: "team-bel",
    awayTeamId: "team-nzl",
    fixtureOrder: 41,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-g-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "G",
    homeTeamId: "team-egy",
    awayTeamId: "team-irn",
    fixtureOrder: 42,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-h-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "H",
    homeTeamId: "team-cpv",
    awayTeamId: "team-ksa",
    fixtureOrder: 43,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-h-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "H",
    homeTeamId: "team-esp",
    awayTeamId: "team-uru",
    fixtureOrder: 44,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-h-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "H",
    homeTeamId: "team-cpv",
    awayTeamId: "team-esp",
    fixtureOrder: 45,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-h-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "H",
    homeTeamId: "team-ksa",
    awayTeamId: "team-uru",
    fixtureOrder: 46,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-h-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "H",
    homeTeamId: "team-cpv",
    awayTeamId: "team-uru",
    fixtureOrder: 47,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-h-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "H",
    homeTeamId: "team-ksa",
    awayTeamId: "team-esp",
    fixtureOrder: 48,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-i-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "I",
    homeTeamId: "team-fra",
    awayTeamId: "team-irq",
    fixtureOrder: 49,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-i-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "I",
    homeTeamId: "team-nor",
    awayTeamId: "team-sen-sample",
    fixtureOrder: 50,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-i-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "I",
    homeTeamId: "team-fra",
    awayTeamId: "team-nor",
    fixtureOrder: 51,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-i-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "I",
    homeTeamId: "team-irq",
    awayTeamId: "team-sen-sample",
    fixtureOrder: 52,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-i-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "I",
    homeTeamId: "team-fra",
    awayTeamId: "team-sen-sample",
    fixtureOrder: 53,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-i-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "I",
    homeTeamId: "team-irq",
    awayTeamId: "team-nor",
    fixtureOrder: 54,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-j-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "J",
    homeTeamId: "team-alg",
    awayTeamId: "team-arg-sample",
    fixtureOrder: 55,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-j-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "J",
    homeTeamId: "team-aut",
    awayTeamId: "team-jor",
    fixtureOrder: 56,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-j-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "J",
    homeTeamId: "team-alg",
    awayTeamId: "team-aut",
    fixtureOrder: 57,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-j-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "J",
    homeTeamId: "team-arg-sample",
    awayTeamId: "team-jor",
    fixtureOrder: 58,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-j-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "J",
    homeTeamId: "team-alg",
    awayTeamId: "team-jor",
    fixtureOrder: 59,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-j-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "J",
    homeTeamId: "team-arg-sample",
    awayTeamId: "team-aut",
    fixtureOrder: 60,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-k-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "K",
    homeTeamId: "team-col",
    awayTeamId: "team-cod",
    fixtureOrder: 61,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-k-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "K",
    homeTeamId: "team-por",
    awayTeamId: "team-uzb",
    fixtureOrder: 62,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-k-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "K",
    homeTeamId: "team-col",
    awayTeamId: "team-por",
    fixtureOrder: 63,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-k-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "K",
    homeTeamId: "team-cod",
    awayTeamId: "team-uzb",
    fixtureOrder: 64,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-k-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "K",
    homeTeamId: "team-col",
    awayTeamId: "team-uzb",
    fixtureOrder: 65,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-k-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "K",
    homeTeamId: "team-cod",
    awayTeamId: "team-por",
    fixtureOrder: 66,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-l-1",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "L",
    homeTeamId: "team-cro",
    awayTeamId: "team-eng",
    fixtureOrder: 67,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-l-2",
    stage: "group",
    roundCode: "group-round-1",
    groupCode: "L",
    homeTeamId: "team-gha",
    awayTeamId: "team-pan",
    fixtureOrder: 68,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-l-3",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "L",
    homeTeamId: "team-cro",
    awayTeamId: "team-gha",
    fixtureOrder: 69,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-l-4",
    stage: "group",
    roundCode: "group-round-2",
    groupCode: "L",
    homeTeamId: "team-eng",
    awayTeamId: "team-pan",
    fixtureOrder: 70,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-l-5",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "L",
    homeTeamId: "team-cro",
    awayTeamId: "team-pan",
    fixtureOrder: 71,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-group-l-6",
    stage: "group",
    roundCode: "group-round-3",
    groupCode: "L",
    homeTeamId: "team-eng",
    awayTeamId: "team-gha",
    fixtureOrder: 72,
    knockoutSlot: null,
    dependsOn: []
  },
  {
    id: "fixture-knockout-73",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 73,
    knockoutSlot: "round-32-73",
    dependsOn: [
      "A2",
      "B2"
    ]
  },
  {
    id: "fixture-knockout-74",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 74,
    knockoutSlot: "round-32-74",
    dependsOn: [
      "E1",
      "3P-E1"
    ]
  },
  {
    id: "fixture-knockout-75",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 75,
    knockoutSlot: "round-32-75",
    dependsOn: [
      "F1",
      "C2"
    ]
  },
  {
    id: "fixture-knockout-76",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 76,
    knockoutSlot: "round-32-76",
    dependsOn: [
      "C1",
      "F2"
    ]
  },
  {
    id: "fixture-knockout-77",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 77,
    knockoutSlot: "round-32-77",
    dependsOn: [
      "I1",
      "3P-I1"
    ]
  },
  {
    id: "fixture-knockout-78",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 78,
    knockoutSlot: "round-32-78",
    dependsOn: [
      "E2",
      "I2"
    ]
  },
  {
    id: "fixture-knockout-79",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 79,
    knockoutSlot: "round-32-79",
    dependsOn: [
      "A1",
      "3P-A1"
    ]
  },
  {
    id: "fixture-knockout-80",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 80,
    knockoutSlot: "round-32-80",
    dependsOn: [
      "L1",
      "3P-L1"
    ]
  },
  {
    id: "fixture-knockout-81",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 81,
    knockoutSlot: "round-32-81",
    dependsOn: [
      "D1",
      "3P-D1"
    ]
  },
  {
    id: "fixture-knockout-82",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 82,
    knockoutSlot: "round-32-82",
    dependsOn: [
      "G1",
      "3P-G1"
    ]
  },
  {
    id: "fixture-knockout-83",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 83,
    knockoutSlot: "round-32-83",
    dependsOn: [
      "K2",
      "L2"
    ]
  },
  {
    id: "fixture-knockout-84",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 84,
    knockoutSlot: "round-32-84",
    dependsOn: [
      "H1",
      "J2"
    ]
  },
  {
    id: "fixture-knockout-85",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 85,
    knockoutSlot: "round-32-85",
    dependsOn: [
      "B1",
      "3P-B1"
    ]
  },
  {
    id: "fixture-knockout-86",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 86,
    knockoutSlot: "round-32-86",
    dependsOn: [
      "J1",
      "H2"
    ]
  },
  {
    id: "fixture-knockout-87",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 87,
    knockoutSlot: "round-32-87",
    dependsOn: [
      "K1",
      "3P-K1"
    ]
  },
  {
    id: "fixture-knockout-88",
    stage: "knockout",
    roundCode: "knockout-round-32",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 88,
    knockoutSlot: "round-32-88",
    dependsOn: [
      "D2",
      "G2"
    ]
  },
  {
    id: "fixture-knockout-89",
    stage: "knockout",
    roundCode: "knockout-round-16",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 89,
    knockoutSlot: "round-16-89",
    dependsOn: [
      "W:fixture-knockout-74",
      "W:fixture-knockout-77"
    ]
  },
  {
    id: "fixture-knockout-90",
    stage: "knockout",
    roundCode: "knockout-round-16",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 90,
    knockoutSlot: "round-16-90",
    dependsOn: [
      "W:fixture-knockout-73",
      "W:fixture-knockout-75"
    ]
  },
  {
    id: "fixture-knockout-91",
    stage: "knockout",
    roundCode: "knockout-round-16",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 91,
    knockoutSlot: "round-16-91",
    dependsOn: [
      "W:fixture-knockout-83",
      "W:fixture-knockout-84"
    ]
  },
  {
    id: "fixture-knockout-92",
    stage: "knockout",
    roundCode: "knockout-round-16",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 92,
    knockoutSlot: "round-16-92",
    dependsOn: [
      "W:fixture-knockout-81",
      "W:fixture-knockout-82"
    ]
  },
  {
    id: "fixture-knockout-93",
    stage: "knockout",
    roundCode: "knockout-round-16",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 93,
    knockoutSlot: "round-16-93",
    dependsOn: [
      "W:fixture-knockout-76",
      "W:fixture-knockout-78"
    ]
  },
  {
    id: "fixture-knockout-94",
    stage: "knockout",
    roundCode: "knockout-round-16",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 94,
    knockoutSlot: "round-16-94",
    dependsOn: [
      "W:fixture-knockout-79",
      "W:fixture-knockout-80"
    ]
  },
  {
    id: "fixture-knockout-95",
    stage: "knockout",
    roundCode: "knockout-round-16",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 95,
    knockoutSlot: "round-16-95",
    dependsOn: [
      "W:fixture-knockout-86",
      "W:fixture-knockout-88"
    ]
  },
  {
    id: "fixture-knockout-96",
    stage: "knockout",
    roundCode: "knockout-round-16",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 96,
    knockoutSlot: "round-16-96",
    dependsOn: [
      "W:fixture-knockout-85",
      "W:fixture-knockout-87"
    ]
  },
  {
    id: "fixture-knockout-97",
    stage: "knockout",
    roundCode: "knockout-quarterfinal",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 97,
    knockoutSlot: "quarterfinal-97",
    dependsOn: [
      "W:fixture-knockout-89",
      "W:fixture-knockout-90"
    ]
  },
  {
    id: "fixture-knockout-98",
    stage: "knockout",
    roundCode: "knockout-quarterfinal",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 98,
    knockoutSlot: "quarterfinal-98",
    dependsOn: [
      "W:fixture-knockout-93",
      "W:fixture-knockout-94"
    ]
  },
  {
    id: "fixture-knockout-99",
    stage: "knockout",
    roundCode: "knockout-quarterfinal",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 99,
    knockoutSlot: "quarterfinal-99",
    dependsOn: [
      "W:fixture-knockout-91",
      "W:fixture-knockout-92"
    ]
  },
  {
    id: "fixture-knockout-100",
    stage: "knockout",
    roundCode: "knockout-quarterfinal",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 100,
    knockoutSlot: "quarterfinal-100",
    dependsOn: [
      "W:fixture-knockout-95",
      "W:fixture-knockout-96"
    ]
  },
  {
    id: "fixture-knockout-101",
    stage: "knockout",
    roundCode: "knockout-semi",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 101,
    knockoutSlot: "semi-1",
    dependsOn: [
      "W:fixture-knockout-97",
      "W:fixture-knockout-98"
    ]
  },
  {
    id: "fixture-knockout-102",
    stage: "knockout",
    roundCode: "knockout-semi",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 102,
    knockoutSlot: "semi-2",
    dependsOn: [
      "W:fixture-knockout-99",
      "W:fixture-knockout-100"
    ]
  },
  {
    id: "fixture-knockout-103",
    stage: "knockout",
    roundCode: "knockout-third-place",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 103,
    knockoutSlot: "third-place",
    dependsOn: [
      "L:fixture-knockout-101",
      "L:fixture-knockout-102"
    ]
  },
  {
    id: "fixture-knockout-104",
    stage: "knockout",
    roundCode: "knockout-final",
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 104,
    knockoutSlot: "final",
    dependsOn: [
      "W:fixture-knockout-101",
      "W:fixture-knockout-102"
    ]
  }
]

export const worldCupThirdPlaceCombinationMap = {
  EFGHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3F",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  DFGHIJKL: {
    forA: "3H",
    forB: "3G",
    forD: "3I",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  DEGHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3D",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  DEFHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  DEFGIJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  DEFGHJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  DEFGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  DEFGHIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  DEFGHIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  CFGHIJKL: {
    forA: "3H",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CEGHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  CEFHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CEFGIJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CEFGHJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CEFGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CEFGHIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  CEFGHIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  CDGHIJKL: {
    forA: "3H",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  CDFHIJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3I",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDFGIJKL: {
    forA: "3C",
    forB: "3G",
    forD: "3I",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDFGHJKL: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDFGHIKL: {
    forA: "3C",
    forB: "3G",
    forD: "3I",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDFGHIJL: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  CDFGHIJK: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  CDEHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  CDEGIJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  CDEGHJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  CDEGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  CDEGHIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  CDEGHIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  CDEFIJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDEFHJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDEFHIKL: {
    forA: "3C",
    forB: "3E",
    forD: "3I",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDEFHIJL: {
    forA: "3C",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  CDEFHIJK: {
    forA: "3C",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  CDEFGJKL: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDEFGIKL: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDEFGIJL: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  CDEFGIJK: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  CDEFGHKL: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  CDEFGHJL: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  CDEFGHJK: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  CDEFGHIL: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  CDEFGHIK: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  CDEFGHIJ: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  BFGHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3I",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BEGHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3B",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BEFHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3I",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  BEFGIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3I",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BEFGHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BEFGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3F",
    forG: "3I",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  BEFGHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  BEFGHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3H",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  BDGHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BDFHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDFGIJKL: {
    forA: "3I",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDFGHJKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDFGHIKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDFGHIJL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BDFGHIJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BDEHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  BDEGIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BDEGHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BDEGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  BDEGHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  BDEGHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  BDEFIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDEFHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDEFHIKL: {
    forA: "3E",
    forB: "3I",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDEFHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BDEFHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BDEFGJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDEFGIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDEFGIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BDEFGIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BDEFGHKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BDEFGHJL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  BDEFGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  BDEFGHIL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BDEFGHIK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BDEFGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  BCGHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BCFHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCFGIJKL: {
    forA: "3I",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCFGHJKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCFGHIKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCFGHIJL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCFGHIJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCEHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  BCEGIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BCEGHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  BCEGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  BCEGHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  BCEGHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  BCEFIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCEFHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCEFHIKL: {
    forA: "3E",
    forB: "3I",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCEFHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCEFHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCEFGJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCEFGIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCEFGIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCEFGIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCEFGHKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCEFGHJL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  BCEFGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  BCEFGHIL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCEFGHIK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCEFGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  BCDHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDGIJKL: {
    forA: "3I",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDGHJKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDGHIKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDGHIJL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  BCDGHIJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  BCDFIJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDFHJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDFHIKL: {
    forA: "3C",
    forB: "3I",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDFHIJL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCDFHIJK: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCDFGJKL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDFGIKL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDFGIJL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCDFGIJK: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCDFGHKL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDFGHJL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3J"
  },
  BCDFGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3D",
    forL: "3K"
  },
  BCDFGHIL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCDFGHIK: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCDFGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3D",
    forL: "3I"
  },
  BCDEIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDEHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDEHIKL: {
    forA: "3E",
    forB: "3I",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDEHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  BCDEHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  BCDEGJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDEGIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3I",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDEGIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  BCDEGIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  BCDEGHKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  BCDEGHJL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3L",
    forL: "3E"
  },
  BCDEGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3E",
    forL: "3K"
  },
  BCDEGHIL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  BCDEGHIK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3H",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  BCDEGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3D",
    forK: "3E",
    forL: "3I"
  },
  BCDEFJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3E",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDEFIKL: {
    forA: "3C",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDEFIJL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3E",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCDEFIJK: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3E",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCDEFHKL: {
    forA: "3C",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDEFHJL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  BCDEFHJK: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  BCDEFHIL: {
    forA: "3C",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCDEFHIK: {
    forA: "3C",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCDEFHIJ: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  BCDEFGKL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3E",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  BCDEFGJL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  BCDEFGJK: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  BCDEFGIL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3E",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  BCDEFGIK: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3E",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  BCDEFGIJ: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3J",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  BCDEFGHL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  BCDEFGHK: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  BCDEFGHJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3J",
    forI: "3F",
    forK: "3D",
    forL: "3E"
  },
  BCDEFGHI: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3H",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  AFGHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3I",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  AEGHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3A",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  AEFHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  AEFGIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  AEFGHJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  AEFGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  AEFGHIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3I"
  },
  AEFGHIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3I",
    forL: "3K"
  },
  ADGHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ADFHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADFGIJKL: {
    forA: "3I",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADFGHJKL: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADFGHIKL: {
    forA: "3H",
    forB: "3G",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADFGHIJL: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ADFGHIJK: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ADEHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ADEGIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ADEGHJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ADEGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ADEGHIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3I"
  },
  ADEGHIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3I",
    forL: "3K"
  },
  ADEFIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADEFHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADEFHIKL: {
    forA: "3H",
    forB: "3E",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADEFHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ADEFHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ADEFGJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADEFGIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADEFGIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ADEFGIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ADEFGHKL: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ADEFGHJL: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  ADEFGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  ADEFGHIL: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ADEFGHIK: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ADEFGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  ACGHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ACFHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACFGIJKL: {
    forA: "3I",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACFGHJKL: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACFGHIKL: {
    forA: "3H",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACFGHIJL: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ACFGHIJK: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ACEHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ACEGIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ACEGHJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ACEGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ACEGHIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3I"
  },
  ACEGHIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3I",
    forL: "3K"
  },
  ACEFIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACEFHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACEFHIKL: {
    forA: "3H",
    forB: "3E",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACEFHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ACEFHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ACEFGJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACEFGIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACEFGIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ACEFGIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ACEFGHKL: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACEFGHJL: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  ACEFGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  ACEFGHIL: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ACEFGHIK: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ACEFGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  ACDHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDGIJKL: {
    forA: "3I",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDGHJKL: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDGHIKL: {
    forA: "3H",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDGHIJL: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ACDGHIJK: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ACDFIJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACDFHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDFHIKL: {
    forA: "3H",
    forB: "3F",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDFHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ACDFHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ACDFGJKL: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACDFGIKL: {
    forA: "3C",
    forB: "3G",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACDFGIJL: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ACDFGIJK: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ACDFGHKL: {
    forA: "3H",
    forB: "3G",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDFGHJL: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3H"
  },
  ACDFGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3K"
  },
  ACDFGHIL: {
    forA: "3H",
    forB: "3G",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ACDFGHIK: {
    forA: "3H",
    forB: "3G",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ACDFGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3I"
  },
  ACDEIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDEHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDEHIKL: {
    forA: "3H",
    forB: "3E",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDEHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ACDEHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ACDEGJKL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDEGIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3I",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDEGIJL: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ACDEGIJK: {
    forA: "3E",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ACDEGHKL: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDEGHJL: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3E"
  },
  ACDEGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3E",
    forL: "3K"
  },
  ACDEGHIL: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ACDEGHIK: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ACDEGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3E",
    forL: "3I"
  },
  ACDEFJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACDEFIKL: {
    forA: "3C",
    forB: "3E",
    forD: "3I",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACDEFIJL: {
    forA: "3C",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ACDEFIJK: {
    forA: "3C",
    forB: "3J",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ACDEFHKL: {
    forA: "3H",
    forB: "3E",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ACDEFHJL: {
    forA: "3H",
    forB: "3J",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3E"
  },
  ACDEFHJK: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3K"
  },
  ACDEFHIL: {
    forA: "3H",
    forB: "3E",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ACDEFHIK: {
    forA: "3H",
    forB: "3E",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ACDEFHIJ: {
    forA: "3H",
    forB: "3J",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3I"
  },
  ACDEFGKL: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ACDEFGJL: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  ACDEFGJK: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  ACDEFGIL: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ACDEFGIK: {
    forA: "3C",
    forB: "3G",
    forD: "3E",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ACDEFGIJ: {
    forA: "3C",
    forB: "3G",
    forD: "3J",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  ACDEFGHL: {
    forA: "3H",
    forB: "3G",
    forD: "3F",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3E"
  },
  ACDEFGHK: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3K"
  },
  ACDEFGHJ: {
    forA: "3H",
    forB: "3G",
    forD: "3J",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3E"
  },
  ACDEFGHI: {
    forA: "3H",
    forB: "3G",
    forD: "3E",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3I"
  },
  ABGHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABFHIJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABFGIJKL: {
    forA: "3I",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABFGHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABFGHIKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABFGHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABFGHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABEHIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABEGIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABEGHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABEGHIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABEGHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3H",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABEGHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3H",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABEFIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABEFHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABEFHIKL: {
    forA: "3E",
    forB: "3I",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABEFHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3I"
  },
  ABEFHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3I",
    forL: "3K"
  },
  ABEFGJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABEFGIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABEFGIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABEFGIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABEFGHKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABEFGHJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3E"
  },
  ABEFGHJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3E",
    forL: "3K"
  },
  ABEFGHIL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3I"
  },
  ABEFGHIK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3H",
    forK: "3I",
    forL: "3K"
  },
  ABEFGHIJ: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3E",
    forL: "3I"
  },
  ABDHIJKL: {
    forA: "3I",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABDGIJKL: {
    forA: "3I",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABDGHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABDGHIKL: {
    forA: "3I",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABDGHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABDGHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABDFIJKL: {
    forA: "3I",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABDFHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABDFHIKL: {
    forA: "3H",
    forB: "3I",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABDFHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABDFHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABDFGJKL: {
    forA: "3F",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABDFGIKL: {
    forA: "3I",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABDFGIJL: {
    forA: "3F",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABDFGIJK: {
    forA: "3F",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABDFGHKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABDFGHJL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3J"
  },
  ABDFGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3J",
    forL: "3K"
  },
  ABDFGHIL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABDFGHIK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABDFGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3J"
  },
  ABDEIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABDEHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABDEHIKL: {
    forA: "3E",
    forB: "3I",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABDEHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3I"
  },
  ABDEHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3I",
    forL: "3K"
  },
  ABDEGJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABDEGIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABDEGIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABDEGIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABDEGHKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABDEGHJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3E"
  },
  ABDEGHJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3E",
    forL: "3K"
  },
  ABDEGHIL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3I"
  },
  ABDEGHIK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3H",
    forK: "3I",
    forL: "3K"
  },
  ABDEGHIJ: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3E",
    forL: "3I"
  },
  ABDEFJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABDEFIKL: {
    forA: "3E",
    forB: "3I",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABDEFIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABDEFIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABDEFHKL: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABDEFHJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  ABDEFHJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  ABDEFHIL: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABDEFHIK: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABDEFHIJ: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  ABDEFGKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABDEFGJL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3J"
  },
  ABDEFGJK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3J",
    forL: "3K"
  },
  ABDEFGIL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABDEFGIK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABDEFGIJ: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3J"
  },
  ABDEFGHL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  ABDEFGHK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  ABDEFGHJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3J"
  },
  ABDEFGHI: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  ABCHIJKL: {
    forA: "3I",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABCGIJKL: {
    forA: "3I",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABCGHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABCGHIKL: {
    forA: "3I",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABCGHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABCGHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABCFIJKL: {
    forA: "3I",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCFHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCFHIKL: {
    forA: "3H",
    forB: "3I",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCFHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABCFHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABCFGJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABCFGIKL: {
    forA: "3I",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCFGIJL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABCFGIJK: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3F",
    forG: "3A",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABCFGHKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCFGHJL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3J"
  },
  ABCFGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3J",
    forL: "3K"
  },
  ABCFGHIL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABCFGHIK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABCFGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3J"
  },
  ABCEIJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3C",
    forK: "3L",
    forL: "3K"
  },
  ABCEHJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABCEHIKL: {
    forA: "3E",
    forB: "3I",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABCEHIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3I"
  },
  ABCEHIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3I",
    forL: "3K"
  },
  ABCEGJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABCEGIKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3A",
    forG: "3I",
    forI: "3C",
    forK: "3L",
    forL: "3K"
  },
  ABCEGIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABCEGIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABCEGHKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3K"
  },
  ABCEGHJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3E"
  },
  ABCEGHJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3E",
    forL: "3K"
  },
  ABCEGHIL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3L",
    forL: "3I"
  },
  ABCEGHIK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3H",
    forK: "3I",
    forL: "3K"
  },
  ABCEGHIJ: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3G",
    forK: "3E",
    forL: "3I"
  },
  ABCEFJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCEFIKL: {
    forA: "3E",
    forB: "3I",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCEFIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABCEFIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABCEFHKL: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCEFHJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  ABCEFHJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  ABCEFHIL: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABCEFHIK: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABCEFHIJ: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  ABCEFGKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCEFGJL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3J"
  },
  ABCEFGJK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3J",
    forL: "3K"
  },
  ABCEFGIL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABCEFGIK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABCEFGIJ: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3J"
  },
  ABCEFGHL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  ABCEFGHK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  ABCEFGHJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3J"
  },
  ABCEFGHI: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  ABCDIJKL: {
    forA: "3I",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDHJKL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDHIKL: {
    forA: "3H",
    forB: "3I",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDHIJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ABCDHIJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ABCDGJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3K"
  },
  ABCDGIKL: {
    forA: "3I",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDGIJL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3L",
    forL: "3I"
  },
  ABCDGIJK: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3G",
    forK: "3I",
    forL: "3K"
  },
  ABCDGHKL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDGHJL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3J"
  },
  ABCDGHJK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3J",
    forL: "3K"
  },
  ABCDGHIL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ABCDGHIK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ABCDGHIJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3J"
  },
  ABCDFJKL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCDFIKL: {
    forA: "3C",
    forB: "3I",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCDFIJL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABCDFIJK: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABCDFHKL: {
    forA: "3H",
    forB: "3F",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDFHJL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3H"
  },
  ABCDFHJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3K"
  },
  ABCDFHIL: {
    forA: "3H",
    forB: "3F",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ABCDFHIK: {
    forA: "3H",
    forB: "3F",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ABCDFHIJ: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3I"
  },
  ABCDFGKL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCDFGJL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3J"
  },
  ABCDFGJK: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3J",
    forL: "3K"
  },
  ABCDFGIL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABCDFGIK: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABCDFGIJ: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3J"
  },
  ABCDFGHL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3H"
  },
  ABCDFGHK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3K"
  },
  ABCDFGHJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3J"
  },
  ABCDFGHI: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3I"
  },
  ABCDEJKL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDEIKL: {
    forA: "3E",
    forB: "3I",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDEIJL: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ABCDEIJK: {
    forA: "3E",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ABCDEHKL: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDEHJL: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3E"
  },
  ABCDEHJK: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3E",
    forL: "3K"
  },
  ABCDEHIL: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ABCDEHIK: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ABCDEHIJ: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3E",
    forL: "3I"
  },
  ABCDEGKL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3K"
  },
  ABCDEGJL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3J"
  },
  ABCDEGJK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3J",
    forL: "3K"
  },
  ABCDEGIL: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3I"
  },
  ABCDEGIK: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3K"
  },
  ABCDEGIJ: {
    forA: "3E",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3I",
    forL: "3J"
  },
  ABCDEGHL: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3E"
  },
  ABCDEGHK: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3E",
    forL: "3K"
  },
  ABCDEGHJ: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3E",
    forL: "3J"
  },
  ABCDEGHI: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3E",
    forL: "3I"
  },
  ABCDEFKL: {
    forA: "3C",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3K"
  },
  ABCDEFJL: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  ABCDEFJK: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  ABCDEFIL: {
    forA: "3C",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3I"
  },
  ABCDEFIK: {
    forA: "3C",
    forB: "3E",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3I",
    forL: "3K"
  },
  ABCDEFIJ: {
    forA: "3C",
    forB: "3J",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  ABCDEFHL: {
    forA: "3H",
    forB: "3F",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3D",
    forK: "3L",
    forL: "3E"
  },
  ABCDEFHK: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3K"
  },
  ABCDEFHJ: {
    forA: "3H",
    forB: "3J",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3E"
  },
  ABCDEFHI: {
    forA: "3H",
    forB: "3E",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3I"
  },
  ABCDEFGL: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3L",
    forL: "3E"
  },
  ABCDEFGK: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3K"
  },
  ABCDEFGJ: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3J"
  },
  ABCDEFGI: {
    forA: "3C",
    forB: "3G",
    forD: "3B",
    forE: "3D",
    forG: "3A",
    forI: "3F",
    forK: "3E",
    forL: "3I"
  },
  ABCDEFGH: {
    forA: "3H",
    forB: "3G",
    forD: "3B",
    forE: "3C",
    forG: "3A",
    forI: "3F",
    forK: "3D",
    forL: "3E"
  }
} as const
