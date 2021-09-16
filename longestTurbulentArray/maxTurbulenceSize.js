/* eslint-disable no-else-return */
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

/*
 * @param {number[]} arr
 * @return {number}
 */

// Helper function for sub array
const checkSubArray = (subArr) => {
  // Check if i < k > j
  if (subArr[0] < subArr[1] && subArr[1] > subArr[2]) {
    // Return true
    return true;
  // Check if i > k < j
  } else if (subArr[0] > subArr[1] && subArr[1] < subArr[2]) {
    // Return true
    return true;
 } else {
   // Else return false
   return false;
 }
};

const maxTurbulenceSize = (arr) => {
  // Edge case Array.length < 3
  if (arr.length < 3) {
    return 1;
  }
  // Track dynamic arr
  const result = [];
  let count = 0;
  // Iterate over the array
  for (let i = 1; i <= arr.length - 1; i++) {
    const subarray = [arr[i - 1], arr[i], arr[i + 1]];
    // console.log(subarray, checkSubArray(subarray));
    // Check sub array in helper
    if (checkSubArray(subarray)) {
      // Increment count and add to dynamic arr
      count++;
      result.push(count);
      // if FALSE
    } else {
      // reset count to 1 and push to dynamic arr
      count = 1;
      result.push(count);
    }
  }
  // Take max of dynamic arr + 1
  const maxSubArrs = Math.max(...result) + 1;
  // Return final result
  return maxSubArrs;
};

module.exports = maxTurbulenceSize;

// SOLUTION FROM https://leetcode.libaoj.in/longest-turbulent-subarray.html

// var maxTurbulenceSize = function(arr) {
//   if (arr.length == 1) return 1;

//   let left = 0;
//   let right = 1;
//   let running_length = 1;
//   let max_length = running_length;

//   while(left < arr.length && right < arr.length){
//       if(arr[left] < arr[left+1]){
//           if ((running_length % 2 == 0 && !(arr[right-1] > arr[right])) ||
//               (running_length % 2 == 1 && !(arr[right-1] < arr[right]))){
//               left = right-1;
//           }
//       }
//       else if (arr[left] > arr[left+1]){
//           if ((running_length % 2 == 0 && !(arr[right-1] < arr[right])) ||
//               (running_length % 2 == 1 && !(arr[right-1] > arr[right]))){
//               left = right-1;
//           }
//       }
//       else {
//           left = left + 1;
//           continue;
//       }
//       running_length = right - left + 1;
//       if(running_length > max_length) max_length = running_length;
//       right++;
//   }
//   return max_length;
// };
