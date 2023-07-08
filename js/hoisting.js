// const background = "red";

// consol.log(background);
// debugger;

// const color = "green";

// function Random() {
//     console.log("The Random function");

// }
//  Random();

//Example of hoisting of variable
// console.log(test);
// var test;

//Example of hoisting of function
// Hoist(); 
// function Hoist() {
//     console.log("This hoisted function");
// }

//TASK

// 1. Create a function named "Calculate"
// 2. Add two number while passing them as arguments
// 3. And print the number that you are added
// 4. Call the "Calculate" function

// function Calculate(num1,num2,num3) {
//  let result=num1*num2*num3
//   console.log("The multiply is",result)
// }

// Calculate(4,5,6);

// 1. Passing the three arguments in the function
// 2.Assign a variable of these values such a, b, c e.g "a = 3"
// 3. a = b,b = a and c = " " and so on 

// function Calculate(a,b,c) {
    // function calculate(a, b, c) {
    //     console.log("Initial values:");
    //     console.log("a =", a);
    //     console.log("b =", b);
    //     console.log("c =", c);
      
    //     [a, b, c] = [b, a, ""];
    //     console.log("\nAfter variable assignments:");
    //     console.log("a =", a);
    //     console.log("b =", b);
    //     console.log("c =", c);
    //   }
      
    //  // Pass three arguments to the calculate function
    //   calculate(3, 5, "e");
      
      
    // function Calculate (a, b, c) {
      
    //     console.log(a, b, c);
    //   let temp;
    //   temp = b;

    //   b = c;

    //   c = temp;

    //     // let a = num1;
    //     // let b = num2;
    //     // let c = num3;
         
    //     // console.log(a, b, c);
    //     // a = num2;
    //     // b = num1;

    //     console.log("new abc value :" ,a, b, c);

    // }

    // Calculate(3, 5, 7)
      
      function Calculate(a, b, c){
        console.log(a, b, c);
        let temp;
        temp = a;
        a = b;
        b = temp;
        console.log("new abc value:",a, b, c);

      }
      
      Calculate (4, 5, 7);
      
      



