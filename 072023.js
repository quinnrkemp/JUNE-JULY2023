// CHALLENGE NAME-  Find the Remainder

// DESCRIPTION:

// Write a function that accepts two integers and returns the remainder of 
// dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:

// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to 
// handle this in your language)

// // ***STARTER CODE***

// function remainder(n, m){
//     // Divide the larger argument by the smaller argument and return the remainder
    
//   }

// //   ******TEST CASES*****

// const assert = require('chai').assert;
// describe('Remainder Function', () => {
//   it('Should handle arguments and math as defined in specificaitons', () => {
//     assert.strictEqual(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
//     assert.strictEqual(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter');
//     assert.isNaN(remainder(1, 0), 'Divide by zero should return NaN');
//     assert.isNaN(remainder(0, 0), 'Divide by zero should return NaN');
//   });
// });

// ******MY ANSWER********

function remainder(n, m){
    if (n>=m){
      return n%m
    }
    else if(m>n){
       return m%n
     }
     else {
       return NaN
       }    
     // Divide the larger argument by the smaller argument and return the remainder
     
   }