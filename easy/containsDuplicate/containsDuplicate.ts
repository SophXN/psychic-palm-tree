/*
Given an integer array nums, return true if any value appears at least twice 
in the array, and return false if every element is distinct.
*/
function containsDuplicate(nums: number[]): boolean {
    // create a map of all new numbers
    type DistinctNumbers = {
        [num: number]: boolean
    }
    let resultMap: DistinctNumbers = {};
    // if the key exist, return true immediately
    for (let i = 0; i < nums.length; i++) {
        if (resultMap[nums[i]]) {
            return true
        }
        if (resultMap[nums[i]] === undefined) {
            resultMap[nums[i]] = true
        }
    }
    // otherwise return false
    return false
};

