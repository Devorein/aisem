export const R_TYPE_OPERATIONS = ['add', 'addu', 'and', 'break', 'div', 'divu', 'jalr', 'jr', 'mfhi', 'mflo', 'mthi', 'mtlo', 'mult', 'multu', 'nor', 'or', 'sll', 'sllv', 'slt', 'sltu', 'sra', 'srav', 'srl', 'srlv', 'sub', 'subu', 'syscall', 'xor'] as const

export const R_TYPE_INSTRUCTIONS_MAP = new Map([
  [
    "add",
    {
      "operationName": "add",
      "functionCode": "100000",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "addu",
    {
      "operationName": "addu",
      "functionCode": "100001",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "and",
    {
      "operationName": "and",
      "functionCode": "100100",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "break",
    {
      "operationName": "break",
      "functionCode": "001101",
      "rs": null,
      "rt": null,
      "rd": null,
      "sa": null
    }
  ],
  [
    "div",
    {
      "operationName": "div",
      "functionCode": "011010",
      "rs": "",
      "rt": "",
      "rd": null,
      "sa": null
    }
  ],
  [
    "divu",
    {
      "operationName": "divu",
      "functionCode": "011011",
      "rs": "",
      "rt": "",
      "rd": null,
      "sa": null
    }
  ],
  [
    "jalr",
    {
      "operationName": "jalr",
      "functionCode": "001001",
      "rs": "",
      "rt": null,
      "rd": "",
      "sa": null
    }
  ],
  [
    "jr",
    {
      "operationName": "jr",
      "functionCode": "001000",
      "rs": "",
      "rt": null,
      "rd": null,
      "sa": null
    }
  ],
  [
    "mfhi",
    {
      "operationName": "mfhi",
      "functionCode": "010000",
      "rs": null,
      "rt": null,
      "rd": "",
      "sa": null
    }
  ],
  [
    "mflo",
    {
      "operationName": "mflo",
      "functionCode": "010010",
      "rs": null,
      "rt": null,
      "rd": "",
      "sa": null
    }
  ],
  [
    "mthi",
    {
      "operationName": "mthi",
      "functionCode": "010001",
      "rs": "",
      "rt": null,
      "rd": null,
      "sa": null
    }
  ],
  [
    "mtlo",
    {
      "operationName": "mtlo",
      "functionCode": "010011",
      "rs": "",
      "rt": null,
      "rd": null,
      "sa": null
    }
  ],
  [
    "mult",
    {
      "operationName": "mult",
      "functionCode": "011000",
      "rs": "",
      "rt": "",
      "rd": null,
      "sa": null
    }
  ],
  [
    "multu",
    {
      "operationName": "multu",
      "functionCode": "011001",
      "rs": "",
      "rt": "",
      "rd": null,
      "sa": null
    }
  ],
  [
    "nor",
    {
      "operationName": "nor",
      "functionCode": "100111",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "or",
    {
      "operationName": "or",
      "functionCode": "100101",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "sll",
    {
      "operationName": "sll",
      "functionCode": "000000",
      "rs": null,
      "rt": "",
      "rd": "",
      "sa": ""
    }
  ],
  [
    "sllv",
    {
      "operationName": "sllv",
      "functionCode": "000100",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "slt",
    {
      "operationName": "slt",
      "functionCode": "101010",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "sltu",
    {
      "operationName": "sltu",
      "functionCode": "101011",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "sra",
    {
      "operationName": "sra",
      "functionCode": "000011",
      "rs": null,
      "rt": "",
      "rd": "",
      "sa": ""
    }
  ],
  [
    "srav",
    {
      "operationName": "srav",
      "functionCode": "000111",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "srl",
    {
      "operationName": "srl",
      "functionCode": "000010",
      "rs": null,
      "rt": "",
      "rd": "",
      "sa": ""
    }
  ],
  [
    "srlv",
    {
      "operationName": "srlv",
      "functionCode": "000110",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "sub",
    {
      "operationName": "sub",
      "functionCode": "100010",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "subu",
    {
      "operationName": "subu",
      "functionCode": "100011",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ],
  [
    "syscall",
    {
      "operationName": "syscall",
      "functionCode": "001100",
      "rs": null,
      "rt": null,
      "rd": null,
      "sa": null
    }
  ],
  [
    "xor",
    {
      "operationName": "xor",
      "functionCode": "100110",
      "rs": "",
      "rt": "",
      "rd": "",
      "sa": null
    }
  ]
])