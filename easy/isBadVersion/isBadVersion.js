/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable eol-last */
/* eslint-disable arrow-body-style */
/*
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/*
 * @param {function} isBadVersion()
 * @return {function}
 */
/*
 * @param {integer} n Total versions
 * @return {integer} The first bad version
 * // To check if the version is bad, call isBadVersion API which returns T/F
 */
// const solution = (isBadVersion) => {
//   return (n) => {
//     for (let i = 1; i <= n; i++) {
//       // Check each item in the array
//       // If it is true, then return n[i]
//       const currentVersion = i;
//       if (isBadVersion(currentVersion)) {
//         return i;
//       }
//     }
//     return n;
//   };
// };

// I: int(arraysize)
// O: int(version that is bad)
// E: ?
// C: Positive versioning, max bit for number
const isBadVersion = (version) => {
  if (version === 3 || version === 19) return true;
  return false;
};

// Binary search ->
const version = () => {
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      const mid = Math.floor((right + left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};

const testVersion = () => {
  const badVersion = 5;
  return version(isBadVersion(badVersion));
};

testVersion();
