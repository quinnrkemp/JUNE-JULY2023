    // CHALLENGE NAME-  Evil or Odious

    // DESCRIPTION:

    // The number n is Evil if it has an even number of 1's in its binary representation.
    // The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20
    
    // The number n is Odious if it has an odd number of 1's in its binary representation.
    // The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19
    
    // You have to write a function that determine if a number is Evil of Odious, function 
    // should return "It's Evil!" in case of evil number and "It's Odious!" in case of 
    // odious number.
    
    // good luck :)

    // // ***STARTER CODE***

    // function evil(n) {
    //     return "Desired Result"
    // }    

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertEquals(evil(1),"It's Odious!");
    // Test.assertEquals(evil(2),"It's Odious!");
    // Test.assertEquals(evil(3),"It's Evil!");
    //   });
    // });

    // ******MY ANSWER********

    function evil(n) {
        number = n.toString(2);
        count = 0;
       for(var i = 0; i<number.length; i++){
         if(number[i]=="1") count++
       }
       
       
         if(count%2==0)
          return "It's Evil!"; 
         else 
          return "It's Odious!";
      }