// Given an array, rotate the array to the right by k steps, where k is non-negative.

const rotate = function (nums, k) {
    let 
  for (i = 0; i < k; i++) {
    const lastItem = nums.pop();
    nums.unshift(lastItem);
    rotateCount--;
  }
  // it says to return nothing
  return;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([4, 1, 7, 13, 7], 23));
console.log(rotate([-1, -100, 3, 99], 2));
