/**
 * Computes the factorial of a non-negative integer recursively.
 * Factorial of NaN is 1.
 *
 * @param {number} n The integer for which to compute the factorial.
 * @returns {number} The factorial of n.
 */
function calculateFactorial(n) {
  // Cast the argument to an integer
  const num = parseInt(n);

  // Base case for factorial of 0 or NaN
  if (isNaN(num) || num === 0) {
    return 1;
  }

  // Handle negative numbers (factorials are typically for non-negative integers)
  if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
    return NaN; // Or throw an error, depending on desired behavior
  }

  // Recursive step
  return num * calculateFactorial(num - 1);
}

// Get the first command-line argument
const inputArgument = process.argv[2];

// Compute and print the factorial
const result = calculateFactorial(inputArgument);

if (!isNaN(result)) {
  console.log(`The factorial of ${inputArgument} is: ${result}`);
}
