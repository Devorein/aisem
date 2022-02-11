import convertAssemblyToMachineCode from "../libs/convertAssemblyToMachineCode";

describe('convertAssemblyToMachineCode', () => { 
  describe('R type operation', () => { 
    it(`add operation`, () => {
      expect(convertAssemblyToMachineCode("add $t0 $t1 $t2")).toEqual([
        "000000",
        "01001",
        "01010",
        "01000",
        "00000",
        "100000",
      ]);
    })

    it(`break operation`, () => {
      expect(convertAssemblyToMachineCode("break")).toEqual([
        "000000",
        "00000",
        "00000",
        "00000",
        "00000",
        "001101",
      ]);
    })

    it(`div operation`, () => {
      expect(convertAssemblyToMachineCode("div $t0 $t1")).toEqual([
        "000000",
        "01000",
        "01001",
        "00000",
        "00000",
        "011010",
      ]);
    })

    it(`jalr operation`, () => {
      expect(convertAssemblyToMachineCode("jalr $t0 $t1")).toEqual([
        "000000",
        "01001",
        "00000",
        "01000",
        "00000",
        "001001",
      ]);
    })

    it(`jr operation`, () => {
      expect(convertAssemblyToMachineCode("jr $t0")).toEqual([
        "000000",
        "01000",
        "00000",
        "00000",
        "00000",
        "001000",
      ]);
    })

    it(`mfhi operation`, () => {
      expect(convertAssemblyToMachineCode("mfhi $t0")).toEqual([
        "000000",
        "00000",
        "00000",
        "01000",
        "00000",
        "010000",
      ]);
    })

    it(`sll operation`, () => {
      expect(convertAssemblyToMachineCode("sll $t0 $t1 -2")).toEqual([
        "000000",
        "00000",
        "01001",
        "01000",
        "11110",
        "000000",
      ]);
    })

    it(`Throw error for invalid operation`, () => {
      expect(() => convertAssemblyToMachineCode("subs $1")).toThrow("Invalid operation subs");
    })

    it(`Throw error for invalid operands`, () => {
      expect(() => convertAssemblyToMachineCode("add $1 $2")).toThrow("Operation add requires rd,rs,rt. Given rd,rs");
    })
  })
})