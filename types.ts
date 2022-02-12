import { R_TYPE_OPERATIONS, R_TYPE_SLOTS } from "./constants";

export interface AssemblyOperation {
  operation: "ADD" | "SUB" | "MUL" | "DIV"
  destination: number
  operands: [number, number]
}
export type RTypeOperations = typeof R_TYPE_OPERATIONS[number];
export type RTypeSlots = typeof R_TYPE_SLOTS[number];
export interface RTypeInstruction {
  op: RTypeOperations
  slots: RTypeSlots[]
  fn: string
}

export interface Instruction {
  op: string
  slots: string[]
  fn: string
}

export interface IConversion {
  operation: string
  operands: string[]
  binary: string
  hex: string
  chunks: string[]
}