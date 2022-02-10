import convert, { convertRegisterToBinary } from "../libs/convertRegisterToBinary";

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

describe('convert', () => { 
  describe('Two length', () => { 
    it(`Convert t1 to binary`, () => {
      expect(convert("t1")).toEqual("01001")
    })

    it(`Convert $8 to binary`, () => {
      expect(convert("$8")).toEqual("01000")
    })

    it(`Throw error for invalid register range`, () => {
      expect(() => convert("$2")).toThrow("Valid register ranges are from 8-15, 24-25 and 16-23");
    })
  })

  describe('Three length', () => { 
    it(`Convert $t1 to binary`, () => {
      expect(convert("$t1")).toEqual("01001")
    })

    it(`Convert $23 to binary`, () => {
      expect(convert("$23")).toEqual("10111")
    })

    it(`Throw error for invalid register range with $`, () => {
      expect(() => convert("$31")).toThrow("Valid register ranges are from 8-15, 24-25 and 16-23");
    })

    it(`Throw error for invalid register range with numbers`, () => {
      expect(() => convert("123")).toThrow("Invalid register format. Use $11, $t1, $s5 ...")
    })
  })

  it(`Throw error for invalid register`, () => {
    expect(() => convert("1234")).toThrow("Invalid register format 1234. Valid formats are $1, t1, $t1");
  })
})