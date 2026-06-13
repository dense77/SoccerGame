import type { MatchFixture, Player, Team, TournamentGroup } from '../../types/entities'

export const worldCupSeedTimestamp = "2026-06-14T04:05:00.000Z"

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
    name: "马捷伊·科瓦日",
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
    name: "大卫·齐马",
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
    name: "托马什·霍莱什",
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
    name: "罗宾·赫拉纳奇",
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
    name: "弗拉基米尔·曹法尔",
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
    name: "斯捷潘·哈卢佩克",
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
    name: "拉季斯拉夫·克雷伊奇",
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
    name: "弗拉基米尔·达里达",
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
    name: "亚当·赫洛热克",
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
    name: "帕特里克·希克",
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
    name: "扬·库赫塔",
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
    name: "卢卡什·切尔夫",
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
    name: "莫伊米尔·希季尔",
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
    name: "大卫·尤拉塞克",
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
    name: "帕维尔·舒尔茨",
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
    name: "因德日赫·斯塔涅克",
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
    name: "卢卡什·普罗沃德",
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
    name: "米哈尔·萨迪莱克",
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
    name: "托马什·霍里",
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
    name: "雅罗斯拉夫·泽莱尼",
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
    name: "大卫·杜杰拉",
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
    name: "托马什·绍切克",
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
    name: "卢卡什·霍尔尼切克",
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
    name: "亚历山大尔·索伊卡",
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
    name: "雨果·索胡雷克",
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
    name: "德尼斯·维辛斯基",
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
    name: "劳尔·兰赫尔",
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
    name: "豪尔赫·桑切斯",
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
    name: "塞萨尔·蒙特斯",
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
    name: "埃德松·阿尔瓦雷斯",
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
    name: "约翰·巴斯克斯",
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
    name: "埃里克·利拉",
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
    name: "路易斯·罗莫",
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
    name: "阿尔瓦罗·菲达尔戈",
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
    name: "劳尔·希门尼斯",
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
    name: "亚历克西斯·贝加",
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
    name: "圣地亚哥·希门尼斯",
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
    name: "卡洛斯·阿塞韦多",
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
    name: "吉列尔莫·奥乔亚",
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
    name: "阿尔姆恩多·冈萨雷斯",
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
    name: "伊斯尔阿勒·尔埃斯",
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
    name: "胡利安·基尼奥内斯",
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
    name: "奥尔贝利恩·皮内达",
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
    name: "奥贝德·巴尔加斯",
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
    name: "格伊尔布埃尔托·莫拉",
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
    name: "马特埃·查韦斯",
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
    name: "塞萨尔·哈韦尔塔",
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
    name: "吉列尔莫·马丁内斯",
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
    name: "杰苏斯·格尔勒尔多",
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
    name: "路易斯·查韦斯",
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
    name: "罗伯托·阿尔瓦拉多",
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
    name: "布赖恩·格乌特伊尔雷兹",
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
    name: "尔奥恩韦恩·威廉斯",
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
    name: "特布恩格·马图卢迪",
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
    name: "克乌卢马尼·恩阿马内",
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
    name: "特博霍·莫克奥纳",
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
    name: "特勒埃恩特·姆特哈",
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
    name: "奥布尔埃·莫迪布",
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
    name: "奥斯维恩·阿普普奥尔利斯",
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
    name: "特埃普恩格·莫雷米",
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
    name: "勒伊莱·夫奥斯特尔",
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
    name: "雷莱博希莱·莫福克埃恩格",
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
    name: "特埃姆布·兹内",
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
    name: "特佩洛·马塞科",
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
    name: "斯埃普赫洛·斯伊特霍莱",
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
    name: "姆埃凯泽利·姆奥卡齐",
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
    name: "伊尔阿姆·尔艾恩埃尔斯",
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
    name: "斯伊普霍·克艾内",
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
    name: "埃维德埃恩塞·姆克戈帕",
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
    name: "萨穆凯莱·卡布伊尼",
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
    name: "恩奥西恩阿特希·西布伊西",
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
    name: "克乌利索·穆德奥",
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
    name: "伊梅·奥科恩",
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
    name: "里卡多·格奥斯斯",
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
    name: "贾艾德恩·亚当斯",
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
    name: "奥尔瓦埃特胡·姆克哈恩亚",
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
    name: "卡莫格洛·塞贝莱贝莱",
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
    name: "布尔阿德勒埃·克罗奥斯斯",
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
    name: "金承奎",
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
    name: "李韩范",
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
    name: "李基赫",
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
    name: "金玟哉",
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
    name: "金泰贤",
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
    name: "黄仁范",
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
    name: "孙兴慜",
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
    name: "白昇浩",
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
    name: "曹圭成",
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
    name: "李在城",
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
    name: "黄喜灿",
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
    name: "宋范根",
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
    name: "李泰锡",
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
    name: "曹威济",
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
    name: "金纹奂",
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
    name: "朴镇燮",
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
    name: "裴峻浩",
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
    name: "吴贤揆",
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
    name: "李刚仁",
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
    name: "梁贤俊",
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
    name: "赵贤祐",
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
    name: "薛英佑",
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
    name: "延斯·卡斯特罗普",
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
    name: "金镇圭",
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
    name: "严智星",
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
    name: "李东炅",
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
    name: "尼科拉·瓦斯伊尔贾",
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
    name: "尼哈德·穆贾克奇",
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
    name: "德埃恩尼斯·哈阿德齐卡杜恩奇",
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
    name: "塔里克·穆哈雷姆奥维奇",
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
    name: "斯亚德·科拉西纳克",
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
    name: "本杰明·塔希尔奥维奇",
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
    name: "阿马尔·德德奇",
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
    name: "阿尔米恩·吉格奥维奇",
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
    name: "萨梅德·布兹达尔",
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
    name: "尔梅迪恩·德米尔奥维奇",
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
    name: "埃迪恩·德埃科",
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
    name: "姆德恩·贾乌尔卡斯",
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
    name: "伊万·布斯奇",
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
    name: "伊万·斯乌恩贾奇",
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
    name: "阿马尔·梅姆奇",
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
    name: "阿米尔·哈阿德兹亚梅特奥维奇",
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
    name: "德埃尼斯·布乌尔恩奇",
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
    name: "尼科拉·卡特奇",
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
    name: "凯里姆·阿勒贝格奥维奇",
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
    name: "埃斯米尔·布尔阿克塔尔耶维奇",
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
    name: "斯埃帕恩·拉德埃尔贾奇",
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
    name: "马丁·兹奥姆伊斯勒奇",
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
    name: "哈里斯·塔布克奥维奇",
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
    name: "阿尔贾恩·马勒奇",
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
    name: "若沃·卢克奇",
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
    name: "尔米恩·姆姆奇",
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
    name: "德艾内·斯特·克勒艾尔",
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
    name: "阿勒伊斯特艾尔·贾奥恩奥恩",
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
    name: "阿尔夫伊·若内斯",
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
    name: "卢克·德夫乌格尔奥尔莱斯",
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
    name: "贾奥勒·沃特曼",
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
    name: "姆特哈伊·克瓦恩伊雷",
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
    name: "斯蒂芬·欧斯塔基奥",
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
    name: "伊斯梅尔·科内",
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
    name: "赛尔·拉林",
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
    name: "乔纳森·戴维",
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
    name: "利亚姆·姆伊尔拉尔",
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
    name: "塔尼·奥卢瓦斯埃",
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
    name: "德雷克·克奥尔内勒伊斯",
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
    name: "雅各布·希阿夫夫埃尔布乌尔格",
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
    name: "姆瓦塞·布奥姆布伊托",
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
    name: "马西梅·克罗埃普奥",
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
    name: "塔琼·布坎南",
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
    name: "奥韦恩·格乌德马恩",
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
    name: "阿方索·戴维斯",
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
    name: "阿里·艾哈迈德",
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
    name: "乔纳森·奥索尔约",
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
    name: "尔伊克哈伊·拉尔伊",
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
    name: "尼科·西格乌尔",
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
    name: "普罗奥米塞·大卫",
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
    name: "内森·萨利巴",
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
    name: "贾艾德恩·内勒森",
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
    name: "姆穆德·阿布乌纳达",
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
    name: "佩德罗·米格埃勒",
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
    name: "卢卡斯·门德斯",
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
    name: "伊萨·勒艾",
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
    name: "贾阿斯塞姆·加贝尔",
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
    name: "阿布杜拉齐兹·哈特姆",
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
    name: "艾哈迈德·阿勒尔迪恩",
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
    name: "埃德米勒森·朱恩约尔",
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
    name: "穆罕默德·姆乌恩塔里",
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
    name: "哈桑·阿尔哈艾多斯",
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
    name: "阿克拉姆·阿菲夫",
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
    name: "卡里姆·布乌德亚夫",
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
    name: "阿布·阿尔维",
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
    name: "霍马姆·艾哈迈德",
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
    name: "尤苏夫·阿布杜里萨格",
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
    name: "布乌莱姆·克乌克希",
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
    name: "艾哈迈德·阿尔加内希",
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
    name: "斯乌尔塔恩·阿尔布尔阿凯",
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
    name: "阿尔姆奥兹·阿里",
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
    name: "艾哈迈德·夫阿特哈伊",
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
    name: "萨拉赫·扎卡里亚",
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
    name: "姆埃斯哈阿勒·布尔希阿姆",
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
    name: "阿斯西姆·马迪博",
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
    name: "特西恩·贾阿姆希伊德",
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
    name: "阿尔哈阿斯哈伊·阿尔哈乌斯斯艾恩",
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
    name: "穆罕默德·马恩艾",
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
    name: "格拉埃戈尔·科贝勒",
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
    name: "米罗·穆哈伊姆",
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
    name: "斯伊尔瓦恩·瓦伊德梅尔",
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
    name: "尼科·埃尔韦迪",
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
    name: "曼努埃尔·阿克恩吉",
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
    name: "德尼·扎卡里亚",
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
    name: "布尔伊勒·埃姆博洛",
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
    name: "雷莫·弗朗欧莱尔",
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
    name: "约翰·姆恩兹姆布伊",
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
    name: "格拉阿尼特·希阿卡",
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
    name: "达恩·恩瓦",
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
    name: "伊沃恩·姆奥戈",
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
    name: "里卡多·罗德里格斯",
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
    name: "阿尔多恩·贾阿斯哈里",
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
    name: "德伊布里勒·索瓦",
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
    name: "克里斯蒂安·夫阿斯斯内阿克哈",
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
    name: "鲁本·巴尔加斯",
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
    name: "埃尔艾·科姆埃尔特",
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
    name: "诺亚·奥卡福尔",
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
    name: "姆伊克赫勒·阿布伊斯克埃尔",
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
    name: "姆尔维恩·克埃尔莱尔",
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
    name: "法比安·尔伊德尔",
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
    name: "泽基·阿姆德乌尼",
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
    name: "奥雷莱·阿姆埃恩达",
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
    name: "卢卡·贾克埃兹",
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
    name: "克埃德尔奇·伊特特恩",
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
    name: "阿利松",
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
    name: "埃德尔森·席尔瓦",
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
    name: "加布里埃尔·马加良斯",
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
    name: "马尔基尼奥斯",
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
    name: "卡塞米罗",
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
    name: "阿莱士·桑德罗",
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
    name: "维尼修斯·儒尼奥尔",
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
    name: "布鲁诺·吉马良斯",
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
    name: "马特乌斯·库尼亚",
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
    name: "内马尔",
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
    name: "拉菲尼亚",
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
    name: "韦弗顿",
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
    name: "达尼洛·路易斯",
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
    name: "布尔埃梅尔",
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
    name: "莱奥·佩雷拉",
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
    name: "道格拉斯·桑托斯",
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
    name: "法比尼奥",
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
    name: "达尼洛·桑托斯",
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
    name: "恩德里克",
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
    name: "卢卡斯·帕奎塔",
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
    name: "路易斯·恩里克",
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
    name: "加布里埃尔·马丁内利",
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
    name: "埃德尔森·莫尔阿斯",
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
    name: "罗热·伊巴涅斯",
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
    name: "伊戈尔·蒂亚戈",
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
    name: "拉扬",
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
    name: "贾奥恩伊·普勒阿西德",
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
    name: "克尔勒埃恩斯·阿尔克乌斯",
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
    name: "克伊托·特埃尔姆奥恩克伊",
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
    name: "里卡多·阿德",
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
    name: "哈阿恩内斯·德埃尔克罗瓦希",
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
    name: "克尔勒·斯艾恩特",
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
    name: "德埃尔尔伊克克·埃特伊恩内·贾",
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
    name: "马丁·埃克斯佩尔伊恩塞",
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
    name: "德乌克克埃恩斯·纳佐恩",
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
    name: "让·尔伊克内尔·布埃尔莱格尔德",
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
    name: "勒维克伊斯·德伊德森",
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
    name: "阿莱希阿恩德拉埃·皮埃尔",
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
    name: "杜凯·拉克鲁瓦",
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
    name: "格尔韦恩·梅图萨拉",
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
    name: "鲁本·普罗奥维德埃恩塞",
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
    name: "勒埃恩恩伊·约瑟夫",
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
    name: "德恩勒埃·让·贾阿克克埃斯",
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
    name: "维勒森·伊西多尔",
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
    name: "亚斯西恩·夫奥尔图内",
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
    name: "弗朗阿恩特伊·普伊尔罗特",
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
    name: "霍苏埃·卡西米尔",
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
    name: "让·凯文·杜夫埃尔内",
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
    name: "霍苏埃·杜夫埃尔格尔",
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
    name: "瓦伊尔格埃恩斯·普奥格艾恩",
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
    name: "多米尼克埃·西蒙",
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
    name: "瓦乌德恩斯基·皮埃尔",
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
    name: "亚辛·布努",
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
    name: "阿什拉夫·哈基米",
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
    name: "努赛尔·马兹拉维",
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
    name: "索菲扬·阿姆拉巴特",
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
    name: "姆尔瓦内·斯达内",
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
    name: "阿布·布乌德迪",
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
    name: "克埃姆斯伊内·塔勒比",
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
    name: "阿泽丁·欧纳希",
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
    name: "斯乌夫亚内·拉希米",
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
    name: "布尔阿希姆·迪亚斯",
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
    name: "伊斯梅尔·斯艾布里",
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
    name: "穆尼尔·莫哈梅迪",
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
    name: "扎卡里亚·埃尔乌迪",
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
    name: "伊萨·德约普",
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
    name: "萨米尔·埃尔姆乌拉贝特",
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
    name: "格埃斯西梅·亚辛",
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
    name: "阿明·斯艾",
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
    name: "克迪·尔亚德",
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
    name: "优素福·贝勒姆马里",
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
    name: "阿布·埃尔克布伊",
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
    name: "阿贝·阿姆艾姆乌尼",
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
    name: "艾哈迈德·雷达·特格恩奥蒂",
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
    name: "布伊拉勒·埃尔克恩恩乌斯斯",
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
    name: "恩伊勒·埃尔艾恩阿",
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
    name: "雷德乌内·哈阿尔哈勒",
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
    name: "阿恩阿斯斯·萨拉赫·埃德迪内",
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
    name: "阿恩格乌斯·格乌恩恩",
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
    name: "阿罗恩·哈伊克克埃",
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
    name: "阿恩德伊·罗布埃尔特森",
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
    name: "斯科特·姆奥米恩艾",
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
    name: "格拉阿恩特·哈阿恩勒埃",
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
    name: "克伊拉恩·特伊尔恩埃",
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
    name: "约翰·姆伊恩恩",
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
    name: "特伊莱尔·弗勒埃特克埃尔",
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
    name: "勒伊恩多恩·德伊凯斯",
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
    name: "克埃·亚当斯",
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
    name: "尔亚恩·克伊斯特伊",
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
    name: "利亚姆·克埃尔勒伊",
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
    name: "贾阿克克·哈埃恩德拉伊",
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
    name: "尔奥斯斯·斯特埃瓦尔特",
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
    name: "约翰·苏塔尔",
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
    name: "多米恩奇·哈亚姆",
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
    name: "本格恩诺恩·德奥克",
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
    name: "格埃尔格·哈伊尔斯特",
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
    name: "莱维斯·夫埃尔格乌森",
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
    name: "劳伦斯·希阿恩克勒阿恩德",
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
    name: "克罗艾格·戈登",
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
    name: "内森·普特特尔森",
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
    name: "克埃恩恩伊·姆亚恩",
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
    name: "安东尼·尔阿尔斯特奥恩",
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
    name: "夫伊恩德艾·克乌尔蒂斯",
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
    name: "斯科特·姆埃恩纳",
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
    name: "姆特赫瓦·尔亚恩",
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
    name: "米洛斯·德格内克",
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
    name: "亚历山德罗·克伊尔卡蒂",
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
    name: "雅各布·伊塔勒亚诺",
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
    name: "乔丹·博斯",
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
    name: "贾森·格尔亚",
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
    name: "姆特赫瓦·勒埃克克伊",
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
    name: "克奥恩诺尔·姆埃特克尔费",
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
    name: "穆罕默德·图雷",
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
    name: "阿迪恩·哈乌斯特奇",
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
    name: "阿韦尔·马布伊勒",
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
    name: "保罗·伊兹佐",
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
    name: "艾德恩·奥恩伊尔勒",
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
    name: "克姆姆伊·德埃利恩",
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
    name: "凯·特罗埃维恩",
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
    name: "阿齐兹·贝哈奇",
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
    name: "恩埃斯托尔伊·伊尔阿恩克乌恩达",
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
    name: "普特尔伊克克·布亚克哈",
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
    name: "哈里·苏塔尔",
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
    name: "克里斯蒂安·夫奥尔帕托",
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
    name: "卡梅罗恩·布乌尔格埃斯斯",
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
    name: "杰克逊·伊尔维内",
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
    name: "恩伊斯哈恩·韦卢普伊尔勒艾",
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
    name: "保罗·奥科恩·埃恩格埃尔",
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
    name: "卢卡斯·哈埃尔尔伊恩格奥恩",
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
    name: "特特·伊恩吉",
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
    name: "加蒂托·费尔南德斯",
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
    name: "古斯塔沃·韦勒兹克埃兹",
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
    name: "奥马尔·阿尔德雷特",
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
    name: "贾乌恩·何塞·卡塞雷斯",
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
    name: "法比安·布尔布韦纳",
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
    name: "朱恩约尔·阿勒奥恩索",
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
    name: "拉莫恩·索萨",
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
    name: "迭戈·戈麦斯",
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
    name: "安东尼奥·萨纳夫里亚",
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
    name: "米格埃勒·阿尔米罗恩",
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
    name: "姆奥里克约",
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
    name: "奥尔勒恩多·格伊尔勒",
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
    name: "何塞·卡纳莱",
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
    name: "安德烈斯·克乌布斯",
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
    name: "古斯塔沃·戈麦斯",
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
    name: "达姆亚恩·博布德伊尔拉",
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
    name: "卡库",
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
    name: "亚历克斯·阿尔塞",
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
    name: "朱勒约·埃恩西索",
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
    name: "布尔阿恩·奥杰达",
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
    name: "格布尔伊勒·阿瓦洛斯",
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
    name: "格斯托恩·奥尔夫伊拉",
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
    name: "马蒂亚斯·加勒尔扎",
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
    name: "古斯塔沃·卡布尔莱罗",
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
    name: "伊斯伊德罗·普伊特塔",
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
    name: "阿莱希阿恩德拉奥·姆艾达纳",
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
    name: "梅尔特·格乌诺克",
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
    name: "泽基·塞利克",
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
    name: "梅里哈·德米拉勒",
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
    name: "克格拉尔·斯奥恩克乌",
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
    name: "萨利哈·奥兹卡恩",
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
    name: "奥尔库恩·克奥克克乌",
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
    name: "凯雷姆·阿克特乌尔克奥格卢",
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
    name: "阿尔达·格乌莱尔",
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
    name: "德尼兹·格乌勒",
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
    name: "哈卡恩·克尔哈恩奥格卢",
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
    name: "凯纳恩·伊·勒·兹",
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
    name: "阿尔特艾·布艾·恩·尔",
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
    name: "埃雷恩·埃尔马勒",
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
    name: "阿布德乌尔凯里姆·布尔德克克",
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
    name: "奥扎恩·卡布克",
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
    name: "伊斯姆艾勒·伊克塞克",
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
    name: "伊尔法恩·詹·克韦西",
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
    name: "梅尔特·姆乌尔杜尔",
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
    name: "尤努斯·阿克格乌恩",
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
    name: "夫埃尔迪·卡德·奥格卢",
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
    name: "布尔·斯·阿尔佩尔·伊·勒兹",
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
    name: "克恩·艾哈恩",
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
    name: "乌格乌尔卡恩·卡克·尔",
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
    name: "奥格乌兹·艾德·恩",
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
    name: "萨梅特·阿克艾迪恩",
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
    name: "詹·乌祖恩",
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
    name: "马特·特纳",
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
    name: "塞尔吉尼奥·德斯特",
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
    name: "克里斯·尔伊克哈阿尔德",
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
    name: "泰勒·亚当斯",
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
    name: "阿恩托恩伊·罗宾逊",
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
    name: "奥斯托恩·特罗乌斯特伊",
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
    name: "格约夫阿恩尼·尔埃纳",
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
    name: "韦斯顿·麦肯尼",
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
    name: "里卡多·佩皮",
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
    name: "克里斯蒂安·普利希奇",
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
    name: "布尔埃恩德恩·阿罗恩森",
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
    name: "米莱斯·罗宾逊",
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
    name: "蒂姆·尔亚姆",
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
    name: "塞布斯特亚恩·布埃尔哈阿尔特尔",
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
    name: "克里斯蒂安·尔奥尔达恩",
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
    name: "亚历克斯·弗朗伊马恩",
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
    name: "马利克·特伊尔勒恩",
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
    name: "马希·阿尔夫埃恩",
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
    name: "哈吉·尔伊格哈",
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
    name: "弗拉林·巴洛贡",
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
    name: "蒂莫西·瓦亚哈",
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
    name: "马克·姆埃恩兹伊",
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
    name: "贾奥·斯尔勒伊",
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
    name: "马特·弗朗伊塞",
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
    name: "克里斯·布尔阿德伊",
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
    name: "阿莱贾阿恩德拉奥·兹埃恩德贾斯",
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
    name: "埃勒瓦·尔乌姆",
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
    name: "希乌尔阿恩德伊·斯姆博",
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
    name: "朱尔伊恩·格里",
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
    name: "尔奥斯霍恩·范伊马",
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
    name: "希埃雷勒·弗勒奥拉努斯",
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
    name: "格奥德弗朗伊德·尔奥梅拉特奥",
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
    name: "朱恩伊恩霍·巴库纳",
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
    name: "利瓦诺·科梅恩埃恩克亚",
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
    name: "贾乌尔格恩·洛卡德亚",
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
    name: "莱安德罗·巴库纳",
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
    name: "杰里米·阿恩托恩伊斯塞",
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
    name: "斯奥恩特埃·哈恩森",
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
    name: "特伊雷塞·恩奥斯利恩",
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
    name: "克埃恩吉·格奥尔雷",
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
    name: "阿尔·贾恩伊·姆尔特",
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
    name: "贾亚尔勒·姆尔加尔伊特哈",
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
    name: "布尔阿恩德埃·库瓦斯",
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
    name: "阿尔姆恩多·奥布伊斯波",
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
    name: "格埃尔瓦内·克斯塔恩伊尔",
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
    name: "约书亚·布尔埃内特",
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
    name: "塔哈伊特哈·克奥恩格",
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
    name: "凯文·费利达",
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
    name: "尔伊克哈埃德勒伊·布兹奥尔",
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
    name: "德韦罗恩·夫奥恩夫伊尔莱",
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
    name: "特伊尔伊克克·博达克",
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
    name: "特罗埃沃尔·德乌尔恩乌斯克",
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
    name: "哈埃尔纳恩·加勒伊恩德兹",
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
    name: "菲利克斯·托雷斯",
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
    name: "皮耶罗·因卡皮耶",
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
    name: "贾奥勒·奥尔多内兹",
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
    name: "贾奥尔德伊·阿尔西瓦尔",
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
    name: "瓦伊尔勒亚恩·普克霍",
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
    name: "佩尔维斯·埃斯图皮尼安",
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
    name: "安东尼·瓦伦西亚",
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
    name: "约翰·耶布奥哈",
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
    name: "肯德里·帕埃斯",
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
    name: "凯文·罗德里格斯",
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
    name: "莫伊塞斯·拉米雷兹",
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
    name: "恩纳·瓦伦西亚",
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
    name: "阿兰·姆伊恩达",
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
    name: "佩德罗·维特",
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
    name: "贾奥尔德伊·凯塞多",
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
    name: "阿恩格洛·普罗埃克亚多",
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
    name: "德尼勒·克斯特伊尔洛",
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
    name: "格奥恩扎洛·普勒阿塔",
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
    name: "尼勒森·阿恩格乌洛",
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
    name: "阿兰·弗朗阿恩科",
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
    name: "格奥恩扎洛·夫阿尔莱",
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
    name: "莫伊塞斯·凯塞多",
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
    name: "杰里米·阿雷瓦洛",
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
    name: "杰克逊·波罗佐",
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
    name: "伊马尔·梅迪纳",
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
    name: "曼努埃尔·恩埃尔",
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
    name: "安东尼奥·鲁迪格尔",
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
    name: "瓦尔德马尔·阿恩托恩",
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
    name: "乔纳森·塔哈",
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
    name: "阿勒埃克斯恩达尔·普勒奥维奇",
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
    name: "约书亚·克伊姆姆奇",
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
    name: "凯·哈夫埃尔特",
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
    name: "勒埃恩·戈尔埃特兹",
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
    name: "贾姆伊·莱韦勒伊恩格",
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
    name: "贾马尔·穆西亚拉",
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
    name: "恩伊克克·瓦奥尔特马德",
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
    name: "奥利韦尔·布奥姆恩恩",
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
    name: "普斯卡勒·格拉奥",
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
    name: "马西米勒亚恩·布伊尔",
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
    name: "尼科·希奥特特埃尔布埃克克",
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
    name: "阿恩格洛·斯特伊尔莱尔",
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
    name: "弗洛里安·维尔茨",
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
    name: "恩阿特哈恩伊勒·布尔奥恩",
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
    name: "莱尔瓦·萨内",
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
    name: "纳德伊姆·阿米里",
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
    name: "亚历山大·努贝勒",
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
    name: "大卫·尔奥姆",
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
    name: "菲利克斯·恩埃克哈",
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
    name: "马利克·特亚瓦",
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
    name: "阿斯萨恩·韦德尔奥戈",
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
    name: "德尼兹·乌恩达夫",
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
    name: "亚哈亚·福法纳",
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
    name: "乌斯曼·迪奥曼德",
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
    name: "格伊斯勒艾恩·科纳恩",
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
    name: "让·迈克尔·塞里",
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
    name: "瓦伊尔弗朗伊德·斯伊恩戈",
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
    name: "塞科·福法纳",
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
    name: "奥迪洛恩·克奥斯斯乌恩乌",
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
    name: "弗朗阿恩克·克埃斯斯伊",
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
    name: "阿恩格·约恩·布奥恩恩伊",
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
    name: "西蒙·阿德伊恩格拉阿",
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
    name: "扬·迪奥曼德",
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
    name: "埃勒伊·瓦希",
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
    name: "克伊斯特奥普赫尔·奥佩里",
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
    name: "乌马尔·德亚基特",
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
    name: "阿马德·德亚尔洛",
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
    name: "穆罕默德·科内",
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
    name: "格埃拉·杜埃",
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
    name: "易卜拉欣·斯恩加雷",
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
    name: "尼古拉斯·佩佩",
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
    name: "埃姆马恩韦勒·阿格布德乌",
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
    name: "埃瓦恩·恩伊克卡",
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
    name: "埃夫阿恩恩·格埃斯斯恩德",
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
    name: "阿尔布恩·拉夫奥恩特",
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
    name: "布兹乌马纳·图雷",
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
    name: "普尔夫艾特·格亚戈恩",
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
    name: "克伊斯特·伊恩奥·乌勒艾",
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
    name: "铃木彩艳",
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
    name: "菅原由势",
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
    name: "谷口彰悟",
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
    name: "板仓滉",
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
    name: "长友佑都",
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
    name: "町野修斗",
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
    name: "田中碧",
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
    name: "久保建英",
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
    name: "后藤启介",
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
    name: "堂安律",
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
    name: "前田大然",
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
    name: "大迫敬介",
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
    name: "中村敬斗",
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
    name: "伊东纯也",
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
    name: "镰田大地",
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
    name: "渡边刚",
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
    name: "铃木唯人",
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
    name: "上田绮世",
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
    name: "小川航基",
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
    name: "濑古步梦",
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
    name: "伊藤洋辉",
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
    name: "富安健洋",
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
    name: "早川友基",
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
    name: "佐野海舟",
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
    name: "铃木淳之介",
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
    name: "盐贝健人",
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
    name: "布尔特·夫埃尔布尔乌格格恩",
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
    name: "勒乌特希阿雷勒·格伊尔特罗维达",
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
    name: "姆尔特恩·德尔乌恩",
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
    name: "维吉尔·范戴克",
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
    name: "内森·阿凯",
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
    name: "贾恩·保罗·范哈埃克凯",
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
    name: "贾乌斯蒂恩·克勒维夫埃尔特",
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
    name: "尔亚恩·格拉阿夫埃恩布埃尔克",
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
    name: "瓦乌特·瓦埃格哈奥尔斯特",
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
    name: "姆埃姆夫伊斯·德普艾",
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
    name: "科德伊·格克波",
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
    name: "姆特斯·瓦伊夫费尔",
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
    name: "罗宾·尔奥夫斯",
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
    name: "特伊贾尼·尔伊恩埃尔斯",
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
    name: "姆伊克克伊·范德韦恩",
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
    name: "格乌斯·蒂勒",
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
    name: "恩奥·勒恩格",
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
    name: "多恩伊尔勒·马莱恩",
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
    name: "布赖恩·布尔奥布布埃",
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
    name: "特欧恩·克乌普姆伊恩埃尔斯",
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
    name: "弗朗埃恩克伊·德贾奥恩格",
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
    name: "德埃恩泽勒·德乌姆弗朗伊斯",
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
    name: "马克·弗勒埃克凯恩",
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
    name: "克罗伊斯埃恩克约·斯乌姆姆埃尔夫伊尔莱",
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
    name: "贾奥尔雷勒·哈托",
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
    name: "克伊恩特恩·特伊姆贝尔",
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
    name: "雅各布·维德埃尔勒·兹埃特特埃尔斯特奥姆",
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
    name: "古斯塔夫·拉格埃尔布伊尔凯",
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
    name: "夫伊克托尔·勒伊恩德洛夫",
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
    name: "伊萨克·哈伊恩",
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
    name: "格布尔伊勒·格乌德姆乌恩德松",
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
    name: "哈埃尔马恩·约翰松",
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
    name: "卢卡斯·布埃尔格尔勒",
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
    name: "丹尼尔·斯埃恩松",
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
    name: "亚历山大·伊萨克",
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
    name: "本杰明·恩伊格雷恩",
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
    name: "安东尼·埃勒恩加",
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
    name: "维克托·约翰松",
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
    name: "凯恩·塞马",
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
    name: "哈阿尔马尔·埃克达勒",
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
    name: "克尔勒·斯特阿尔夫埃尔特",
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
    name: "贾埃斯佩尔·克尔勒奥姆",
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
    name: "维克托·格约凯雷斯",
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
    name: "亚西恩·阿亚里",
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
    name: "姆特特亚斯·斯恩布埃尔格",
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
    name: "埃里克·史密斯",
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
    name: "亚历山大·布埃尔恩阿尔德松",
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
    name: "布埃斯夫奥尔特·泽内利",
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
    name: "克拉伊斯特奥夫费尔·恩奥尔德埃尔德",
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
    name: "埃利奥特·斯特乌德",
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
    name: "古斯塔夫·尼勒松",
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
    name: "塔哈·阿里",
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
    name: "姆乌希布·克姆克哈",
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
    name: "阿里·阿布迪",
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
    name: "姆奥恩特斯萨尔·塔勒比",
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
    name: "奥马尔·雷基克",
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
    name: "阿德姆·阿尔乌斯",
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
    name: "德伊拉恩·布尔奥恩恩",
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
    name: "埃勒亚斯·阿克哈乌里",
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
    name: "埃勒亚斯·斯德",
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
    name: "哈泽姆·姆斯特乌里",
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
    name: "哈阿恩尼布勒·姆埃布尔伊",
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
    name: "伊斯梅尔·格尔布伊",
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
    name: "姆奥尔特德哈·本乌内斯",
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
    name: "拉尼·克埃迪拉",
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
    name: "克利勒·阿亚里",
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
    name: "哈吉·马哈茂德",
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
    name: "艾曼·德梅恩",
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
    name: "埃尔勒伊斯·斯伊里",
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
    name: "拉扬·埃尔勒乌米",
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
    name: "菲拉斯·克特",
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
    name: "扬·瓦莱尔伊",
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
    name: "穆罕默德·阿明·本哈米达",
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
    name: "斯布里·本赫斯森",
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
    name: "姆乌塔兹·恩埃夫法蒂",
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
    name: "尔阿德·克伊克哈阿",
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
    name: "阿尼斯·本斯勒伊马内",
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
    name: "塞布斯特亚恩·特乌恩埃克蒂",
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
    name: "蒂博·库尔图瓦",
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
    name: "泽诺·德布斯特",
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
    name: "阿图尔·特亚特",
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
    name: "布尔阿恩多恩·姆埃克赫莱",
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
    name: "马西姆·德克乌佩尔",
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
    name: "阿克塞尔·瓦伊特塞勒",
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
    name: "凯文·德布劳内",
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
    name: "尤里·蒂勒曼斯",
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
    name: "罗梅卢·卢卡库",
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
    name: "莱安德罗·特罗奥斯斯尔德",
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
    name: "热雷米·多库",
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
    name: "斯埃恩内·勒姆姆埃恩斯",
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
    name: "迈克·普埃恩德埃尔斯",
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
    name: "多迪·卢凯布克约",
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
    name: "托马斯·姆欧恩伊尔",
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
    name: "科尼·德瓦伊恩特尔",
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
    name: "夏尔·德凯特勒雷",
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
    name: "贾奥克伊恩·斯埃斯",
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
    name: "迭戈·莫尔伊拉",
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
    name: "哈阿恩斯·瓦纳凯恩",
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
    name: "蒂莫西·克斯特格内",
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
    name: "亚历克西斯·斯莱姆克埃尔斯",
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
    name: "尼古拉斯·尔阿斯基恩",
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
    name: "阿马德乌·奥纳纳",
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
    name: "内森·恩瓦",
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
    name: "马蒂亚斯·费尔南德斯·普尔多",
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
    name: "穆罕默德·希纳维",
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
    name: "亚斯塞尔·易卜拉欣",
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
    name: "穆罕默德·哈恩伊",
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
    name: "哈奥斯萨姆·阿布德埃尔马格伊德",
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
    name: "拉姆伊·拉布亚",
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
    name: "穆罕默德·阿卜杜勒莫内姆",
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
    name: "特雷泽盖",
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
    name: "埃马姆·阿斯哈乌尔",
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
    name: "哈阿姆扎·阿布德埃尔卡里姆",
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
    name: "穆罕默德·萨拉赫",
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
    name: "穆斯塔法·齐科",
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
    name: "哈艾斯塞姆·哈桑",
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
    name: "艾哈迈德·法特乌哈",
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
    name: "哈阿姆德伊·夫阿特哈伊",
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
    name: "卡里姆·哈费兹",
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
    name: "埃尔姆德伊·索利马恩",
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
    name: "莫哈纳德·勒斯哈伊恩",
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
    name: "纳比勒·埃马德",
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
    name: "姆尔瓦恩·阿特特亚",
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
    name: "易卜拉欣·阿德勒",
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
    name: "马哈茂德·萨贝尔",
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
    name: "奥马尔·马尔穆什",
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
    name: "穆斯塔法·希奥布伊尔",
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
    name: "塔雷克·阿勒",
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
    name: "齐佐",
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
    name: "穆罕默德·阿勒",
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
    name: "阿利雷扎·布伊尔阿恩夫阿恩德",
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
    name: "萨莱哈·哈阿尔达尼",
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
    name: "埃萨恩·哈阿萨菲",
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
    name: "希奥贾阿·克勒伊尔扎德哈",
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
    name: "米拉德·莫哈阿姆马迪",
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
    name: "斯德·埃扎托拉希",
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
    name: "阿里雷扎·贾汉巴赫什",
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
    name: "穆罕默德·莫赫布伊",
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
    name: "迈赫迪·塔雷米",
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
    name: "迈赫迪·格艾迪",
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
    name: "阿里·阿利普乌尔",
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
    name: "普姆·恩亚兹姆恩德",
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
    name: "哈奥斯斯伊恩·卡恩阿尼扎德加恩",
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
    name: "萨马恩·格奥德多斯",
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
    name: "尔乌兹贝哈·克埃斯哈伊",
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
    name: "迈赫迪·托拉布伊",
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
    name: "阿尔亚·伊塞菲",
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
    name: "阿姆伊尔哈奥斯斯伊恩·哈奥斯斯伊恩扎德哈",
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
    name: "阿里·内马蒂",
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
    name: "希阿尔伊尔·姆奥格哈阿恩勒乌",
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
    name: "穆罕默德·格奥尔布尼",
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
    name: "哈奥斯斯伊恩·哈奥斯斯伊尼",
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
    name: "拉明·礼萨扬",
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
    name: "德埃恩尼斯·埃克克埃尔特",
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
    name: "达恩亚勒·伊里",
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
    name: "阿姆伊尔莫哈阿姆马德·尔阿兹兹格希恩亚",
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
    name: "马希·克罗奥克奥姆贝",
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
    name: "蒂姆·普艾内",
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
    name: "弗朗阿恩西斯·德夫伊斯",
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
    name: "特伊莱尔·布伊恩多恩",
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
    name: "迈克尔·博希阿尔勒",
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
    name: "贾奥·布埃尔勒",
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
    name: "姆特特埃瓦·格尔布埃特特",
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
    name: "马尔科·斯特阿梅恩奇",
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
    name: "克里斯·瓦乌德",
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
    name: "斯尔普罗伊特·斯伊恩格",
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
    name: "埃利贾哈·贾乌斯特",
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
    name: "亚历克斯·保罗森",
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
    name: "利贝拉托·卡卡塞",
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
    name: "亚历克斯·鲁费尔",
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
    name: "恩阿恩多·普伊纳凯尔",
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
    name: "夫伊恩恩·斯乌尔马恩",
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
    name: "克奥斯塔·布尔布尔乌塞斯",
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
    name: "本瓦艾内",
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
    name: "本奥尔德",
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
    name: "克尔卢姆·姆奥瓦特特",
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
    name: "贾埃斯塞·尔阿恩德尔勒",
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
    name: "迈克尔·瓦乌德",
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
    name: "尔亚恩·托马斯",
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
    name: "克尔拉恩·埃利奥特",
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
    name: "勒克哈阿恩·布艾勒伊斯斯",
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
    name: "特奥姆姆伊·史密斯",
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
    name: "沃兹伊恩哈",
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
    name: "斯特奥皮拉",
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
    name: "迪恩埃",
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
    name: "罗伯托·洛佩斯",
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
    name: "洛加恩·克奥斯塔",
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
    name: "凯文·皮纳",
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
    name: "若瓦内·克布拉勒",
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
    name: "若昂·普奥洛",
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
    name: "吉勒森·本克伊莫勒",
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
    name: "贾米罗·姆奥恩特伊罗",
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
    name: "格尔尔伊·尔奥德里格埃斯",
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
    name: "姆尔克约·罗萨",
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
    name: "斯伊德恩伊·洛佩斯·克布拉勒",
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
    name: "德尔瓦·德乌尔特",
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
    name: "拉罗斯·德乌尔特",
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
    name: "亚恩恩伊克克·塞梅多",
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
    name: "瓦伊尔勒伊·塞梅多",
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
    name: "特埃尔莫·阿尔克恩若",
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
    name: "德艾洛恩·勒伊拉姆埃恩托",
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
    name: "尔亚恩·门德斯",
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
    name: "努诺·达克奥斯塔",
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
    name: "斯特埃韦恩·莫尔伊拉",
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
    name: "克·多斯桑托斯",
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
    name: "瓦格内尔·皮纳",
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
    name: "克埃尔维恩·皮雷斯",
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
    name: "赫勒约·瓦雷拉",
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
    name: "纳瓦夫·阿尔阿克伊迪",
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
    name: "阿里·姆尔阿斯希",
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
    name: "阿里·拉贾米",
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
    name: "阿布杜莱拉哈·阿尔阿姆里",
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
    name: "哈桑·阿尔特姆布克蒂",
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
    name: "恩阿斯塞尔·阿尔德萨里",
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
    name: "穆萨卜·朱瓦伊尔",
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
    name: "艾马恩·亚哈亚",
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
    name: "菲拉斯·布赖坎",
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
    name: "萨勒姆·达瓦萨里",
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
    name: "萨莱哈·阿尔希埃里",
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
    name: "斯奥德·阿布德乌尔哈米德",
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
    name: "纳瓦夫·布乌斯哈勒",
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
    name: "哈桑·卡德埃斯哈",
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
    name: "阿布德乌尔拉哈·阿尔克艾布里",
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
    name: "兹伊德·阿尔若哈尼",
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
    name: "克利德·阿尔格恩纳姆",
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
    name: "阿勒·阿尔哈埃吉",
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
    name: "阿布德乌尔拉哈·阿尔哈阿姆达恩",
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
    name: "斯乌尔塔恩·姆恩德斯哈",
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
    name: "穆罕默德·阿尔奥瓦艾斯",
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
    name: "艾哈迈德·阿尔克斯萨尔",
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
    name: "穆罕默德·克恩诺",
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
    name: "莫特布·阿尔哈阿尔布伊",
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
    name: "杰哈德·特克里",
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
    name: "穆罕默德·阿布·阿尔希阿马特",
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
    name: "大卫·拉亚",
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
    name: "马克·普维尔",
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
    name: "阿莱士·格里马尔多",
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
    name: "埃里克·加西亚",
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
    name: "马科斯·略伦特",
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
    name: "米克尔·梅里诺",
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
    name: "费兰·托雷斯",
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
    name: "法比安·鲁伊斯",
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
    name: "加维",
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
    name: "达尼·奥尔莫",
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
    name: "耶雷米·皮诺",
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
    name: "佩德罗·波罗",
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
    name: "霍安·加西亚",
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
    name: "艾梅里克·拉波尔特",
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
    name: "阿莱士·巴埃纳",
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
    name: "罗德里",
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
    name: "尼科·威廉斯",
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
    name: "马丁·苏比门迪",
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
    name: "拉明·亚马尔",
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
    name: "佩德里",
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
    name: "米克尔·奥亚萨瓦尔",
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
    name: "保·库巴西",
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
    name: "乌奈·西蒙",
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
    name: "马克·库库雷利亚",
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
    name: "比克托·穆尼奥斯",
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
    name: "博尔哈·伊格莱西亚斯",
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
    name: "斯埃尔格约·尔奥克赫特",
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
    name: "何塞·玛丽亚·希门尼斯",
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
    name: "塞布斯特亚恩·卡塞雷斯",
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
    name: "罗纳德·阿劳霍",
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
    name: "曼努埃尔·乌加特",
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
    name: "罗德里戈·本坦库尔",
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
    name: "尼古拉斯·德拉克罗乌兹",
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
    name: "费德里科·巴尔韦德",
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
    name: "达尔文·努涅斯",
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
    name: "格约尔格亚恩·德阿尔尔阿斯克塔",
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
    name: "法克乌恩多·普埃尔勒伊斯特罗伊",
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
    name: "圣地亚哥·梅莱",
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
    name: "吉列尔莫·瓦雷拉",
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
    name: "阿格乌斯蒂恩·卡恩奥布布约",
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
    name: "埃米利亚诺·马丁内斯",
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
    name: "姆特哈亚斯·奥利韦拉",
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
    name: "马蒂亚斯·维纳",
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
    name: "布赖恩·罗德里格斯",
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
    name: "罗德里戈·阿格伊尔雷",
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
    name: "马西米勒亚诺·阿劳霍",
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
    name: "费德里科·维纳斯",
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
    name: "贾奥克伊恩·皮克埃雷兹",
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
    name: "夫埃尔恩阿恩多·姆乌斯莱拉",
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
    name: "圣地亚哥·布韦诺",
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
    name: "贾乌恩·曼努埃尔·萨纳夫里亚",
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
    name: "罗德里戈·扎拉扎尔",
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
    name: "布里斯·桑巴",
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
    name: "马洛·古斯托",
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
    name: "卢卡斯·德伊格内",
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
    name: "达约·于帕梅卡诺",
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
    name: "儒勒·孔德",
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
    name: "马努·科内",
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
    name: "奥斯曼·登贝莱",
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
    name: "奥雷利安·楚阿梅尼",
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
    name: "马库斯·图拉姆",
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
    name: "基利安·姆巴佩",
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
    name: "迈克尔·奥利塞",
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
    name: "布拉德利·巴尔科拉",
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
    name: "恩戈洛·坎特",
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
    name: "阿德里安·拉比奥",
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
    name: "易卜拉希马·科纳特",
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
    name: "迈克·迈尼昂",
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
    name: "威廉·萨利巴",
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
    name: "沃伦·扎伊尔-埃梅里",
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
    name: "特奥·埃尔南德斯",
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
    name: "德西雷·杜埃",
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
    name: "卢卡斯·埃尔南德斯",
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
    name: "让-菲利普·马特塔",
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
    name: "罗宾·尔伊斯塞尔",
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
    name: "拉扬·切尔基",
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
    name: "姆格哈埃斯·阿克利乌什",
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
    name: "马希埃恩塞·拉克鲁瓦",
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
    name: "法哈德·塔利布",
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
    name: "雷布伊恩·苏拉卡",
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
    name: "哈乌斯斯伊恩·阿里",
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
    name: "兹艾德·特斯伊恩",
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
    name: "阿卡姆·哈阿斯希姆",
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
    name: "马纳夫·伊尼斯",
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
    name: "优素福·阿姆伊恩",
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
    name: "易卜拉欣·布艾斯哈",
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
    name: "阿里·阿尔哈马迪",
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
    name: "莫哈纳德·阿里",
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
    name: "艾哈迈德·克塞姆",
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
    name: "贾拉勒·哈桑",
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
    name: "阿里·伊西夫",
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
    name: "齐达内·伊布勒",
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
    name: "艾哈迈德·姆克恩伊",
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
    name: "阿米尔·阿尔阿姆马里",
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
    name: "阿里·贾西姆",
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
    name: "艾曼·哈乌斯斯伊恩",
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
    name: "凯文·亚科布",
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
    name: "艾马尔·希埃尔",
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
    name: "马尔科·夫阿尔吉",
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
    name: "艾哈迈德·布西勒",
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
    name: "姆埃尔克斯·多斯基",
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
    name: "兹艾德·伊斯姆艾勒",
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
    name: "姆乌斯塔法·斯德乌恩",
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
    name: "弗朗阿恩斯·普乌特罗斯",
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
    name: "尔阿恩·恩伊勒恩德",
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
    name: "姆奥尔特恩·特奥尔斯伊",
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
    name: "克拉伊斯特奥夫费尔·阿杰尔",
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
    name: "勒埃·斯特伊格尔德",
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
    name: "大卫·姆·勒埃尔·瓦奥尔费",
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
    name: "普特尔伊克克·布埃尔格",
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
    name: "亚历山大·瑟洛特",
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
    name: "斯恩德尔·布埃尔格",
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
    name: "埃尔林·哈兰德",
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
    name: "马丁·厄德高",
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
    name: "贾·尔埃恩·斯特阿恩德·拉尔森",
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
    name: "斯恩德尔·特恩格伊克",
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
    name: "埃吉勒·斯埃尔维克",
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
    name: "弗朗埃德里克·奥尔斯内埃斯",
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
    name: "弗朗埃德里克·阿恩德拉埃·布·尔阿恩",
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
    name: "马库斯·哈奥尔姆埃恩·佩德尔森",
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
    name: "特奥尔布·尔·哈埃格格姆",
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
    name: "克拉伊斯特亚恩·特奥尔斯埃德特",
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
    name: "特埃洛·阿斯格尔德",
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
    name: "安东尼奥·努萨",
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
    name: "阿恩德拉亚斯·希埃尔德鲁普",
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
    name: "奥斯卡尔·布奥布布",
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
    name: "延斯·普埃特特尔·哈奥格",
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
    name: "斯奥恩德拉埃·勒恩加斯",
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
    name: "哈埃恩里克·夫阿尔克埃内尔",
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
    name: "胡利安·尔伊尔森",
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
    name: "伊夫阿恩恩·德伊夫",
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
    name: "马马德乌·斯尔尔",
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
    name: "卡利德乌·克乌利布勒伊",
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
    name: "阿布德乌勒艾·斯埃克克",
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
    name: "伊德尔伊斯萨·格埃",
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
    name: "普特赫·克伊斯斯",
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
    name: "阿斯萨内·德伊",
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
    name: "拉米内·卡马拉",
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
    name: "布姆布·德伊恩格",
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
    name: "萨德约·马内",
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
    name: "尼古拉斯·杰克逊",
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
    name: "克埃里夫·恩伊",
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
    name: "伊利马恩·恩伊",
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
    name: "伊斯姆艾勒·贾克奥布斯",
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
    name: "克拉埃皮恩·德亚特塔",
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
    name: "埃德乌尔德·姆埃恩德伊",
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
    name: "帕佩·马塔尔·斯尔尔",
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
    name: "伊斯姆艾拉·斯尔尔",
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
    name: "姆乌斯萨·恩亚克哈特",
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
    name: "易卜拉欣·姆艾",
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
    name: "哈布伊布·德亚尔拉",
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
    name: "布拉·萨波科·恩伊",
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
    name: "莫尔伊·德亚瓦",
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
    name: "阿恩特瓦内·姆埃恩德伊",
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
    name: "埃尔哈阿德吉·马利克·德伊夫",
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
    name: "帕佩·格埃",
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
    name: "姆埃尔维恩·姆斯蒂勒",
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
    name: "艾斯萨·姆恩迪",
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
    name: "阿克哈埃夫·阿布达",
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
    name: "穆罕默德·阿明·特乌格艾",
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
    name: "齐恩埃德迪内·贝勒艾德",
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
    name: "拉米兹·兹埃尔尔乌基",
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
    name: "尔伊德·姆雷兹",
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
    name: "哈乌斯塞姆·阿尔",
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
    name: "阿明·古伊里",
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
    name: "法雷斯·克艾布伊",
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
    name: "阿尼斯·哈吉·姆乌斯萨",
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
    name: "恩阿德希尔·本布乌利",
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
    name: "贾阿恩·哈阿德贾姆",
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
    name: "哈伊克哈姆·布乌德",
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
    name: "拉扬·艾特·恩乌里",
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
    name: "乌斯萨马·本博特",
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
    name: "拉菲克·布埃尔格利",
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
    name: "穆罕默德·阿姆乌拉",
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
    name: "纳比勒·本塔莱布",
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
    name: "阿迪勒·布乌尔布伊纳",
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
    name: "拉姆伊·本塞布艾尼",
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
    name: "易卜拉欣·马扎",
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
    name: "卢卡·齐达内",
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
    name: "亚西内·特伊特尔阿",
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
    name: "法雷斯·格埃德杰米斯",
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
    name: "萨米尔·克埃尔格伊",
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
    name: "胡安·穆索",
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
    name: "马科斯·塞内西",
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
    name: "尼古拉斯·塔利亚菲科",
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
    name: "冈萨洛·蒙铁尔",
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
    name: "莱安德罗·帕雷德斯",
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
    name: "利桑德罗·马丁内斯",
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
    name: "罗德里戈·德保罗",
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
    name: "瓦伦丁·巴尔科",
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
    name: "胡利安·阿尔瓦雷斯",
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
    name: "利昂内尔·梅西",
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
    name: "乔瓦尼·洛塞尔索",
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
    name: "赫罗尼莫·鲁利",
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
    name: "克里斯蒂安·罗梅罗",
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
    name: "埃塞基耶尔·帕拉西奥斯",
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
    name: "尼古拉斯·冈萨雷斯",
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
    name: "蒂亚戈·阿尔马达",
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
    name: "朱利亚诺·西蒙尼",
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
    name: "尼科·帕斯",
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
    name: "尼古拉斯·奥塔门迪",
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
    name: "亚历克西斯·麦卡利斯特",
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
    name: "何塞·曼努埃尔·洛佩斯",
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
    name: "劳塔罗·马丁内斯",
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
    name: "埃米利亚诺·马丁内斯",
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
    name: "恩佐·费尔南德斯",
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
    name: "法昆多·梅迪纳",
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
    name: "纳韦尔·莫利纳",
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
    name: "亚历山大·希阿格尔",
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
    name: "大卫·阿夫夫埃恩格拉乌贝尔",
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
    name: "凯文·德恩索",
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
    name: "哈韦尔·希阿格尔",
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
    name: "斯特埃法恩·普奥斯克",
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
    name: "尼古拉斯·斯伊瓦尔德",
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
    name: "马尔科·阿尔恩奥特奥维奇",
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
    name: "大卫·阿拉布",
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
    name: "姆尔塞勒·萨布伊特泽尔",
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
    name: "弗洛里安·格拉伊尔勒伊特希",
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
    name: "迈克尔·格拉埃戈尔伊特希",
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
    name: "弗洛里安·瓦伊格莱",
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
    name: "普特尔伊克克·普埃恩特",
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
    name: "萨萨·卡勒德奇",
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
    name: "夫伊勒伊普普·勒伊恩哈阿尔特",
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
    name: "夫伊尔勒伊普普·姆埃内",
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
    name: "克尔恩埃·克瓦韦梅卡",
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
    name: "罗马诺·希伊德",
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
    name: "德贾恩·勒乌布奇奇",
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
    name: "克奥恩拉德·勒艾梅尔",
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
    name: "普特尔伊克克·瓦伊姆梅尔",
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
    name: "亚历山大·普罗阿斯斯",
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
    name: "姆尔科·弗朗伊德勒",
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
    name: "保罗·瓦恩内尔",
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
    name: "迈克尔·斯奥博达",
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
    name: "亚历山德罗·希奥普夫",
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
    name: "亚兹伊德·阿布乌勒艾拉",
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
    name: "穆罕默德·阿布·哈阿斯哈伊斯哈",
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
    name: "阿布德尔拉哈·纳西布",
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
    name: "胡萨姆·阿布·达哈布",
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
    name: "亚扎恩·阿尔阿拉布",
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
    name: "阿梅尔·贾姆乌斯",
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
    name: "穆罕默德·阿布·兹艾克",
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
    name: "恩乌尔·阿尔拉瓦布德哈",
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
    name: "阿里·奥尔瓦恩",
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
    name: "穆萨·阿尔特马里",
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
    name: "奥德哈·阿尔夫阿克哈乌里",
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
    name: "恩乌尔·布尼·阿特特亚哈",
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
    name: "马哈茂德·阿尔姆尔迪",
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
    name: "拉贾阿·艾德",
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
    name: "易卜拉欣·萨德哈",
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
    name: "莫·阿布乌尔纳迪",
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
    name: "萨利姆·奥布艾德",
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
    name: "穆罕默德·塔哈",
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
    name: "斯德·阿尔罗萨恩",
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
    name: "莫哈阿恩纳德·阿布·塔哈",
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
    name: "尼扎尔·阿尔尔阿斯哈阿恩",
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
    name: "阿布德尔拉哈·阿尔夫阿克哈乌里",
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
    name: "伊萨恩·哈阿德达德",
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
    name: "阿里·阿兹艾泽哈",
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
    name: "穆罕默德·阿尔达瓦乌德",
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
    name: "阿纳斯·布达维",
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
    name: "大卫·奥斯皮纳",
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
    name: "丹尼尔·穆诺兹",
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
    name: "贾奥恩·卢克乌米",
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
    name: "圣地亚哥·阿尔亚斯",
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
    name: "凯文·克斯塔诺",
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
    name: "理查德·里奥斯",
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
    name: "路易斯·迪亚斯",
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
    name: "豪尔赫·克尔尔阿斯卡勒",
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
    name: "贾奥恩·克奥尔多布",
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
    name: "哈梅斯·罗德里格斯",
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
    name: "约翰·阿里亚斯",
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
    name: "卡米洛·巴尔加斯",
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
    name: "伊尔尔伊·米纳",
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
    name: "古斯塔沃·普韦尔塔",
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
    name: "贾乌恩·普奥尔特伊尔拉",
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
    name: "贾埃夫费尔森·勒埃尔马",
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
    name: "约翰·莫吉卡",
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
    name: "瓦伊尔莱尔·德伊特塔",
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
    name: "克乌克霍·哈埃尔恩阿恩德兹",
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
    name: "贾乌恩·夫埃尔恩阿恩多·克伊恩特罗",
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
    name: "贾姆伊恩托恩·克姆帕兹",
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
    name: "德伊韦尔·姆克哈多",
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
    name: "达维恩森·桑切斯",
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
    name: "阿尔瓦罗·姆奥恩特罗",
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
    name: "路易斯·斯乌雷兹",
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
    name: "安德烈斯·戈麦斯",
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
    name: "勒约内勒·姆西",
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
    name: "阿罗恩·瓦恩·布伊斯萨卡",
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
    name: "斯特埃韦·卡普乌迪",
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
    name: "阿克塞尔·特乌恩泽贝",
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
    name: "德伊拉恩·布图布伊恩西卡",
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
    name: "恩阿勒·艾勒·穆克奥",
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
    name: "恩阿特哈恩阿勒·姆乌库",
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
    name: "萨姆韦勒·姆乌特乌斯萨姆伊",
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
    name: "布赖恩·西普埃恩加",
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
    name: "特埃·布奥恩格奥恩达",
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
    name: "格勒·卡库塔",
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
    name: "若里斯·克艾姆贝",
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
    name: "姆埃斯克克·埃勒亚",
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
    name: "诺亚·萨迪基",
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
    name: "阿罗恩·特伊博拉",
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
    name: "蒂莫西·夫阿卢",
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
    name: "克埃德尔奇·布克姆布乌",
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
    name: "夏尔·普伊克凯勒",
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
    name: "夫伊斯托恩·姆艾莱",
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
    name: "约内·瓦伊斯萨",
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
    name: "姆特特伊·埃波洛",
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
    name: "克恩塞勒·姆埃姆布",
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
    name: "西蒙·布恩扎",
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
    name: "格德埃恩·卡卢卢",
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
    name: "埃多·克艾姆贝",
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
    name: "阿图尔·马斯乌库",
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
    name: "迪奥戈·科斯塔",
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
    name: "内勒森·塞梅多",
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
    name: "鲁本·迪亚斯",
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
    name: "托马什·阿劳霍",
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
    name: "迪奥戈·达洛特",
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
    name: "马特乌斯·努内斯",
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
    name: "克里斯蒂亚诺·罗纳尔多",
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
    name: "布鲁诺·费尔南德斯",
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
    name: "贡萨洛·拉莫斯",
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
    name: "贝尔纳多·席尔瓦",
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
    name: "若昂·菲利克斯",
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
    name: "何塞·萨",
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
    name: "雷纳托·韦加",
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
    name: "贡萨洛·伊纳西奥",
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
    name: "若昂·内维斯",
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
    name: "弗朗阿恩克伊斯科·特罗伊恩克奥",
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
    name: "拉斐尔·莱奥",
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
    name: "佩德罗·内托",
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
    name: "贡萨洛·格埃德斯",
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
    name: "若昂·坎塞洛",
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
    name: "鲁本·内维斯",
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
    name: "尔维·席尔瓦",
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
    name: "维蒂尼亚",
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
    name: "萨穆·克奥斯塔",
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
    name: "努诺·门德斯",
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
    name: "弗朗西斯科·孔塞桑",
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
    name: "乌特基尔·尤苏波夫",
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
    name: "阿布杜科迪尔·克乌萨诺夫",
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
    name: "克奥贾亚克布尔·阿利若诺夫",
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
    name: "夫阿尔尔乌克哈·斯艾夫伊夫",
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
    name: "尔乌斯塔姆·阿斯哈乌尔马托夫",
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
    name: "阿克马勒·姆奥兹戈夫瓦",
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
    name: "奥塔贝克·希乌库罗夫",
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
    name: "贾阿姆希伊德·伊斯克恩德罗夫",
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
    name: "奥德伊尔若恩·哈阿姆罗贝科夫",
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
    name: "贾洛勒伊德迪恩·姆斯哈里波夫",
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
    name: "奥斯托恩·乌鲁诺夫",
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
    name: "阿布杜沃希德·内马托夫",
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
    name: "希埃尔佐德·恩阿斯尔乌尔勒夫",
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
    name: "埃尔多尔·希奥穆罗多夫",
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
    name: "乌马尔·埃斯哈乌罗多夫",
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
    name: "博蒂拉利·尔格斯赫夫",
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
    name: "德奥斯特奥恩贝克·克姆达莫夫",
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
    name: "阿布德乌尔拉·阿布德乌尔勒夫",
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
    name: "阿兹伊兹若恩·加恩伊夫",
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
    name: "阿兹伊兹贝克·阿莫诺夫",
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
    name: "伊戈尔·斯埃尔格伊夫",
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
    name: "阿布布奥斯贝克·夫艾兹乌尔勒夫",
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
    name: "希埃尔佐德·埃萨诺夫",
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
    name: "布埃克哈乌兹·卡里莫夫",
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
    name: "阿夫阿兹贝克·乌尔马萨勒伊夫",
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
    name: "贾阿克哈奥恩吉尔·乌罗佐夫",
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
    name: "多米尼克·利瓦科维奇",
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
    name: "若西普·斯特阿尼斯奇",
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
    name: "马里恩·普奥恩格拉阿克奇",
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
    name: "约什科·格瓦迪奥尔",
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
    name: "杜杰·卡莱塔·卡尔",
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
    name: "若西普·苏塔洛",
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
    name: "尼科拉·莫罗",
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
    name: "马特奥·科瓦契奇",
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
    name: "阿恩德拉埃贾·克拉阿马尔奇",
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
    name: "卢卡·莫德里奇",
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
    name: "阿恩特·布乌迪米尔",
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
    name: "伊沃尔·普恩杜尔",
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
    name: "尼科拉·夫阿斯奇",
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
    name: "伊万·佩里斯奇",
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
    name: "马尔约·帕萨勒奇",
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
    name: "马丁·布图里纳",
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
    name: "佩塔尔·苏克奇",
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
    name: "克拉伊斯蒂贾恩·贾克奇",
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
    name: "托尼·弗朗乌克",
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
    name: "伊戈尔·马塔恩奥维奇",
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
    name: "卢卡·苏克奇",
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
    name: "卢卡·夫乌斯克奥维奇",
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
    name: "多米尼克·科塔尔斯基",
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
    name: "姆尔科·帕萨勒奇",
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
    name: "马丁·尔勒奇",
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
    name: "佩塔尔·穆萨",
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
    name: "乔丹·皮克福德",
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
    name: "埃兹里·克奥恩萨",
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
    name: "尼科·奥尔伊尔勒伊",
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
    name: "德克兰·赖斯",
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
    name: "约翰·斯通斯",
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
    name: "马克·格埃希",
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
    name: "布卡约·萨卡",
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
    name: "埃利奥特·阿恩德尔森",
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
    name: "哈里·凯恩",
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
    name: "裘德·贝林厄姆",
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
    name: "马库斯·拉什福德",
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
    name: "蒂诺·勒伊拉姆埃恩托",
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
    name: "迪恩·亨德森",
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
    name: "乔丹·亨德森",
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
    name: "达恩·布乌尔恩",
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
    name: "克奥布布伊·姆艾恩乌",
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
    name: "姆奥尔加恩·罗格埃尔斯",
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
    name: "安东尼·戈登",
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
    name: "奥利·沃特金斯",
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
    name: "诺尼·马杜埃凯",
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
    name: "埃贝雷奇·埃泽",
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
    name: "伊万·托尼",
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
    name: "詹姆斯·特罗阿夫夫奥尔德",
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
    name: "里斯·詹姆斯",
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
    name: "德埃德·斯普埃恩塞",
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
    name: "贾雷尔·宽萨",
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
    name: "劳伦斯·阿蒂·齐吉",
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
    name: "阿利杜·斯伊杜",
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
    name: "卡莱布·伊尔埃恩克伊",
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
    name: "若纳斯·阿德杰特埃",
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
    name: "托马斯·帕尔特伊",
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
    name: "阿卜杜勒·穆米恩",
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
    name: "阿卜杜勒·法塔瓦乌",
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
    name: "克西·西博",
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
    name: "乔丹·艾瓦",
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
    name: "布尔阿恩多恩·托马斯·阿斯恩特",
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
    name: "阿恩特瓦内·塞梅恩约",
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
    name: "约瑟夫·阿恩阿恩格",
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
    name: "克伊斯特奥普赫尔·布奥恩苏·布哈",
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
    name: "吉德埃恩·姆埃恩萨哈",
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
    name: "埃勒伊斯哈·奥瓦乌苏",
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
    name: "本杰明·阿萨雷",
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
    name: "阿卜杜勒·尔阿马恩·布布",
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
    name: "杰罗梅·奥波库",
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
    name: "伊纳基·威廉斯",
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
    name: "奥格乌斯蒂内·布奥克伊",
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
    name: "科若·普埃普拉哈·奥普普奥恩格",
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
    name: "卡姆尔德伊恩·苏莱马纳",
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
    name: "德埃尔尔伊克克·勒乌克卡斯森",
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
    name: "尔恩埃斯特·恩乌马哈",
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
    name: "普罗伊恩塞·克贝纳·阿杜",
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
    name: "姆尔维恩·塞恩阿",
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
    name: "路易斯·梅贾亚",
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
    name: "塞萨尔·布尔阿克克恩",
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
    name: "何塞·克奥尔多布",
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
    name: "菲德勒·埃斯科布尔",
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
    name: "埃德格尔多·法里纳",
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
    name: "克里斯蒂安·马丁内斯",
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
    name: "何塞·路易斯·罗德里格斯",
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
    name: "阿德尔布埃尔托·克尔尔阿斯克伊尔拉",
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
    name: "托马什·罗德里格斯",
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
    name: "伊斯梅尔·迪亚斯",
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
    name: "伊勒·布尔塞纳斯",
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
    name: "塞萨尔·萨穆德约",
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
    name: "贾约瓦恩伊·拉莫斯",
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
    name: "卡洛斯·哈阿尔夫埃",
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
    name: "埃里克·达维斯",
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
    name: "安德烈斯·阿恩德拉阿德",
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
    name: "何塞·法贾阿尔多",
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
    name: "塞西勒约·沃特曼",
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
    name: "阿尔布埃尔托·克伊恩特罗",
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
    name: "阿尼布勒·戈德瓦",
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
    name: "塞萨尔·亚尼斯",
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
    name: "奥尔勒恩多·姆奥斯克埃拉",
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
    name: "迈克尔·阿米尔·穆尔伊尔洛",
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
    name: "阿扎尔亚斯·勒奥恩多诺",
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
    name: "罗德尔伊克克·姆伊尔莱尔",
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
    name: "豪尔赫·格乌特伊尔雷兹",
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
