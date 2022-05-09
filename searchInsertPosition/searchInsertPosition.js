/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable max-len */
/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsert = (nums, target) => {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  for (i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return nums.length;
};

const testFunctionA = () => {
  const nums = [1, 3, 5, 6];
  const target = 5;
  return searchInsert(nums, target);
};

const testFunctionB = () => {
  const nums = [1, 3, 5, 6];
  const target = 2;
  return searchInsert(nums, target);
};

const testFunctionC = () => {
  const nums = [1, 3, 5, 6];
  const target = 7;
  return searchInsert(nums, target);
};

console.log(testFunctionA());
console.log(testFunctionB());
console.log(testFunctionC());
