const arg = process.argv[2];

// Convert the argument to an integer using Number()
const num = Number(arg);

// Check if the argument is a valid number
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
