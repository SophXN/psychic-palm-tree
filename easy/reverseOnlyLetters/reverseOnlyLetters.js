/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3974/

Reverse Only Letters
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

/*
 * @param {string} s
 * @return {string}
 */
// Helper function using two pointer swap method
const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
};

const reverseOnlyLetters = (s) => {
  const alphaChars = [];
  s = s.split(''); // strings are immutable in JS

  for (let char of s) {
    if (/[a-zA-Z]/.test(char)) {
      alphaChars.push(char);
    }
  }

  const reversedAlpha = reverseArray(alphaChars);

  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      s[i] = reversedAlpha[index++];
    }
  }

  return s.join('');
};

module.exports = reverseOnlyLetters;

// Expected time complexity : O(n)
// Expected space complexity : O(n)
