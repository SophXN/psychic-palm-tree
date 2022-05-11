// Given an integer numsay nums sorted in non-decreasing order, return an numsay of the squares of each number sorted in increasing order.

const sortedSquares = (nums) => {
  return nums
    .map((ele) => {
      // transform the given array
      return ele * ele; //square the element
    })
    .sort((a, b) => {
      return a - b; // sort by ascending order
    });
};

const testFunctionA = () => {
  const nums = [-4, -1, 0, 3, 10];
  return sortedSquares(nums);
};

const testFunctionB = () => {
  const nums = [-10000, -9999, -7, -5, 0, 0, 10000];
  return sortedSquares(nums);
};

console.log(testFunctionA());
console.log(testFunctionB());
