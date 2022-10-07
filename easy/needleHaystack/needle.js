var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  let resultIndex = -1;

  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i;
      }
    }
  }

  return resultIndex;
};

console.log(strStr("hello", "ll"));
console.log("should be 2");
console.log("");

console.log(strStr("aaaaaaaaa", "bba"));
console.log("should be -1");
console.log("");

console.log(strStr("holo", "o"));
console.log("should be 1");
console.log("");

console.log(strStr("holoo", "olo"));
console.log("should be 1");
console.log("");

console.log(
  strStr(
    "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" +
      "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" +
      "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhii",
    "hhi"
  )
);
console.log("should be like 50");
console.log("");
console.log(strStr("hhhhhhhhhhhii", "hhi"));
console.log("should be like 9");
console.log("");

console.log(
  strStr(
    "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" +
      "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" +
      "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhii",
    "hhheeeee"
  )
);
console.log("should be -1");
console.log("");

console.log(strStr("aabbcc", "bbccee"));
console.log("should be -1");

console.log(strStr("aabbaabbb", "bbb"));
console.log("should be 6");

//   console.log("founda matcha at: ", i);
//   let haystackCounter = i;

//   for (j = 0; j < needle.length; j++) {
//     if (haystack[haystackCounter] !== needle[j]) {
//       break;
//     }
//     haystackCounter++;
//   }

// NEED TO CONTINUE ON OUTSIDE LOOP if last needle letter wasn't matched
//   if (haystack[haystackCounter - 1] !== needle[needle.length - 1]) {
//     continue;
//   } else {
//     // IF THE LAST OF NEEDLE WAS FOUND IN HAYSTACK WAS FOUND THEN RETURN ITS FIRST INDEX
//     resultIndex = i;
//     break;
//   }
