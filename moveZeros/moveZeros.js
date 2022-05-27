// Given an integer array nums, move all 0's to the end
// of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function (nums) {
  let counter = 0;
  for (i = 0; i < nums.length; i++) {
    if (counter >= nums.length) {
      break;
    }
    counter++;
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
  }
  console.log(nums);
};

// moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 1, 0, 3, 12, 0, 37, 0, 0, 129, 0, 0, 0, 1]);
