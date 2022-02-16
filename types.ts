import { I_TYPE_OPERATIONS, I_TYPE_SLOTS, R_TYPE_OPERATIONS, R_TYPE_SLOTS } from "./constants";

export interface AssemblyOperation {
  operation: "ADD" | "SUB" | "MUL" | "DIV"
  destination: number
  operands: [number, number]
}
export type RTypeOperations = typeof R_TYPE_OPERATIONS[number];
export type RTypeSlots = typeof R_TYPE_SLOTS[number];

export type ITypeOperations = typeof I_TYPE_OPERATIONS[number];
export type ITypeSlots = typeof I_TYPE_SLOTS[number];

export interface RTypeInstruction {
  op: RTypeOperations
  slots: RTypeSlots[]
  fn: string
}

export interface ITypeInstructionSet {
  op: string
  rs: string
  rt: string
  imm: string
}

export interface ITypeInstruction {
  op: ITypeOperations
  slots: ITypeSlots[]
  fn: string
}

export interface IConversion {
  operation: string
  operands: string[]
  binary: string
  hex: string
  chunks: string[]
}