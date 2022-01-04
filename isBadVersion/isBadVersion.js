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
const solution = (isBadVersion) => {
  return (n) => {
    for (let i = 1; i <= n; i++) {
      // Check each item in the array
      // If it is true, then return n[i]
      const currentVersion = i;
      if (isBadVersion(currentVersion)) {
        return i;
      }
    }
    return n;
  };
};

export default solution;
