// given an array of engs, make a schedule in groups of 4
// input can be #of weeks and array of engs
// output should be a map showing date:engGroup

const qaRotation = (weeks, eng) => {
  // starting date
  const myDate = new Date("2022-10-26");
  const result = {};
  let currentEng = 0;

  // generate groups of engs
  for (let i = 0; i < weeks; i++) {
    const subArr = [];
    for (let k = 0; k <= 3; k++) {
      if (currentEng === eng.length - 1) {
        subArr.push(eng[currentEng]);
        currentEng = 0;
        continue;
      }

      subArr.push(eng[currentEng]);
      currentEng++;
    }

    // increment date by two weeks and save group to map
    myDate.setDate(myDate.getDate() + 14);
    result[
      myDate.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    ] = subArr;
  }

  return result;
};

console.log(
  qaRotation(6, [
    "David",
    "Marco",
    "Sophie",
    "Stephanie",
    "James",
    "Kelly",
    "Luke",
    "Mandy",
    "Maryanne",
  ])
);
