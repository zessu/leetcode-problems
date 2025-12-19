// problem : twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// given array of int and target return indices that add up to result
// Google, amazon, Meta, MSFT, Apple
// EASY
//
#include <iostream>
#include <vector>

std::vector<int> twoSum(std::vector<int> arr, int result) {
  for (int i = 0; i < arr.size(); i++) {
    for (int j = 0; j < arr.size(); j++) {
      if (arr.at(i) + arr.at(j) == result) {
        std::vector<int> ans = {};
        ans.push_back(i);
        ans.push_back(j);
        return ans;
      }
    }
  }
  return std::vector<int>{0, 0};
}

int main() {

  std::vector<int> arr1 = {1, 2, 3, 4, 5};
  std::vector<int> arr2 = {2, 7, 11, 15, 9};
  std::vector<int> res = twoSum(arr2, 9);

  for (int item : res) {
    std::cout << item << std::endl;
  }

  return 0;
}
