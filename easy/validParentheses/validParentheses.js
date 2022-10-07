/*
PROMPT:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

START: 10:00
END: 

NOTES: 
So we need to track each pair, maybe in a map and when we find a match, set it to true. 
Then check the object values and if there is still at least one false, then return false
*/

const isValid = (s) => {
  // valid pairs
  const valid = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // Tracking stack
  const trackStack = [];
  for (let i = 0; i < s.length; i++) {
    // check if it's an opening bracket and add to stack
    if (valid[s[i]]) {
      trackStack.push(s[i]);
      continue;
    }
    // Otherwise check if closing bracket's pair is matched
    const lastIndex = trackStack.length - 1;
    const checkBracket = trackStack[lastIndex];
    if (valid[checkBracket] === s[i]) {
      trackStack.pop();
      continue;
    }
    // Otherwise string could begin with a closing bracket and unacceptable.
    return false;
  }

  if (trackStack.length === 0) {
    return true;
  }
  return false;
};

console.log(isValid("[(([{}]))]"));
console.log(isValid("]"));
console.log(isValid("()"));
