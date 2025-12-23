// problem string partition
// given string s, integer k, and fill character, parition strings and if length
// less that k fill with the charcter
//
// canonical
// EASY
// examples: string =
// "andrew",  integer =2, fill character = 0, result ["an", "dr", "ew" string =
// "andrews",  integer =2, fill character = 0, result ["an", "dr", "we", "s0"]
//

const partitionStrings = (input: string, k: number, fill: string) => {
  const working = input.split("");
  let res: string[] = [];
  let f = "";

  for (let i = 0; i < working.length; i++) {
    f += working[i];
    if ((i + 1) % k === 0) {
      res.push(f);
      f = "";
    }
  }

  if (f.length < k && f != "") {
    const r = k - f.length;
    res.push(`${f}${fill.repeat(r)}`);
  }

  return res;
};

const res = partitionStrings("hippopotamusmathew101s", 3, "x");

console.log(res);
