export interface AssemblyOperation {
  operation: "ADD" | "SUB" | "MUL" | "DIV"
  destination: number
  operands: [number, number]
}