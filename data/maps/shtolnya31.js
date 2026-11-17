// Автоматически сохранено из редактора Штольни
// Подключите через <script src="dungeon.js"> перед основным скриптом.
window.DUNGEON_CONFIG = {
  "$schema": "shtolnya-dungeon-v1",
  "version": 1,
  "name": "Штольня — Стандартная шахта",
  "world": {
    "size": {
      "x": 109,
      "y": 72,
      "z": 144
    },
    "tunnelHeight": 3,
    "tunnelStyles": {
      "main": {
        "floorWidth": 2.8,
        "ceilWidth": 2
      },
      "branch": {
        "floorWidth": 2.2,
        "ceilWidth": 1.5
      }
    },
    "shaftSize": 2
  },
  "physics": {
    "playerRadius": 0.32,
    "playerHeight": 1.7,
    "playerEye": 1.6,
    "stepHeight": 1.05,
    "walkSpeed": 4.2,
    "runSpeed": 7,
    "gravity": 20,
    "jumpVelocity": 8.5,
    "climbSpeed": 3.2
  },
  "radiation": {
    "criticalDose": 100,
    "doseFactor": 0.0022,
    "recoverRate": 3,
    "backgroundBase": 0.15,
    "backgroundPerMeter": 0.04,
    "recoverThreshold": 0.8
  },
  "ore": {
    "pickupRadius": 1.5,
    "maxItems": 90
  },
  "textures": {
    "concrete": {
      "generator": "concreteSmooth",
      "params": {
        "size": 128,
        "baseColor": "#8a8781",
        "noiseCount": 4200,
        "noiseVariance": 46,
        "pitCount": 22,
        "stainCount": 5,
        "edgeColor": "rgba(38,34,28,0.75)",
        "edgeWidth": 5,
        "innerEdgeColor": "rgba(190,186,178,0.35)",
        "innerEdgeWidth": 1.5,
        "blotchCount": 16,
        "blotchVariance": 30,
        "dirtColor": "#5c4230",
        "stoneColor": "#8c8880",
        "stoneCount": 18,
        "stoneMinR": 4,
        "stoneMaxR": 16
      }
    }
  },
  "materials": {
    "uranium": {
      "color": "#9ec49a",
      "emissive": "#1e5c1e",
      "emissiveIntensity": 0.85
    },
    "crystal": {
      "color": "#123a16",
      "emissive": "#59ff7d",
      "emissiveIntensity": 1
    }
  },
  "levels": [
    {
      "id": 0,
      "y": 64,
      "name": "Горизонт 0"
    },
    {
      "id": 1,
      "y": 52,
      "name": "Горизонт -12 м"
    },
    {
      "id": 2,
      "y": 40,
      "name": "Горизонт -24 м"
    }
  ],
  "start": {
    "level": 0,
    "at": [
      92,
      117
    ],
    "yaw": 1.585
  },
  "tunnels": [
    {
      "id": "L1_ew",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        10,
        89
      ],
      "to": [
        86,
        89
      ]
    },
    {
      "id": "L1_ns",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        48,
        51
      ],
      "to": [
        48,
        127
      ]
    },
    {
      "id": "L1_loopN",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        24,
        65
      ],
      "to": [
        72,
        65
      ]
    },
    {
      "id": "L1_loopS",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        24,
        113
      ],
      "to": [
        72,
        113
      ]
    },
    {
      "id": "L1_loopW",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        24,
        65
      ],
      "to": [
        24,
        113
      ]
    },
    {
      "id": "L1_loopE",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        72,
        65
      ],
      "to": [
        72,
        113
      ]
    },
    {
      "id": "L1_dead",
      "level": 1,
      "style": "branch",
      "rails": false,
      "from": [
        72,
        113
      ],
      "to": [
        72,
        125
      ]
    },
    {
      "id": "L2_ew",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        10,
        89
      ],
      "to": [
        86,
        89
      ]
    },
    {
      "id": "L2_ns",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        48,
        51
      ],
      "to": [
        48,
        127
      ]
    },
    {
      "id": "L2_loopN",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        24,
        65
      ],
      "to": [
        72,
        65
      ]
    },
    {
      "id": "L2_loopS",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        24,
        113
      ],
      "to": [
        72,
        113
      ]
    },
    {
      "id": "L2_loopW",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        24,
        65
      ],
      "to": [
        24,
        111
      ]
    },
    {
      "id": "L2_loopE",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        72,
        65
      ],
      "to": [
        72,
        113
      ]
    },
    {
      "id": "L2_dead",
      "level": 2,
      "style": "branch",
      "rails": false,
      "from": [
        24,
        113
      ],
      "to": [
        12,
        113
      ]
    },
    {
      "id": "t0",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        61,
        45
      ],
      "to": [
        48,
        51
      ]
    },
    {
      "id": "t1",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        61,
        136
      ],
      "to": [
        61,
        8
      ]
    },
    {
      "id": "t2",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        61,
        117
      ],
      "to": [
        92,
        117
      ]
    },
    {
      "id": "t3",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        61,
        79
      ],
      "to": [
        68,
        79
      ]
    },
    {
      "id": "t4",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        61,
        15
      ],
      "to": [
        66,
        15
      ]
    },
    {
      "id": "t5",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        61,
        133
      ],
      "to": [
        92,
        133
      ]
    },
    {
      "id": "t6",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        61,
        105
      ],
      "to": [
        24,
        73
      ]
    },
    {
      "id": "t7",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        24,
        72
      ],
      "to": [
        24,
        61
      ]
    },
    {
      "id": "t8",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        24,
        61
      ],
      "to": [
        61,
        45
      ]
    },
    {
      "id": "t9",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        80,
        116
      ],
      "to": [
        80,
        100
      ]
    },
    {
      "id": "t11",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        76,
        132
      ],
      "to": [
        76,
        124
      ]
    }
  ],
  "junctions": [
    {
      "id": "L1_j_c",
      "level": 1,
      "at": [
        48,
        89
      ],
      "style": "main"
    },
    {
      "id": "L1_j_nw",
      "level": 1,
      "at": [
        24,
        65
      ],
      "style": "main"
    },
    {
      "id": "L1_j_ne",
      "level": 1,
      "at": [
        72,
        65
      ],
      "style": "main"
    },
    {
      "id": "L1_j_sw",
      "level": 1,
      "at": [
        24,
        113
      ],
      "style": "main"
    },
    {
      "id": "L1_j_se",
      "level": 1,
      "at": [
        72,
        113
      ],
      "style": "main"
    },
    {
      "id": "L1_j_n",
      "level": 1,
      "at": [
        48,
        65
      ],
      "style": "main"
    },
    {
      "id": "L1_j_s",
      "level": 1,
      "at": [
        48,
        113
      ],
      "style": "main"
    },
    {
      "id": "L1_j_w",
      "level": 1,
      "at": [
        24,
        89
      ],
      "style": "main"
    },
    {
      "id": "L1_j_e",
      "level": 1,
      "at": [
        72,
        89
      ],
      "style": "main"
    },
    {
      "id": "L2_j_c",
      "level": 2,
      "at": [
        48,
        89
      ],
      "style": "main"
    },
    {
      "id": "L2_j_nw",
      "level": 2,
      "at": [
        24,
        65
      ],
      "style": "main"
    },
    {
      "id": "L2_j_ne",
      "level": 2,
      "at": [
        72,
        65
      ],
      "style": "main"
    },
    {
      "id": "L2_j_sw",
      "level": 2,
      "at": [
        24,
        113
      ],
      "style": "main"
    },
    {
      "id": "L2_j_se",
      "level": 2,
      "at": [
        72,
        113
      ],
      "style": "main"
    },
    {
      "id": "L2_j_n",
      "level": 2,
      "at": [
        48,
        65
      ],
      "style": "main"
    },
    {
      "id": "L2_j_s",
      "level": 2,
      "at": [
        48,
        113
      ],
      "style": "main"
    },
    {
      "id": "L2_j_w",
      "level": 2,
      "at": [
        24,
        89
      ],
      "style": "main"
    },
    {
      "id": "L2_j_e",
      "level": 2,
      "at": [
        72,
        89
      ],
      "style": "main"
    },
    {
      "id": "j1",
      "level": 0,
      "at": [
        87,
        117
      ],
      "style": "main"
    }
  ],
  "rooms": [
    {
      "id": "L1_r0",
      "level": 1,
      "center": [
        66,
        86
      ],
      "size": [
        6,
        6
      ],
      "height": 4,
      "name": "Электроподстанция"
    },
    {
      "id": "L2_r0",
      "level": 2,
      "center": [
        30,
        92
      ],
      "size": [
        6,
        6
      ],
      "height": 4,
      "name": "Диспетчерская"
    },
    {
      "id": "r0",
      "level": 0,
      "center": [
        71,
        87
      ],
      "size": [
        8,
        20
      ],
      "height": 4,
      "name": "Аккумуляторная"
    },
    {
      "id": "r1",
      "level": 0,
      "center": [
        83,
        16
      ],
      "size": [
        35,
        8
      ],
      "height": 4,
      "name": "Столовая"
    }
  ],
  "shafts": [
    {
      "id": "sh_L1_L2",
      "fromLevel": 1,
      "toLevel": 2,
      "at": [
        60,
        89
      ],
      "withLadder": true,
      "label": "Шахта 2 — лестница"
    },
    {
      "id": "sh0",
      "fromLevel": 0,
      "toLevel": 1,
      "at": [
        61,
        45
      ],
      "withLadder": true,
      "label": "Новая шахта"
    },
    {
      "id": "sh1",
      "fromLevel": 1,
      "toLevel": 2,
      "at": [
        24,
        89
      ],
      "withLadder": false,
      "label": "Восстающий"
    }
  ],
  "oreSources": [
    {
      "id": "o_L1a",
      "level": 1,
      "at": [
        66,
        84
      ],
      "radius": 1.5,
      "strength": 1700
    },
    {
      "id": "o_L1b",
      "level": 1,
      "at": [
        52,
        65
      ],
      "radius": 1.5,
      "strength": 1550
    },
    {
      "id": "o_L2a",
      "level": 2,
      "at": [
        32,
        94
      ],
      "radius": 1.5,
      "strength": 1750
    },
    {
      "id": "o_L2b",
      "level": 2,
      "at": [
        72,
        113
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o0",
      "level": 0,
      "at": [
        73,
        96
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o1",
      "level": 0,
      "at": [
        96,
        19
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o2",
      "level": 0,
      "at": [
        98,
        13
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o3",
      "level": 0,
      "at": [
        37,
        85
      ],
      "radius": 1.5,
      "strength": 1600
    }
  ],
  "carts": [
    {
      "id": "c_L1",
      "level": 1,
      "at": [
        66.5,
        89.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c_L2",
      "level": 2,
      "at": [
        48.5,
        101.5
      ],
      "yaw": 1.5708,
      "ore": true
    },
    {
      "id": "c0",
      "level": 0,
      "at": [
        70.5,
        19.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c1",
      "level": 0,
      "at": [
        73.5,
        19.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c2",
      "level": 0,
      "at": [
        76.5,
        19.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c3",
      "level": 0,
      "at": [
        80.5,
        19.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c4",
      "level": 0,
      "at": [
        83.5,
        19.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c5",
      "level": 0,
      "at": [
        88.5,
        19.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c6",
      "level": 0,
      "at": [
        75.5,
        12.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c7",
      "level": 0,
      "at": [
        85.5,
        12.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c8",
      "level": 0,
      "at": [
        80.5,
        100.5
      ],
      "yaw": 0,
      "ore": false
    }
  ],
  "signs": [
    {
      "id": "sg0",
      "level": 0,
      "at": [
        87,
        116
      ],
      "height": 2,
      "text": "Штольня 31",
      "face": [
        0,
        0
      ],
      "bgColor": "#2a2c25",
      "borderColor": "#ffab1a",
      "textColor": "#ece8ce",
      "size": 1.5
    }
  ]
};
