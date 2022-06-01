/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3973/

Maximum Number of Balloons

Given a string test, you want to use the characters of text to form as many
instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of
instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
*/

const maxBalloons = (str) => {
  const balloon = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };

  for (let i = 0; i < str.length; i++) {
    if (balloon[str[i]] !== undefined) {
      balloon[str[i]]++;
    }
  }

  const goal = [1, 1, 2, 2, 1];
  const stringValues = Object.values(balloon);
  const count = stringValues.map((n, i) => n / goal[i]);
  const minBalloons = Math.floor(Math.min(...count));

  return minBalloons;
};

module.exports = maxBalloons;

// Runtime: 119 ms
// Memory Usage: 39.1 MB
