// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q6
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000
//
// ANSWER: the number you should see in the console is 3127500

let result = 0;
for (let number = 0; number <= 5000; number++) {
  if (number % 4 === 0) {
    result += number;
  }
}
console.log(result);
