// problem: palindrome: determine if given number is palindrome
// read same fowards and backwards do not use strings
// Google, Meta, MSFT, Amazon
// EASY
//
#include <cmath>
#include <iostream>

bool isPalindrome(int val) {
  int pow = std::log10(val);
  int original = val;
  int ret = 0;
  while (pow >= 0) {
    int total = (val % 10) * std::pow(10, pow--);
    ret += total;
    val /= 10;
  }
  return ret == original;
}

int main() {
  bool res1 = isPalindrome(1001);
  bool res2 = isPalindrome(121);
  bool res3 = isPalindrome(521);
  std::cout << "is Palindrome: " << res1 << res2 << res3 << std::endl;
  return 0;
}
