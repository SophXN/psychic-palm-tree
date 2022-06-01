// Given an array, rotate the array to the right by k steps, where k is non-negative.

const rotate = function (nums, k) {
  k %= nums.length;
  if (k !== 0) {
    var tmp = nums.slice(-k);
    nums.splice(-k, k);
    Array.prototype.unshift.apply(nums, tmp);
  }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([1, 2, 3], 5);
rotate([-1, -100, 3, 99], 2);
