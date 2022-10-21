/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
 */
var runningSum = function (nums) {
  let currentSum = 0;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    result.push(currentSum);
  }
  return result;
};

console.log(runningSum([3, 1, 2, 10, 1]));
