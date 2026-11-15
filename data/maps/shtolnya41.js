// Автоматически сохранено из редактора Штольни
// Подключите через <script src="dungeon.js"> перед основным скриптом.
window.DUNGEON_CONFIG = {
  "$schema": "shtolnya-dungeon-v1",
  "version": 1,
  "name": "Штольня — Стандартная шахта",
  "world": {
    "size": {
      "x": 163,
      "y": 72,
      "z": 220
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
        "baseColor": "#ddd3c0",
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
      "name": "Горизонт 1"
    }
  ],
  "start": {
    "level": 0,
    "at": [
      155,
      7
    ],
    "yaw": 1.585
  },
  "tunnels": [
    {
      "id": "t6",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        107,
        8
      ],
      "to": [
        80,
        24
      ]
    },
    {
      "id": "t7",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        80,
        24
      ],
      "to": [
        80,
        109
      ]
    },
    {
      "id": "t8",
      "level": 0,
      "style": "main",
      "rails": true,
      "from": [
        80,
        40
      ],
      "to": [
        112,
        40
      ]
    },
    {
      "id": "t9",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        80,
        64
      ],
      "to": [
        139,
        64
      ]
    },
    {
      "id": "t10",
      "level": 0,
      "style": "branch",
      "rails": false,
      "from": [
        112,
        20
      ],
      "to": [
        112,
        56
      ]
    },
    {
      "id": "t11",
      "level": 0,
      "style": "branch",
      "rails": false,
      "from": [
        139,
        20
      ],
      "to": [
        139,
        76
      ]
    },
    {
      "id": "t12",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        77,
        112
      ],
      "to": [
        36,
        112
      ]
    },
    {
      "id": "t13",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        36,
        112
      ],
      "to": [
        8,
        141
      ]
    },
    {
      "id": "t14",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        8,
        141
      ],
      "to": [
        8,
        212
      ]
    },
    {
      "id": "t15",
      "level": 0,
      "style": "branch",
      "rails": false,
      "from": [
        4,
        212
      ],
      "to": [
        20,
        212
      ]
    },
    {
      "id": "t16",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        8,
        164
      ],
      "to": [
        64,
        164
      ]
    },
    {
      "id": "t17",
      "level": 0,
      "style": "main",
      "rails": false,
      "from": [
        8,
        184
      ],
      "to": [
        64,
        184
      ]
    },
    {
      "id": "t18",
      "level": 0,
      "style": "branch",
      "rails": false,
      "from": [
        64,
        148
      ],
      "to": [
        64,
        196
      ]
    },
    {
      "id": "t19",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        80,
        136
      ],
      "to": [
        80,
        100
      ]
    },
    {
      "id": "t20",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        52,
        112
      ],
      "to": [
        105,
        112
      ]
    },
    {
      "id": "t21",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        52,
        84
      ],
      "to": [
        52,
        156
      ]
    },
    {
      "id": "t22",
      "level": 1,
      "style": "main",
      "rails": true,
      "from": [
        105,
        112
      ],
      "to": [
        100,
        52
      ]
    }
  ],
  "junctions": [],
  "rooms": [
    {
      "id": "r0",
      "level": 0,
      "center": [
        131,
        7
      ],
      "size": [
        50,
        6
      ],
      "height": 4,
      "name": "Штольня 41"
    },
    {
      "id": "r1",
      "level": 1,
      "center": [
        80,
        161
      ],
      "size": [
        20,
        50
      ],
      "height": 15,
      "name": "Рудосброс"
    },
    {
      "id": "r2",
      "level": 0,
      "center": [
        80,
        112
      ],
      "size": [
        6,
        6
      ],
      "height": 20,
      "name": "Вентиляционная шахта"
    }
  ],
  "shafts": [
    {
      "id": "sh0",
      "fromLevel": 0,
      "toLevel": 0,
      "at": [
        80,
        112
      ],
      "withLadder": true,
      "label": "Новая шахта"
    },
    {
      "id": "sh1",
      "fromLevel": 1,
      "toLevel": 1,
      "at": [
        80,
        112
      ],
      "withLadder": true,
      "label": "Новая шахта"
    }
  ],
  "oreSources": [
    {
      "id": "o0",
      "level": 1,
      "at": [
        86,
        186
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o1",
      "level": 1,
      "at": [
        52,
        156
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o2",
      "level": 0,
      "at": [
        140,
        40
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o3",
      "level": 0,
      "at": [
        16,
        212
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o4",
      "level": 0,
      "at": [
        80,
        32
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o5",
      "level": 0,
      "at": [
        81,
        36
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o6",
      "level": 0,
      "at": [
        81,
        36
      ],
      "radius": 1.5,
      "strength": 1600
    },
    {
      "id": "o8",
      "level": 0,
      "at": [
        79,
        28
      ],
      "radius": 1.5,
      "strength": 1600
    }
  ],
  "carts": [
    {
      "id": "c0",
      "level": 1,
      "at": [
        72.5,
        144.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c1",
      "level": 1,
      "at": [
        72.5,
        152.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c2",
      "level": 1,
      "at": [
        72.5,
        160.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c3",
      "level": 1,
      "at": [
        72.5,
        172.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c4",
      "level": 1,
      "at": [
        72.5,
        180.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c5",
      "level": 1,
      "at": [
        80.5,
        152.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c6",
      "level": 1,
      "at": [
        80.5,
        168.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c7",
      "level": 1,
      "at": [
        80.5,
        184.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c8",
      "level": 1,
      "at": [
        88.5,
        140.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c9",
      "level": 1,
      "at": [
        88.5,
        142.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c10",
      "level": 1,
      "at": [
        88.5,
        144.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c11",
      "level": 1,
      "at": [
        88.5,
        160.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c12",
      "level": 1,
      "at": [
        88.5,
        162.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c13",
      "level": 1,
      "at": [
        89.5,
        164.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c14",
      "level": 1,
      "at": [
        88.5,
        166.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c15",
      "level": 1,
      "at": [
        88.5,
        168.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c16",
      "level": 1,
      "at": [
        88.5,
        171.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c17",
      "level": 1,
      "at": [
        84.5,
        180.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c18",
      "level": 1,
      "at": [
        51.5,
        152.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c19",
      "level": 1,
      "at": [
        52.5,
        84.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c20",
      "level": 1,
      "at": [
        52.5,
        86.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c21",
      "level": 1,
      "at": [
        53.5,
        88.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c22",
      "level": 1,
      "at": [
        52.5,
        90.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c23",
      "level": 1,
      "at": [
        53.5,
        92.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c24",
      "level": 1,
      "at": [
        101.5,
        54.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c25",
      "level": 1,
      "at": [
        101.5,
        57.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c26",
      "level": 1,
      "at": [
        101.5,
        60.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c27",
      "level": 0,
      "at": [
        80.5,
        52.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c28",
      "level": 0,
      "at": [
        80,
        84
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c29",
      "level": 0,
      "at": [
        80,
        88
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c30",
      "level": 0,
      "at": [
        8.5,
        154.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c31",
      "level": 0,
      "at": [
        64.5,
        152.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c32",
      "level": 0,
      "at": [
        64.5,
        156.5
      ],
      "yaw": 0,
      "ore": false
    },
    {
      "id": "c33",
      "level": 0,
      "at": [
        139.5,
        74.5
      ],
      "yaw": 0,
      "ore": false
    }
  ]
};
