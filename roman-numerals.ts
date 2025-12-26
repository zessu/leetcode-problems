// problem Roman Numerals
// Add roman numerals eg XCIX
// Google, Meta, g
// EASY
//

const romanValues = {
  I: { value: 1, validOperands: [] },
  II: { value: 2, validOperands: [] },
  III: { value: 3, validOperands: [] },
  IV: { value: 4, validOperands: [] },
  V: { value: 5, validOperands: ["I"] },
  VI: { value: 6, validOperands: [] },
  VII: { value: 7, validOperands: [] },
  VIII: { value: 8, validOperands: [] },
  IX: { value: 9, validOperands: [] },
  X: { value: 10, validOperands: ["I", "V"] },
  L: { value: 50, validOperands: ["X"] },
  C: { value: 100, validOperands: ["X"] },
  D: { value: 500, validOperands: ["C"] },
  M: { value: 1000, validOperands: ["C"] },
};

const validRomanNumerals = Object.keys(romanValues);

const isValidCharacter = (char: string) => validRomanNumerals.includes(char);

const operationIsValid = (op1: string, op2: string) =>
  romanValues[op2].validOperands.includes(op1);

const sumUp = (input: string): number => {
  const characters = input.split("");
  let res = 0;

  while (characters.length >= 2) {
    const op2 = characters.pop()!.toUpperCase();
    const op1 = characters.pop()!.toUpperCase();

    if (validRomanNumerals.indexOf(op2) > validRomanNumerals.indexOf(op1)) {
      if (!operationIsValid(op1, op2))
        throw new Error(`this operation is invalid ${op1} ${op2}`);
      res += romanValues[op2].value - romanValues[op1].value;
    } else {
      res += romanValues[op1].value + romanValues[op2].value;
    }
  }
  if (characters.length === 1) {
    res += romanValues[characters.pop()!].value;
  }
  return res;
};

console.log(sumUp("MCMXCIV"));
console.log(sumUp("XXX"));
console.log(sumUp("CM"));
// const ans3 = sumUp("XM"); this would be invalid and will not work
console.log(sumUp("VII"));
console.log(sumUp("XCIX"));
