    // CHALLENGE NAME-  isReallyNaN

    // DESCRIPTION:

    // I've hit a few bugs in my Java/Type/Coffee-script code recently, 
    // and I've traced the problem back to the global isNaN function I was 
    // using. I had expected it to be more discerning, but it's returning 
    // true for undefined right now.

    // Write a function isReallyNaN that returns true only if passed in an 
    // argument that evalutes to NaN, and returns false otherwise.
    
    // Any solution is acceptable!

    // // ***STARTER CODE***

    // const isReallyNaN = (val) => {
    //     // return isNaN(val);  // wasn't working as planned :-(
    //     return true || false;
    //   };  

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.expect(isReallyNaN(37) === false)
    //   Test.expect(isReallyNaN('37') === false)
    //   Test.expect(isReallyNaN(NaN) === true)
    //   Test.expect(isReallyNaN(undefined) === false)
    //     });
    //   });
      
    // ******MY ANSWER********

    const isReallyNaN = (val) => {
        if (Number.isNaN(val)===true) {
          return true
        }
          else {
            return false
            }
        };