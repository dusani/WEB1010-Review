// Question 9

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value, or returns the first value if both of them
// are equal.
// Then test your function inside of a console.log by calling it with two
// different numbers and again in another console.log with two equal numbers.
function maxOf2(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else if (a === b) {
    console.log(`Both numbers are equal`);
  }else {
    console.log(`${a} is less than ${b}`);
  }
}

maxOf2(10, 2)
maxOf2(15, 15)
maxOf2(3, 17)
