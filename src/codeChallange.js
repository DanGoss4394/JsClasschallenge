// ## CODE CHALLENGES
// #### Challenge One:
// - Write a function that accepts a string and converts the first letter of each word of the string to upper case
// - Example: `the quick brown fox`
//   - Should Return:  `The Quick Brown Fox`
// #### Challenge Two:
// - Write a function that accepts two arrays and combines them by alternatingly taking elements.
//   - Example: ["a","b","c"], [1,2,3]
//     - Should return: ["a",1,"b",2,"c",3]



//  {
//   const string = `the quick brown fox`;
// }
export function string(str) {
  const array1 = str.split(" ");
  const newArray1 = [];
  for(let i = 0; i < array1.length; i++){
      newArray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newArray1.join(' ');
}
console.log(string("the quick brown fox"));

export function join(arrOne, arrTwo) {
  const maxLength = Math.max(arrOne.length, arrTwo.length);
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push(arrOne[i]);
    result.push(arrTwo[i]);
  }
  return result.filter((value) => value !== undefined);
}
console.log(join( ["a","b","c"], [1,2,3]))
