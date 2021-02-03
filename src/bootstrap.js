import classChallenge, { greeting, array } from "./classChallenge";

console.log(classChallenge());
console.log(greeting);
console.log(array());

function string(str) {
  str = str.split(" ");
  const newArray1 = [];
  for (let i = 0; i < str.length; i++) {
    newArray1.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }
  return newArray1.join(" ");
}
console.log(string("the quick brown fox"));

function join(arrOne, arrTwo) {
  const maxLength = Math.max(arrOne.length, arrTwo.length);
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push(arrOne[i]);
    result.push(arrTwo[i]);
  }
  return result.filter((value) => value !== undefined);
}
console.log(join(["a", "b", "c"], [1, 2, 3]));
