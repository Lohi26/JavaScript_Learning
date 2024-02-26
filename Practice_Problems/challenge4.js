const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.question("What is your age? ", (age) => {
    console.log("Your age is: " + age);
    rl.close();
  });
});


