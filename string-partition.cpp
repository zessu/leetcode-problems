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

#include <iostream>
#include <string>
#include <vector>

std::vector<std::string> partitionStrings(std::string input, int k, char fill) {
  std::vector<std::string> res = {};
  for (int i = 0; i < input.size(); i += k) {
    std::string substr = input.substr(i, k);
    if (substr.size() < k)
      substr.append(k - substr.size(), fill);
    res.push_back(substr);
  }
  return res;
}

int main() {
  std::vector<std::string> result =
      partitionStrings("hippopotamusmaster1001", 3, 'x');
  for (const std::string &characters : result) {
    std::cout << characters << std::endl;
  }
  return 0;
}
