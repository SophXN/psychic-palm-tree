// Given two sorted arrays nums1 and nums2 of
// size m and n respectively, return the median of the two sorted arrays.

// BRUTE FORCE

// var findMedianSortedArrays = function (nums1, nums2) {
//   // find the midpoint
//   // divide by two
// };

const inputArr = [5, 2, 8, 2, 4, 2, 6, 6, 6, 3, 3, 5, 7, 9, 2, 0, 4];

const mergeSort = (arr) => {
  if (arr.length === 0) {
    throw new Error("zero array?!");
  } else if (arr.length === 1) {
    return arr;
  } else if (arr.length === 2) {
    console.log("arr length is 2... doing " + arr);
    if (arr[0] < arr[1]) return arr;
    return [arr[1], arr[0]];
  }

  const len = arr.length;
  const halfLen = Math.floor(len / 2);

  let lefty = mergeSort(arr.slice(0, halfLen));
  let right = mergeSort(arr.slice(halfLen));
  const result = [];
  let counter = 0;
  let rightCounter = 0;

  console.log(halfLen, arr, lefty, right, "\nnow to merge...\n");

  while (counter < lefty.length || rightCounter < right.length) {
    if (
      right[rightCounter] === undefined ||
      lefty[counter] < right[rightCounter]
    ) {
      result.push(lefty[counter]);
      counter++;
    } else if (
      lefty[counter] === undefined ||
      lefty[counter] > right[rightCounter]
    ) {
      result.push(right[rightCounter]);
      rightCounter++;
    } else {
      result.push(lefty[counter]);
      counter++;
      result.push(right[rightCounter]);
      rightCounter++;
    }
  }

  return result;
};

console.log(mergeSort(inputArr));
// [ 1,2,3,4,5,6]
