import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { RTypeInstruction, RTypeOperations } from "./types";

export const R_TYPE_OPERATIONS = ['add', 'addu', 'and', 'break', 'div', 'divu', 'jalr', 'jr', 'mfhi', 'mflo', 'mthi', 'mtlo', 'mult', 'multu', 'nor', 'or', 'sll', 'sllv', 'slt', 'sltu', 'sra', 'srav', 'srl', 'srlv', 'sub', 'subu', 'syscall', 'xor'] as const
export const R_TYPE_SLOTS = ["rs", "rd", "rt", "sa"] as const;
export const R_TYPE_FORMAT = ["op", "rs", "rt", "rd", "sa", "fn"]
export const R_TYPE_INSTRUCTIONS_MAP: Map<RTypeOperations, RTypeInstruction> = new Map([
  [
    "add",
    {
      "op": "add",
      "fn": "100000",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "addu",
    {
      "op": "addu",
      "fn": "100001",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "and",
    {
      "op": "and",
      "fn": "100100",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "break",
    {
      "op": "break",
      "fn": "001101",
      "slots": []
    }
  ],
  [
    "div",
    {
      "op": "div",
      "fn": "011010",
      "slots": [
        "rs",
        "rt"
      ]
    }
  ],
  [
    "divu",
    {
      "op": "divu",
      "fn": "011011",
      "slots": [
        "rs",
        "rt"
      ]
    }
  ],
  [
    "jalr",
    {
      "op": "jalr",
      "fn": "001001",
      "slots": [
        "rd",
        "rs"
      ]
    }
  ],
  [
    "jr",
    {
      "op": "jr",
      "fn": "001000",
      "slots": [
        "rs"
      ]
    }
  ],
  [
    "mfhi",
    {
      "op": "mfhi",
      "fn": "010000",
      "slots": [
        "rd"
      ]
    }
  ],
  [
    "mflo",
    {
      "op": "mflo",
      "fn": "010010",
      "slots": [
        "rd"
      ]
    }
  ],
  [
    "mthi",
    {
      "op": "mthi",
      "fn": "010001",
      "slots": [
        "rs"
      ]
    }
  ],
  [
    "mtlo",
    {
      "op": "mtlo",
      "fn": "010011",
      "slots": [
        "rs"
      ]
    }
  ],
  [
    "mult",
    {
      "op": "mult",
      "fn": "011000",
      "slots": [
        "rs",
        "rt"
      ]
    }
  ],
  [
    "multu",
    {
      "op": "multu",
      "fn": "011001",
      "slots": [
        "rs",
        "rt"
      ]
    }
  ],
  [
    "nor",
    {
      "op": "nor",
      "fn": "100111",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "or",
    {
      "op": "or",
      "fn": "100101",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "sll",
    {
      "op": "sll",
      "fn": "000000",
      "slots": [
        "rd",
        "rt",
        "sa"
      ]
    }
  ],
  [
    "sllv",
    {
      "op": "sllv",
      "fn": "000100",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "slt",
    {
      "op": "slt",
      "fn": "101010",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "sltu",
    {
      "op": "sltu",
      "fn": "101011",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "sra",
    {
      "op": "sra",
      "fn": "000011",
      "slots": [
        "rd",
        "rt",
        "sa"
      ]
    }
  ],
  [
    "srav",
    {
      "op": "srav",
      "fn": "000111",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "srl",
    {
      "op": "srl",
      "fn": "000010",
      "slots": [
        "rd",
        "rt",
        "sa"
      ]
    }
  ],
  [
    "srlv",
    {
      "op": "srlv",
      "fn": "000110",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "sub",
    {
      "op": "sub",
      "fn": "100010",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "subu",
    {
      "op": "subu",
      "fn": "100011",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ],
  [
    "syscall",
    {
      "op": "syscall",
      "fn": "001100",
      "slots": []
    }
  ],
  [
    "xor",
    {
      "op": "xor",
      "fn": "100110",
      "slots": [
        "rd",
        "rs",
        "rt"
      ]
    }
  ]
]);

export const hoverTransitionSvgIconSx: SxProps<Theme> = {
  "&": {
    transition: "transform 250ms ease-in-out",
  },
  "&:hover": {
    transform: `scale(1.15)`,
    transition: "transform 250ms ease-in-out",
  },
};