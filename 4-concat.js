// Get command line arguments (excluding 'node' and script name)
const args = process.argv.slice(2);

// Extract the first and second arguments
const firstArg = args[0];
const secondArg = args[1];

// Print in the format: "<firstArg> is <secondArg>"
console.log(`${firstArg} is ${secondArg}`);
