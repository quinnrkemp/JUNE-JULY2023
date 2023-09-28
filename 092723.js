    // CHALLENGE NAME-  Circular Objects #1 - Running around in circles

    // DESCRIPTION:

//     Task
//     Define a circular object circular such that the following are true:
    
//     circular.value === "Hello World"
//     circular === circular.self
//     circular.self === circular.self.self
//     ... and so on.
    
//     NOTE: The code above is pseudocode. If you actually tested your circular 
//     object like this with equality or identity operators, it would not work 
//     as object literals do not have an intrinsic value.

//     // ***STARTER CODE***

//   // Define your circular object here  

//     //   ******TEST CASES*****
    
// // Since Node 10, we're using Mocha.
// // You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// // Uncomment the following line to disable truncating failure messages for deep equals, do:
// // chai.config.truncateThreshold = 0;
// // Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// // Uncomment the following to use the old assertions:
// // const Test = require("@codewars/test-compat");

// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });

    // ******MY ANSWER********

    const circular = {
        value: `Hello World`
      };
      
      circular.self = circular;