// ## Exercise 2: Loops - FIZZBUZZ

// FIZZBUZZ is a classic Programmer's challenge often used as part of job interviews.

// User inputs the ending value (e.g. 100)

// #### Your code should start at 1 and then iterate each number up to the maximum
// * If the current number is evenly divisible by 3 you should print "FIZZ" and the number
// * If the current number is evenly divisible by 5 you should print "BUZZ" and the number
// * If the current number is evenly divisible by both 3 and 5 you should print "FIZZBUZZ" and the number
// * Otherwise, just print the number to the console
let userInput = prompt("Enter a number"); // user chooses the ending value
for (i = 1; i <= userInput; i++) {
  // iterate from number 1 to the number entered by the user
  if (i % 15 === 0) {
    // if a number is divisible by 3 and 5 print FIZZBUZZ and the number
    console.log("FizzBuzz " + i);
  } else if (i % 3 === 0) {
    // if a number is divisible by 3 print FIZZ and the number
    console.log(i + "Fizz " + i);
  } else if (i % 5 === 0) {
    // if a number is divisible by 5 print BUZZ and the number
    console.log(i + "Buzz " + i);
  } else {
    // otherwise just print the number to the console
    console.log(i);
  }
}
