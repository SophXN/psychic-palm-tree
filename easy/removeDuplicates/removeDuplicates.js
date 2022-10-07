// const removeDuplicates = (nums) => {
//     // loop thru
//     // check if neighbor is the same
//     // if not, continue

//     // however but if in fact neighbor looks like you
//     // then start deleting shit until neighbor doesn't look like u

//     return nums
// }

// option 1: go thru and delete duplicates?
// option 2: swapping things in place

var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums[i - 1] = -200;
    }
  }
  nums = nums.filter((x) => x !== -200);
  console.log(nums);
  return nums.length;
};

const betterBeThis = [1, 2];
const ourOriginalArray = [1, 1, 2];

removeDuplicates(ourOriginalArray);

let theyDidItRight = true;
for (let i = 0; i < betterBeThis.length; i++) {
  if (betterBeThis[i] !== ourOriginalArray[i]) {
    theyDidItRight = false;
    break;
  }
}

console.log("did they do it right? ", theyDidItRight);

// n = 1, theres 1 answer
// n = 2, theres 2 answers
// n = 3, theres 3 answers
// n = 4 1111, 112, 121, 211, 22
// n = 5 11111, 1112, 1121, 1211, 2111, 221, 122, 212
// n = 6 111111, 11112, 11121, 11211, 12111, 21111, 1122, 1212, 2112, 1221, 2121, 2211, 222
