// problem addDigits
// Given a non-negative integer num, repeatedly sum its digits until the result is a single digit. Return that single-digit number.
// Google Amazon Meta Uber
// EASY
//

const sumUp = (wp: string[]) =>
  wp.reduce((acc, curr) => acc + parseInt(curr), 0);

const addDigits = (input: number) => {
  let wp = `${input}`.split("");
  let total = 0;
  while (wp.length > 1) {
    const res = sumUp(wp);
    total = res;
    wp = `${res}`.split("");
  }
  return total;
};

console.log(addDigits(9876));
console.log(addDigits(1234));
