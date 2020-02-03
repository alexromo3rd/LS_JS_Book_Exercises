// let name = prompt('Please enter your name.');
// let greeter = name => console.log(`Hello, ${name}!`)
// greeter(name);

let rlSync = require('readline-sync');
let firstName = rlSync.question('Please enter your first name.\n');
let lastName = rlSync.question('Please enter your last name.\n');
console.log(`Hello, ${firstName} ${lastName}.`);