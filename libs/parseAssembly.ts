import { R_TYPE_OPERATIONS } from "../constants";

const rTypeOperations = new Set(R_TYPE_OPERATIONS)
const validOperations = new Set(...rTypeOperations);

export default function parseAssembly(assembly: string) {
  const tokens = assembly.split(" ");
  // The first token would be the operation,
  // If its not a valid operation we need to throw an error
  if (!validOperations.has(tokens[0])) {
    throw new Error(`Invalid operation ${tokens[0]}`);
  }
}