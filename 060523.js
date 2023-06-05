// CHALLENGE NAME- Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// ****TEST CASES****

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(bmi(80, 1.80), "Normal");
//   });
// });

// *****MY ANSWER*****

function bmi(weight, height) {
    let calc= weight / (height*height)
    if(calc <= 18.5) {
      return "Underweight";
  }
     if(calc <=25.0 ) {
      return "Normal";
  }
       if(calc <=30.0 ) {
      return "Overweight";
  }
         else{
      return "Obese";
  }
    }
    