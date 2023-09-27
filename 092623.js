    // CHALLENGE NAME-  Exclusive "or" (xor) Logical Operator

    // DESCRIPTION:

//     In some scripting languages like PHP, there exists a logical 
//     operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" 
//     (hence the name of this Kata). The exclusive or evaluates two 
//     booleans. It then returns true if exactly one of the two expressions 
//     are true, false otherwise. For example:

//     false xor false == false // since both are false
//     true xor false == true // exactly one of the two expressions are true
//     false xor true == true // exactly one of the two expressions are true
//     true xor true == false // Both are true.  "xor" only returns true if EXACTLY 
//     one of the two expressions evaluate to true.

//     Task
// Since we cannot define keywords in Javascript (well, at least I don't know 
// how to do it), your task is to define a function xor(a, b) where a and b are 
// the two expressions to be evaluated. Your xor function should have the 
// behaviour described above, returning true if exactly one of the two 
// expressions evaluate to true, false otherwise.

//     // ***STARTER CODE***

//     function xor(a, b) {
//         // TODO: Program Me
//       } 

//     //   ******TEST CASES*****
    
//     const {assert} = require("chai");

//     describe("Your 'xor' function/operator", () => {
//       it("should work for the four basic cases described above", () => {
//         assert.strictEqual(xor(false, false), false, "false xor false");
//         assert.strictEqual(xor(true, false), true, "true xor false");
//         assert.strictEqual(xor(false, true), true, "false xor true");
//         assert.strictEqual(xor(true, true), false, "true xor true");
//         assert.notStrictEqual(xor(true, true), true, "true xor true: 'xor' 
//         is NOT identical to 'or'");
//       });
//     });

    // ******MY ANSWER********

    function xor(a, b) {
        return a===b ? false: true 
          
          // TODO: Program Me
        }