import { R_TYPE_OPERATIONS } from "./constants";

export interface AssemblyOperation {
  operation: "ADD" | "SUB" | "MUL" | "DIV"
  destination: number
  operands: [number, number]
}

export interface RTypeInstruction {
  op: typeof R_TYPE_OPERATIONS
  // null means 00000
  rs: string | null
  rd: string | null
  rt: string | null
  sa: string | null
  fn: string
}