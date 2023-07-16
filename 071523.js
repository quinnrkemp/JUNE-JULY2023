// CHALLENGE NAME-  Switch it UP!

// DESCRIPTION:

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// // ***STARTER CODE***

// function switchItUp(number){
//     //Write your own Code!
//     }

// //   ******TEST CASES*****

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(switchItUp(1),"One");
//     assert.strictEqual(switchItUp(3),"Three");
//     assert.strictEqual(switchItUp(5),"Five");
//   });
// });

// ******MY ANSWER********

function switchItUp(number){
    let num=number
      if(num===0){
      return "Zero"
    }
    else if(num===1){
      return "One"
    }
     else if(num===2){
      return "Two"
    }
     else if(num===3){
      return "Three"
    }
     else if(num===4){
      return "Four"
    }
     else if(num===5){
      return "Five"
    }
    else if(num===6){
      return "Six"
    }
    else if(num===7){
      return "Seven"
    }
      else if(num===8){
      return "Eight"
    }
      else {
      return "Nine"
    }
      //Write your own Code!
    }