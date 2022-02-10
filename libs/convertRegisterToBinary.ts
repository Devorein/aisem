export function dec2bin(dec: number, bitLength: number) {
	const binary = (dec >>> 0).toString(2);
	const difference = binary.length - bitLength;
	if (difference > 0) {
		return binary.slice(difference);
	} else if (difference < 0) {
		return new Array(Math.abs(difference)).fill('0').join('') + binary;
	}
	return binary;
}

export function convertRegisterToBinary(registerChunks: string[]) {
	const registerSymbol = registerChunks[0];
	const registerNumber = Number(registerChunks.slice(1));
	// Only t0-t7 and t8-t9 are valid
	if (registerSymbol === 't') {
		if (registerNumber >= 0 && registerNumber <= 7) {
			// t0 would be translated to decimal 8
			return dec2bin(registerNumber + 8, 5);
		} else if (registerNumber == 8 || registerNumber == 9) {
			// t8 would be translated to decimal 24
			return dec2bin(registerNumber + 16, 5);
		}
		throw new Error(`Valid t register range is from 0-9`);
	} else if (registerSymbol === 's') {
		if (registerNumber >= 0 && registerNumber <= 7) {
			// s0 would be translated to decimal 16
			return dec2bin(registerNumber + 16, 5);
		}
		throw new Error(`Valid s register ranges is from 0-7`);
	}
	throw new Error(`Only s or t registers can be used`);
}

export default function convert(register: string) {
	// Register could be $1, $t1, t1, $11
	const registerStringLength = register.length;
	const registerChunks = register.split('');
  // Its either "t1" or $8
	if (registerStringLength === 2) {
    // for $1
		if (registerChunks[0] === '$') {
			const registerNumber = Number(registerChunks[1]);
			// Only $8 and $9 can be of two length
			if (
				(registerNumber >= 8 && registerNumber <= 9)
			) {
				return dec2bin(registerNumber, 5);
			}
			throw new Error(`Valid register ranges are from 8-15, 24-25 and 16-23`);
		}
    // For t1 | s1
		return convertRegisterToBinary(registerChunks);
	}
	// for $t1
	else if (registerStringLength === 3) {
		if (registerChunks[0] === '$') {
			// For $t1
			if (registerChunks[1] === 't' || registerChunks[1] === 's') {
				return convertRegisterToBinary(registerChunks.slice(1));
			}
			// For $11
			else {
  			const registerNumber = Number(registerChunks.slice(1).join(""));
        if (
          (registerNumber >= 8 && registerNumber <= 15) ||
          registerNumber == 24 ||
          registerNumber == 25 ||
          (registerNumber >= 16 && registerNumber <= 23)
        ) {
  				return dec2bin(Number(registerChunks.slice(1).join('')), 5);
        }
        throw new Error(`Valid register ranges are from 8-15, 24-25 and 16-23`);
			}
		}
		throw new Error(`Invalid register format. Use $11, $t1, $s5 ...`);
	}

	throw new Error(`Invalid register format ${register}. Valid formats are $1, t1, $t1`);
}
