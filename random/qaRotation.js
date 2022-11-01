// given an array of engs
// make a schedule in groups of 4
// input can be #of weeks representing groups and array of engs
// output should be an array of arrays
const qaRotation = (weeks, eng) => {
  const result = [];
  let currentEng = 0;

  for (let i = 0; i < weeks; i++) {
    const subArr = [];
    for (let k = 0; k <= 3; k++) {
      if (currentEng === eng.length - 1) {
        subArr.push(eng[currentEng]);
        console.log("restarting cycle of eng", currentEng);
        currentEng = 0;
        continue;
      }

      subArr.push(eng[currentEng]);
      currentEng++;
      console.log(currentEng);
    }
    result.push(subArr);
  }

  return result;
};

console.log(
  qaRotation(10, [
    "David",
    "James",
    "Kelly",
    "Luke",
    "Mandy",
    "Marco",
    "Maryanne",
    "Sophie",
    "Stephanie",
  ])
);
