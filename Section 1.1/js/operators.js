var date = new Date();
var currentYear = date.getFullYear();
console.log(currentYear);
var result, nextYear, intoFuture, dob, three;
dob = 1984;
// math operator minus
result = currentYear - dob;
console.log(result);

// math operator plus
nextYear = 1;
result = currentYear + nextYear;
console.log(result);

// math operator multiply
three = 3;
result = currentYear * three;
console.log(result);

// math operator division
three = 3;
result = currentYear / three;
console.log(result);

// LOGICAL OPERATORS >, <
var first, second, isBigger, isSmaller;
first = 10;
second = 5;
isBigger = first > second;
isBigger = first < second;
console.log("isBigger: " + isBigger);
console.log("isSmaller: " + isSmaller);