/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable max-len */
/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  // Loop over the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
  // If target is found
  // Return index
  // Else return -1
};

// export default search;
console.log(search([-1, 0, 3, 5, 9, 12], 2));
