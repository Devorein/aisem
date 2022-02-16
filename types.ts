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

export interface Instruction <Operation, Slots> {
  op: Operation
  slots: Slots[]
  fn: string
}

export interface RTypeInstruction extends Instruction<RTypeOperations, RTypeSlots>{
}

export interface ITypeInstruction extends Instruction<ITypeOperations, ITypeSlots>{
}

export interface IConversion {
  operation: string
  operands: string[]
  binary: string
  hex: string
  chunks: string[]
}