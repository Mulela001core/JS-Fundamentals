function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the first argument and convert it to a number
const num = Number(process.argv[2]);

// Print the result in the format: "Factorial <result>"
console.log("Factorial", factorial(num));
