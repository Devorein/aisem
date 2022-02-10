import { convertRegisterToBinary } from "../libs/convertRegisterToBinary";

describe('convertRegisterToBinary', () => { 
  describe('t registers', () => { 
    it(`Convert $t5 register to binary`, () => {
      expect(convertRegisterToBinary(["t", "5"])).toBe("01101");
    })
  
    it(`Convert $t9 register to binary`, () => {
      expect(convertRegisterToBinary(["t", "9"])).toBe("11001");
    })

    it(`Throw error for invalid t register range`, () => {
      expect(() => convertRegisterToBinary(["t", "11"])).toThrow("Valid t register range is from 0-9");
    })
  })

  describe('s registers', () => { 
    it(`Convert $s5 register to binary`, () => {
      expect(convertRegisterToBinary(["s", "5"])).toBe("10101");
    })
  
    it(`Throw error for invalid s register range`, () => {
      expect(() => convertRegisterToBinary(["s", "11"])).toThrow("Valid s register ranges is from 0-7");
    })
  })

  it(`Throw error for invalid register`, () => {
    expect(() => convertRegisterToBinary(["d", "11"])).toThrow("Only s or t registers can be used");
  })
})