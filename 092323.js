    // CHALLENGE NAME-  No zeros for heros

    // DESCRIPTION:

    // Numbers ending with zeros are boring.

    // They might be fun in your world, but not here.
    
    // Get rid of them. Only the ending ones.
    
    // 1450 -> 145
    // 960000 -> 96
    // 1050 -> 105
    // -1050 -> -105
    // Zero alone is fine, don't worry about it. Poor guy anyway

    // // ***STARTER CODE***

    // function noBoringZeros(n) {
    //     // your code
    //   }    

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests",function() {
    //   it("noBoringZeros",function() {
    //     assert.strictEqual(noBoringZeros(1450), 145)
    //     assert.strictEqual(noBoringZeros(960000), 96)
    //     assert.strictEqual(noBoringZeros(1050), 105)
    //     assert.strictEqual(noBoringZeros(-1050), -105)
    //     assert.strictEqual(noBoringZeros(-105), -105)
    //     assert.strictEqual(noBoringZeros(0), 0)
    //   })
    // })
    
    // ******MY ANSWER********

    function noBoringZeros(n) {
        let a= n.length
        let b= n.length-1
          if (a===1 || n[b]===0) {
          return n
        }
          else {
            return n.substring(0,n[b])
          }
          // your code
        }****this answer is not correct. 