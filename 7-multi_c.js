const x = Number(process.argv[2]);

// Check if x is a valid number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // Use a loop to print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
