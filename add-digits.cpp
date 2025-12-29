#include <iostream>

int addDigits(int num) {
  if (num == 0)
    return 0;

  if (num % 9 == 0)
    return 9;

  return num % 9;
}

int main() {
  std::cout << addDigits(9876) << std::endl;
  std::cout << addDigits(18) << std::endl;
  std::cout << addDigits(1234) << std::endl;
  return 0;
}
