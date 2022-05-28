// I: two sorted arrays
// O: array for the indices of two nums
// C:
// E:

const twoSum = (numbers, target) => {
  for (i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    for (j = numbers.length - 1 + 1; j > i; j--) {
      if (numbers[j] === diff) {
        return [i + 1, j + 1];
      }
    }
  }
  // DO A WHILE LOOP DAMMIT
};

console.log(twoSum([7, 0, 0, 0, 500, 2, 11, 15], 9));
console.log(twoSum([0, 0, 3, 4], 0));
console.log(twoSum([0, 3, 3, 4], 6));
