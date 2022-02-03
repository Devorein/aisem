import { AssemblyOperation } from "../types";

const OperatorOpcodeRecord: Record<string, AssemblyOperation["operation"]> = {
  "+": "ADD",
  "-": "SUB",
  "*": "MUL",
  "/": "DIV",
};

export default function convertPostfixToAssembly(postfixString: string) {
  const operatorsSet = new Set(["*", "/", "+", "-"]);
  let usedTRegisters = 0, usedSRegisters = 0;

  const operationsStack: Array<string> = [];
  const assemblyExpressions: AssemblyOperation[] = [];

  for (let index = 0; index < postfixString.length; index++) {
    const char = postfixString[index];
    // If its not an operator
    if (!operatorsSet.has(char)) {
      operationsStack.push(char)
    } else {
      // Remove the top most two operands
      operationsStack.pop();
      operationsStack.pop();
      assemblyExpressions.push({
        operation: OperatorOpcodeRecord[char],
        destination: usedTRegisters,
        operands: [usedSRegisters, usedSRegisters + 1]
      });
      usedTRegisters+=1;
      // Two s registers are being used as source registers
      usedSRegisters+=2;
    }
  }
  return assemblyExpressions;
}