import { I_TYPE_INSTRUCTIONS_MAP, R_TYPE_INSTRUCTIONS_MAP } from "../constants";
import { ITypeInstructionSet, ITypeOperations, RTypeInstructionSet, RTypeOperations } from "../types";
import convertRegisterToBinary, { dec2bin } from "./convertRegisterToBinary";

function zeros(total: number) {
  return new Array(total).fill("0").join("")
}

export default function convertAssemblyToMachineCode(assemblyInstruction: string) {
  const tokens = assemblyInstruction.split(" ");
  // The first token would be the operation,
  const operation = tokens[0];
  // The rest are operands for the operation
  const operands = tokens.slice(1);
  const rTypeOperation = R_TYPE_INSTRUCTIONS_MAP.get(operation as RTypeOperations);
  const jTypeOperation = I_TYPE_INSTRUCTIONS_MAP.get(operation as ITypeOperations)
  if (rTypeOperation) {
    const { slots } = rTypeOperation;
    const slotsSet = new Set(slots);
    const totalSlots = slotsSet.size;
    // If the number of slots that the operation expects isn't provided by the user
    if (totalSlots !== operands.length) {
      throw new Error(`Operation ${operation} requires ${slots.join(",")}. Given ${slots.slice(0, operands.length).join(",")}`)
    } else {
      const instruction: RTypeInstructionSet = {
        fn: rTypeOperation.fn,
        op: zeros(6),
        rd: zeros(5),
        rs: zeros(5),
        rt: zeros(5),
        sa: zeros(5),
      };

      // ALGORITHM
      // find the index of slot inside of slots
      // Eg: div rs, rt
      // div operation doesn't have rd
      // So its slot would be ["rs", "rt"]
      // If we used slots[1] => "rt"
      // slots.indexOf("rs") => 0
      // operands = ["2", "3"]
      // operands[0] => 2

      if (slotsSet.has("rs")) {
        instruction.rs = convertRegisterToBinary(operands[slots.indexOf("rs")])
      }

      if (slotsSet.has("rt")) {
        instruction.rt = convertRegisterToBinary(operands[slots.indexOf("rt")])
      }

      if (slotsSet.has("rd")) {
        instruction.rd = convertRegisterToBinary(operands[slots.indexOf("rd")])
      }

      // TODO: Might not work for negative numbers
      if (slotsSet.has("sa")) {
        instruction.sa = dec2bin(Number(operands[slots.indexOf("sa")]), 5)
      }
      return [
        instruction.op,
        instruction.rs,
        instruction.rt,
        instruction.rd,
        instruction.sa,
        instruction.fn,
      ]
    }
  } else if (jTypeOperation) {
    const { slots } = jTypeOperation;
    const slotsSet = new Set(slots);
    const totalSlots = slotsSet.size;
    // If the number of slots that the operation expects isn't provided by the user
    if (totalSlots !== operands.length) {
      throw new Error(`Operation ${operation} requires ${slots.join(",")}. Given ${slots.slice(0, operands.length).join(",")}`)
    } else {
      const instruction: ITypeInstructionSet = {
        op: jTypeOperation.fn,
        imm: zeros(16),
        rs: zeros(5),
        rt: zeros(5),
      };

      if (slotsSet.has("imm(rs)")) {
        const [immField, rsField] = operands[slots.indexOf("rs")].match(/(imm)\((.*)\)/)!;
        instruction.imm = dec2bin(Number(immField), 15);
        instruction.rs = convertRegisterToBinary(rsField);
      }

      if (slotsSet.has("rs")) {
        instruction.rs = convertRegisterToBinary(operands[slots.indexOf("rs")])
      }

      switch (jTypeOperation.op) {
        case "bgez": {
          instruction.rt = "00001"
          break;
        }
        case "bgtz": {
          instruction.rt = "00000"
          break;
        }
        case "blez": {
          instruction.rt = "00000"
          break;
        }
        case "bltz": {
          instruction.rt = "00000"
          break;
        }
        default: {
          if (slotsSet.has("rt")) {
            instruction.rt = convertRegisterToBinary(operands[slots.indexOf("rt")])
          }
        }
      }

      if (slotsSet.has("imm")) {
        instruction.imm = dec2bin(Number(operands[slots.indexOf("imm")]), 15)
      }

      if (slotsSet.has("label")) {
        instruction.imm = dec2bin(Number(operands[slots.indexOf("label")]), 15)
      }

      return [
        instruction.op,
        instruction.rs,
        instruction.rt,
        instruction.imm,
      ]
    }
  }
  // If its not a valid operation we need to throw an error
  throw new Error(`Invalid operation ${operation}`);
}