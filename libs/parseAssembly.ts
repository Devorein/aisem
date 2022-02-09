import { R_TYPE_INSTRUCTIONS_MAP, R_TYPE_OPERATIONS } from "../constants";
import { RTypeOperations } from "../types";

const rTypeOperations = new Set(R_TYPE_OPERATIONS)
const validOperations = new Set(...rTypeOperations);

export default function parseAssembly(assembly: string) {
  const tokens = assembly.split(" ");
  const operation = tokens[0];
  const operands = tokens.slice(1);
  // The first token would be the operation,
  // If its not a valid operation we need to throw an error
  if (!validOperations.has(operation)) {
    throw new Error(`Invalid operation ${operation}`);
  }
  const rTypeOperation = R_TYPE_INSTRUCTIONS_MAP.get(operation as RTypeOperations);
  if (rTypeOperation) {
    const { slots } = rTypeOperation;
    const slotsSet = new Set(slots);
    const totalSlots = slotsSet.size;
    // If the number of slots that the operation expects isn't provided by the user
    if (totalSlots !== operands.length) {
      throw new Error(`Operation ${operation} requires ${slots.join(",")}. Given ${operands.join(",")}`)
    } else {
      // First 6 zeros represent a r type instruction
      const chunks: string[] = ["000000"];

      if (slotsSet.has("rs")) {
        // TODO: Convert register to binary
        chunks.push("rs")
      } else {
        chunks.push("00000")
      }

      if (slotsSet.has("rt")) {
        chunks.push("rt")
      } else {
        chunks.push("00000")
      }

      if (slotsSet.has("rd")) {
        chunks.push("rd")
      } else {
        chunks.push("00000")
      }

      if (slotsSet.has("sa")) {
        chunks.push("sa")
      } else {
        chunks.push("00000")
      }
      chunks.push(rTypeOperation.fn)
      return chunks.join(" ")
    }
  }
}