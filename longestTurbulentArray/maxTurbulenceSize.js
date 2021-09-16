/* eslint-disable indent */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/*
https://leetcode.com/explore/featured/card/september-leetcoding-challenge-2021/638/week-3-september-15th-september-21st/3976/

Longest Turbulent Array

Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each adjacent pair of elements
in the subarray. More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said
to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.

Constraints:
1 <= arr.length <= 4 * 104
0 <= arr[i] <= 109

Example 1:

Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
Example 2:

Input: arr = [4,8,12,16]
Output: 2
Example 3:

Input: arr = [100]
Output: 1
*/

/**
 * @param {number[]} arr
 * @return {number}
 */

// Helper function for sub array
const checkSubArray = (subArr) => {
  //
};

const maxTurbulenceSize = (arr) => {
  // Track dynamic arr
  // Iterate over the array
    // Check sub array in helper
    // if TRUE
      // Increment count and add to dynamic arr
    // if FALSE
      // reset count to 1 and push to dynamic arr
  // Take max of dynamic arr + 1
  // Return final result

};

module.exports = maxTurbulenceSize;
