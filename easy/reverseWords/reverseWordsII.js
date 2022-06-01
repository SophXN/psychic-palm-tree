const reverseString = (s) => {
  const arr = s.split("");
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const tempStart = arr[i];
    const tempEnd = arr[j];
    arr[i] = tempEnd;
    arr[j] = tempStart;
    i++;
    j--;
  }
  return arr.join("");
};

const reverseWords = (s) => {
  const arrStr = s.split(" ");
  const revArr = [];

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length === 0) {
      break;
    } else {
      const reversed = reverseString(arrStr[i]);
      revArr.push(reversed);
    }
  }

  const revString = revArr.join(" ");

  return revString;
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
const t = "God Ding";
console.log(reverseWords(t));
