// ### Find the Largest Number in the Array
// Write a JavaScript conditional statement to find the largest of the five numbers from the array below.
// Use an alert box to show the result.

// ```const myNumberList = [12, 2112, 9000, 1999, 24];```

a = 12;
b = 2112;
c = 9000;
d = 1999;
e = 24;

if (a > b && a > c && a > d && a > e) {
  // if the number assigned to variable a is larger than the other numbers, print its value to the console
  console.log(a);
} else if (b > a && b > c && b > d && b > e) {
  // otherwise, if the number assigned to variable b is larger than the other numbers, print its value to the console
  console.log(b);
} else if (c > a && c > b && c > d && c > e) {
  // otherwise, if the number assigned to variable c is larger than the other numbers, print its value to the console
  console.log(c);
} else if (d > a && d > c && d > b && d > e) {
  // otherwise, if the number assigned to variable d is larger than the other numbers, print its value to the console
  console.log(d);
} else {
  // otherwise, print the number assigned to variable e
  console.log(e);
}
