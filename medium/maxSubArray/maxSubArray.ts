//npx ts-node maxSubArray.ts
// Given an integer array nums, find the 
// subarray
// with the largest sum, and return its sum.

function maxSubArray(nums: number[]): number {

    let largestSum = nums[0];

    // start with the first number and add each num from array. (two for loops)
    for (let i = 0; i < nums.length; i++) {
        let currentSum = nums[i];
        if (nums[i] > largestSum) {
            largestSum = nums[i]
        }

        for (let j = i + 1; j < nums.length; j++) {
            currentSum += nums[j]

            if (currentSum > largestSum) {
                largestSum = currentSum
            }
        }

    }
    // add the largest sum of the round to the map. 
    // take the largest key of the map and return final array
    // console.log("largerst sum so far ", largestSum, "and its array", resultMap[largestSum])
    return largestSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-2, 1]))

// alt solution 
function maxSubArraySolution(nums: number[]): number {
    let sum = nums[0]; // current sum
    let max = nums[0]; // max sum
    let ptr = 1; // pointer

    while (ptr < nums.length) {
        sum = Math.max(nums[ptr], sum + nums[ptr]);
        max = Math.max(max, sum);
        ptr += 1;
    }

    return max;
};