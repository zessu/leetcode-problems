// problem Add Binary
// Simulate binary addition just like you add numbers digit by digit.
// Google, Meta, Bloomberg
// EASY
//
const validateArray = (arr: string[]) => {
  return arr.every(item => parseInt(item) === 1 || parseInt(item) === 0);
}

const addBinary = (num1: string, num2: string) => {
  const a = num1.split('');
  const b = num2.split('');
  let result: number[] = [];
  if (!validateArray(a) || !validateArray(b)) throw new Error("the provided string is invalid");
  let remainder = 0;

  for (let count = a.length - 1; count >= 0; count--) {
    let res = parseInt(a[count]) + parseInt(b[count]) + remainder;
    remainder = res - 1 >= 1 ? 1 : 0;;
    result = [res % 2, ...result];
  }

  return result.join("");

}

console.log(addBinary("0001", "0001"));
console.log(addBinary("0011", "0011"));
console.log(addBinary("0001", "0010"));
console.log(addBinary("0002", "0010"));
