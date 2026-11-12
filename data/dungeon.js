// Автоматически сохранено из редактора Штольни
// Подключите через <script src="dungeon.js"> перед основным скриптом.
window.DUNGEON_CONFIG = {
  "$schema": "shtolnya-dungeon-v1",
  "version": 1,
  "name": "Штольня — Стандартная шахта",
  "world": {
    "size": {
      "x": 96,
      "y": 72,
      "z": 96
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
      "generator": "concrete",
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
        "innerEdgeWidth": 1.5
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
    },
    {
      "id": 3,
      "y": 28,
      "name": "Горизонт -36 м"
    },
    {
      "id": 4,
      "y": 16,
      "name": "Горизонт -48 м"
    }
  ],
  "start": {
    "level": 0,
    "at": [
      92,
      76
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
        48
      ],
      "to": [
        86,
        48
      ]
    },
    {
      "id": "L1_ns",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        48,
        10
      ],
      "to": [
        48,
        86
      ]
    },
    {
      "id": "L1_loopN",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        24,
        24
      ],
      "to": [
        72,
        24
      ]
    },
    {
      "id": "L1_loopS",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        24,
        72
      ],
      "to": [
        72,
        72
      ]
    },
    {
      "id": "L1_loopW",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        24,
        24
      ],
      "to": [
        24,
        72
      ]
    },
    {
      "id": "L1_loopE",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        72,
        24
      ],
      "to": [
        72,
        72
      ]
    },
    {
      "id": "L1_dead",
      "level": 1,
      "style": "branch",
      "rails": false,
      "from": [
        72,
        72
      ],
      "to": [
        72,
        84
      ]
    },
    {
      "id": "L2_ew",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        10,
        48
      ],
      "to": [
        86,
        48
      ]
    },
    {
      "id": "L2_ns",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        48,
        10
      ],
      "to": [
        48,
        86
      ]
    },
    {
      "id": "L2_loopN",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        24,
        24
      ],
      "to": [
        72,
        24
      ]
    },
    {
      "id": "L2_loopS",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        24,
        72
      ],
      "to": [
        72,
        72
      ]
    },
    {
      "id": "L2_loopW",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        24,
        24
      ],
      "to": [
        24,
        72
      ]
    },
    {
      "id": "L2_loopE",
      "level": 2,
      "style": "main",
      "rails": true,
      "from": [
        72,
        24
      ],
      "to": [
        72,
        72
      ]
    },
    {
      "id": "L2_dead",
      "level": 2,
      "style": "branch",
      "rails": false,
      "from": [
        24,
        72
      ],
      "to": [
        12,
        72
      ]
    },
    {
      "id": "L3_ew",
      "level": 3,
      "style": "main",
      "rails": true,
      "from": [
        10,
        48
      ],
      "to": [
        86,
        48
      ]
    },
    {
      "id": "L3_ns",
      "level": 3,
      "style": "main",
      "rails": true,
      "from": [
        48,
        10
      ],
      "to": [
        48,
        86
      ]
    },
    {
      "id": "L3_loopN",
      "level": 3,
      "style": "main",
      "rails": true,
      "from": [
        24,
        24
      ],
      "to": [
        72,
        24
      ]
    },
    {
      "id": "L3_loopS",
      "level": 3,
      "style": "main",
      "rails": true,
      "from": [
        24,
        72
      ],
      "to": [
        72,
        72
      ]
    },
    {
      "id": "L3_loopW",
      "level": 3,
      "style": "main",
      "rails": true,
      "from": [
        24,
        24
      ],
      "to": [
        24,
        72
      ]
    },
    {
      "id": "L3_loopE",
      "level": 3,
      "style": "main",
      "rails": true,
      "from": [
        72,
        24
      ],
      "to": [
        72,
        72
      ]
    },
    {
      "id": "L3_dead",
      "level": 3,
      "style": "branch",
      "rails": false,
      "from": [
        72,
        24
      ],
      "to": [
        84,
        24
      ]
    },
    {
      "id": "L4_ew",
      "level": 4,
      "style": "main",
      "rails": true,
      "from": [
        10,
        48
      ],
      "to": [
        86,
        48
      ]
    },
    {
      "id": "L4_ns",
      "level": 4,
      "style": "main",
      "rails": true,
      "from": [
        48,
        10
      ],
      "to": [
        48,
        86
      ]
    },
    {
      "id": "L4_loopN",
      "level": 4,
      "style": "main",
      "rails": true,
      "from": [
        24,
        24
      ],
      "to": [
        72,
        24
      ]
    },
    {
      "id": "L4_loopS",
      "level": 4,
      "style": "main",
      "rails": true,
      "from": [
        24,
        72
      ],
      "to": [
        72,
        72
      ]
    },
    {
      "id": "L4_loopW",
      "level": 4,
      "style": "main",
      "rails": true,
      "from": [
        24,
        24
      ],
      "to": [
        24,
        72
      ]
    },
    {
      "id": "L4_loopE",
      "level": 4,
      "style": "main",
      "rails": true,
      "from": [
        72,
        24
      ],
      "to": [
        72,
        72
      ]
    },
    {
      "id": "L4_dead",
      "level": 4,
      "style": "branch",
      "rails": false,
      "from": [
        72,
        72
      ],
      "to": [
        72,
        84
      ]
    },
    {
      "id": "t0",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        61,
        4
      ],
      "to": [
        48,
        10
      ]
    },
    {
      "id": "t1",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        61,
        95
      ],
      "to": [
        61,
        -33
      ]
    },
    {
      "id": "t2",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        61,
        76
      ],
      "to": [
        92,
        76
      ]
    },
    {
      "id": "t3",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        61,
        38
      ],
      "to": [
        68,
        38
      ]
    },
    {
      "id": "t4",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        61,
        -26
      ],
      "to": [
        66,
        -26
      ]
    },
    {
      "id": "t5",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        61,
        92
      ],
      "to": [
        92,
        92
      ]
    },
    {
      "id": "t6",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        61,
        64
      ],
      "to": [
        24,
        32
      ]
    },
    {
      "id": "t7",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        24,
        31
      ],
      "to": [
        24,
        20
      ]
    },
    {
      "id": "t8",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        24,
        20
      ],
      "to": [
        61,
        4
      ]
    }
  ],
  "junctions": [
    {
      "id": "L1_j_c",
      "level": 1,
      "at": [
        48,
        48
      ],
      "style": "main"
    },
    {
      "id": "L1_j_nw",
      "level": 1,
      "at": [
        24,
        24
      ],
      "style": "main"
    },
    {
      "id": "L1_j_ne",
      "level": 1,
      "at": [
        72,
        24
      ],
      "style": "main"
    },
    {
      "id": "L1_j_sw",
      "level": 1,
      "at": [
        24,
        72
      ],
      "style": "main"
    },
    {
      "id": "L1_j_se",
      "level": 1,
      "at": [
        72,
        72
      ],
      "style": "main"
    },
    {
      "id": "L1_j_n",
      "level": 1,
      "at": [
        48,
        24
      ],
      "style": "main"
    },
    {
      "id": "L1_j_s",
      "level": 1,
      "at": [
        48,
        72
      ],
      "style": "main"
    },
    {
      "id": "L1_j_w",
      "level": 1,
      "at": [
        24,
        48
      ],
      "style": "main"
    },
    {
      "id": "L1_j_e",
      "level": 1,
      "at": [
        72,
        48
      ],
      "style": "main"
    },
    {
      "id": "L2_j_c",
      "level": 2,
      "at": [
        48,
        48
      ],
      "style": "main"
    },
    {
      "id": "L2_j_nw",
      "level": 2,
      "at": [
        24,
        24
      ],
      "style": "main"
    },
    {
      "id": "L2_j_ne",
      "level": 2,
      "at": [
        72,
        24
      ],
      "style": "main"
    },
    {
      "id": "L2_j_sw",
      "level": 2,
      "at": [
        24,
        72
      ],
      "style": "main"
    },
    {
      "id": "L2_j_se",
      "level": 2,
      "at": [
        72,
        72
      ],
      "style": "main"
    },
    {
      "id": "L2_j_n",
      "level": 2,
      "at": [
        48,
        24
      ],
      "style": "main"
    },
    {
      "id": "L2_j_s",
      "level": 2,
      "at": [
        48,
        72
      ],
      "style": "main"
    },
    {
      "id": "L2_j_w",
      "level": 2,
      "at": [
        24,
        48
      ],
      "style": "main"
    },
    {
      "id": "L2_j_e",
      "level": 2,
      "at": [
        72,
        48
      ],
      "style": "main"
    },
    {
      "id": "L3_j_c",
      "level": 3,
      "at": [
        48,
        48
      ],
      "style": "main"
    },
    {
      "id": "L3_j_nw",
      "level": 3,
      "at": [
        24,
        24
      ],
      "style": "main"
    },
    {
      "id": "L3_j_ne",
      "level": 3,
      "at": [
        72,
        24
      ],
      "style": "main"
    },
    {
      "id": "L3_j_sw",
      "level": 3,
      "at": [
        24,
        72
      ],
      "style": "main"
    },
    {
      "id": "L3_j_se",
      "level": 3,
      "at": [
        72,
        72
      ],
      "style": "main"
    },
    {
      "id": "L3_j_n",
      "level": 3,
      "at": [
        48,
        24
      ],
      "style": "main"
    },
    {
      "id": "L3_j_s",
      "level": 3,
      "at": [
        48,
        72
      ],
      "style": "main"
    },
    {
      "id": "L3_j_w",
      "level": 3,
      "at": [
        24,
        48
      ],
      "style": "main"
    },
    {
      "id": "L3_j_e",
      "level": 3,
      "at": [
        72,
        48
      ],
      "style": "main"
    },
    {
      "id": "L4_j_c",
      "level": 4,
      "at": [
        48,
        48
      ],
      "style": "main"
    },
    {
      "id": "L4_j_nw",
      "level": 4,
      "at": [
        24,
        24
      ],
      "style": "main"
    },
    {
      "id": "L4_j_ne",
      "level": 4,
      "at": [
        72,
        24
      ],
      "style": "main"
    },
    {
      "id": "L4_j_sw",
      "level": 4,
      "at": [
        24,
        72
      ],
      "style": "main"
    },
    {
      "id": "L4_j_se",
      "level": 4,
      "at": [
        72,
        72
      ],
      "style": "main"
    },
    {
      "id": "L4_j_n",
      "level": 4,
      "at": [
        48,
        24
      ],
      "style": "main"
    },
    {
      "id": "L4_j_s",
      "level": 4,
      "at": [
        48,
        72
      ],
      "style": "main"
    },
    {
      "id": "L4_j_w",
      "level": 4,
      "at": [
        24,
        48
      ],
      "style": "main"
    },
    {
      "id": "L4_j_e",
      "level": 4,
      "at": [
        72,
        48
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
        45
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
        51
      ],
      "size": [
        6,
        6
      ],
      "height": 4,
      "name": "Диспетчерская"
    },
    {
      "id": "L3_r0",
      "level": 3,
      "center": [
        66,
        45
      ],
      "size": [
        6,
        6
      ],
      "height": 4,
      "name": "Медпункт"
    },
    {
      "id": "L4_r0",
      "level": 4,
      "center": [
        30,
        51
      ],
      "size": [
        6,
        6
      ],
      "height": 4,
      "name": "Склад ГСМ"
    },
    {
      "id": "r0",
      "level": 0,
      "center": [
        71,
        46
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
        -25
      ],
      "size": [
        35,
        8
      ],
      "height": 4,
      "name": "Новая камера"
    }
  ],
  "shafts": [
    {
      "id": "sh_L1_L2",
      "fromLevel": 1,
      "toLevel": 2,
      "at": [
        60,
        48
      ],
      "withLadder": true,
      "label": "Шахта 2 — лестница"
    },
    {
      "id": "sh_L2_L3",
      "fromLevel": 2,
      "toLevel": 3,
      "at": [
        48,
        60
      ],
      "withLadder": true,
      "label": "Шахта 3 — лестница"
    },
    {
      "id": "sh_L2_L3b",
      "fromLevel": 2,
      "toLevel": 3,
      "at": [
        24,
        48
      ],
      "withLadder": false,
      "label": "Шахта 3 — ОСТОРОЖНО"
    },
    {
      "id": "sh_L3_L4",
      "fromLevel": 3,
      "toLevel": 4,
      "at": [
        48,
        30
      ],
      "withLadder": true,
      "label": "Шахта 4 — лестница"
    },
    {
      "id": "sh0",
      "fromLevel": 0,
      "toLevel": 1,
      "at": [
        61,
        4
      ],
      "withLadder": true,
      "label": "Новая шахта"
    }
  ],
  "oreSources": [
    {
      "id": "o_L1a",
      "level": 1,
      "at": [
        66,
        41
      ],
      "radius": 1.5,
      "strength": 1700
    },
    {
      "id": "o_L1b",
      "level": 1,
      "at": [
        51,
        26
      ],
      "radius": 1.5,
      "strength": 1550
    },
    {
      "id": "o_L2a",
      "level": 2,
      "at": [
        30,
        55
      ],
      "radius": 1.5,
      "strength": 1750
    },
    {
      "id": "o_L2b",
      "level": 2,
      "at": [
        74,
        74
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o_L3a",
      "level": 3,
      "at": [
        66,
        41
      ],
      "radius": 1.5,
      "strength": 1800
    },
    {
      "id": "o_L3b",
      "level": 3,
      "at": [
        26,
        74
      ],
      "radius": 1.5,
      "strength": 1650
    },
    {
      "id": "o_L4a",
      "level": 4,
      "at": [
        30,
        55
      ],
      "radius": 1.5,
      "strength": 1900
    },
    {
      "id": "o_L4b",
      "level": 4,
      "at": [
        50,
        52
      ],
      "radius": 1.5,
      "strength": 1750
    },
    {
      "id": "o0",
      "level": 0,
      "at": [
        73,
        56
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o1",
      "level": 0,
      "at": [
        96,
        -21
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o2",
      "level": 0,
      "at": [
        98,
        -28
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o3",
      "level": 0,
      "at": [
        36,
        44
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
        48.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c_L2",
      "level": 2,
      "at": [
        48.5,
        60.5
      ],
      "yaw": 1.5708,
      "ore": true
    },
    {
      "id": "c_L3",
      "level": 3,
      "at": [
        48.5,
        30.5
      ],
      "yaw": 1.5708,
      "ore": false
    },
    {
      "id": "c_L4",
      "level": 4,
      "at": [
        72.5,
        48.5
      ],
      "yaw": 0,
      "ore": true
    },
    {
      "id": "c0",
      "level": 0,
      "at": [
        70.5,
        -21.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c1",
      "level": 0,
      "at": [
        73.5,
        -21.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c2",
      "level": 0,
      "at": [
        76.5,
        -21.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c3",
      "level": 0,
      "at": [
        80.5,
        -21.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c4",
      "level": 0,
      "at": [
        83.5,
        -21.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c5",
      "level": 0,
      "at": [
        88.5,
        -21.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c6",
      "level": 0,
      "at": [
        75.5,
        -28.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c7",
      "level": 0,
      "at": [
        85.5,
        -28.5
      ],
      "yaw": 0,
      "ore": false
    }
  ]
};
