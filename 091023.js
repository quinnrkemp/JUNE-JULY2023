    // CHALLENGE NAME-  Training JS #29: methods of arrayObject---concat() and join()

    // DESCRIPTION:

    // Coding in function bigToSmall. function accept 1 
    // parameter arr(2D number array).

    // Your task is: First to all, refer to the example 
    // above, flat output arr to a one-dimensional array.
    
    // And then sort array in descending order.
    
    // Finally, use the separator ">" to connect the elements 
    // into a string.
    
    // Don't complain about the situation like 1>1 is not 
    // reasonable, it is just a separator.
    
    // Some example:
    
    // bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
    // bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
    // bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"

    // // ***STARTER CODE***

    // function bigToSmall(arr){
    //     //coding here...
        
    //   } 

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //       Test.assertSimilar(bigToSmall([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1");
    //       Test.assertSimilar(bigToSmall([[1,3,5],[2,4,6]]) , "6>5>4>3>2>1");
    //       Test.assertSimilar(bigToSmall([[1,1],[1],[1,1]]) , "1>1>1>1>1");
    //     });
    //   });

    // ******MY ANSWER********

    function bigToSmall(arr){
        //coding here...
        let res = [].concat(...arr);
        res.sort(function(a, b){return a - b});
        res.reverse();
        res = res.join(">");
        return res;
      }