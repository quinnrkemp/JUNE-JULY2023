// CHALLENGE NAME- Parse nice int from char problem

// DESCRIPTION:

// You ask a small girl,"How old are you?" She always says, "x years old", where x 
// is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be
// "1 year old" or "5 years old". The first character in the string is always a number.

// // ***STARTER CODE***

// function getAge(inputString){
//     // return the girl's correct age as an integer. Happy coding :) 
//     }

// //   ******TEST CASES*****

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(getAge("4 years old"), 4);
//   })
// })

// ******MY ANSWER********

function getAge(ipt){
    return Number(ipt[0])
    //   if (ipt === 1) {
  //     return `${ipt} year old`
  //   }
  //   else {
  //     return `${ipt} years old`
  //   }