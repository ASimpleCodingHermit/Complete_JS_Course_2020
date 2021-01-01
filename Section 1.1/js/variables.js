// This is a single line blockquote
// Variables and Data Types

/*
1. String
2. Number
3. Boolean
4. Undefined
5. Null
*/

// Variables
var firstName = "Joe";
console.log(firstName);
// Numbers
var age = 36;
console.log(age);
// Boolean
var alien = "false";
console.log(alien);
// Undefined
var nonValue;
console.log(nonValue);

// Naming Variables Naming Convention can start with Letter, $, _ and
// but it cannot start with numbers
var $money = 5;
var _lastName = "Chu";

// Variable Type Coercion and Mutation
// Coercion
console.log(firstName + "" + _lastName); //firstName (space) _lastName

// Declare variables in one line
var first, second, third, fourth;
// Assign value in the lines below
first = "Rick";
second = "Lively";
third = 30;
fourth = 5;
// Mutation
console.log(
  "My name is " +
    first +
    " " +
    second +
    ". " +
    "" +
    "I am " +
    "" +
    third +
    " years old."
);
