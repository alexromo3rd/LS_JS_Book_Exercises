// 1.
console.log('John ' + 'Doe');

// 2.

// 3. 
'true' // String
flase // Boolean
1.5 // Number
2 // Number
undefined // undefined
{ foo: 'bar' } // Object

// 4.
var foo; // statement
foo = 5 // expression
foo; // expression

// 5.
console.log('5' + 10); // => '510'
/* 
This results in '510' because JavaScript uses type coercion to 
implicitely convert the number 10 to '10'. It then adds '5' to '10'
which results in '510'
*/

// 6.
console.log(Number('5') + 10);

// 7.
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)

// 8.
// No, the result will be undefined returned to the console.

// 9. 
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

// 10.
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard'
}

// 11. 
// Results in false since comparing two values also looks at upper or lower case.

// 12.
// Will result in 3.

// 13.