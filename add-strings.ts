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
