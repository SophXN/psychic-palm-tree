/*
Write a function that reverses a string. The input string is given as an array of 
characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

const reverseString = (s) => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const tempStart = s[i];
    const tempEnd = s[j];
    s[i] = tempEnd;
    s[j] = tempStart;
    i++;
    j--;
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
