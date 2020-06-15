/*******************************************************************************
 * Your code here!
 ******************************************************************************/

function getInput(n) {
  return process.argv[n + 2];
}
//--the 'input' variable below stores the return value into a variable.--
let input = getInput(0)
console.log(input)


function divisible() {
  if (input % 15 === 0){
    console.log('FizzBuzz');
 } else if (input % 5 === 0){
    console.log('Buzz');
 } else if (input % 3 === 0){
    console.log('Fizz');
} else {
    console.log(input);
} 


}
//other ways to write the solution?
// if ([input % 3] === 0){
//   return 'Fizz';
//   } else if ([input % 5] === 0){
//     return 'Buzz';
//   } else if ([input % 3] === 0  && [input % 5] === 0){
//     return 'FizzBuzz';

// if ([input % 3] === 0  && [input % 5] === 0){
//   return 'FizzBuzz';
//   } else if ([input % 5] === 0){
//     return 'Buzz';
//   } else if ([input % 3] === 0){
//     return 'Fizz';
//   } else{
//     return input;






/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  So if the app was launched using the command `node main.js 5 8`, for example,
  5 would be the first argument, and 8 the second.

  Our helper function takes a number as a parameter and returns the argument
  with that index, as a string.

  If no argument with the given index was used when launching the app,
  undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string. Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined

  For most apps, you will need multiple inputs from the user, but for this 
  one, getInput(0) should be all you need.
 ******************************************************************************************/

function getInput(i) {
  return process.argv[i + 2];
}
