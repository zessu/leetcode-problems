class Solution {
  calculateOtherProduct(nums: number[], index: number) {
    // calculate product of other elements except this one
    let product = 1;
    for (const item in nums) {
      if (parseInt(item) !== index) {
        product *= nums[item];
      }
    }

    return product;
  }

  productExceptSelf(nums: number[]) {
    const res: number[] = [];
    let product = 1;
    for (const item in nums) {
      product *= nums[item];
    }

    for (const item in nums) {
      const denominator = nums[item];
      if (denominator === 0) {
        const ret = this.calculateOtherProduct(nums, parseInt(item));
        res.push(ret);
      } else {
        res.push(product / denominator);
      }
    }

    return res;
  }
}

const nums = [-1, 0, 1, 2, 3];
const nums2 = [1, 2, 4, 6];
const sol = new Solution();
const res = sol.productExceptSelf(nums);
const res2 = sol.productExceptSelf(nums2);
console.log(res);
console.log(res2);
console.log(`equality test ${-0 === 0}`);
