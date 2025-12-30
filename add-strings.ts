// problem addStrings
// Given two non-negative integers represented as strings, num1 and num2, return the sum of num1 and num2 as a string.
// The solution must simulate the addition process without using any built-in libraries to handle large integers or
// directly converting the strings to integers.
// is a single digit. Return that single-digit number. Google Amazon Meta Uber
// Meta, Tiktok, Google
// EASY
//
const popElement = (input: string[]) => {
  const el = input.pop();
  return el ? parseInt(el) : 0;
};

const addStrings = (input1: string, input2: string) => {
  let index = 0;
  let total = 0;
  const wp1 = input1.split("");
  const wp2 = input2.split("");

  while (wp1.length || wp2.length) {
    const num1 = popElement(wp1);
    const num2 = popElement(wp2);
    total += (num1 + num2) * 10 ** index;
    index += 1;
  }

  return total;
};

console.log(addStrings("301076", "3940"));
console.log(addStrings("456", "77"));
