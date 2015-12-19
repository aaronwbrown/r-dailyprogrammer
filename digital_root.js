/*
As a crude form of hashing function, Lars wants to sum the digits of a number. Then he wants to sum the digits of the result, and repeat until he has only 
one digit left. He found this is called the digital root of a number, but the Wikipedia article is just confusing him. Can you help him implement this problem in your 
favourite programming language?

It is possible to treat the number as a string and work with each character at a time. This is pretty slow on big numbers, though, so Lars wants you to at least try 
solving it with only integer calculations (the modulo operator may prove to be useful!).
Author: TinyLebowski

Formal Inputs & Outputs

Input Description
A positive integer, possibly 0.

Output Description
An integer between 0 and 9, the digital root of the input number.

Sample Inputs & Outputs

Sample Input
31337

Sample Output
8, because 3+1+3+3+7=17 and 1+7=8

Challenge Input
1073741824

Challenge Input Solution
?

Functional Iteration

var myNum = 1073741824;

var digitalRoot = function(num) {
    numString = num.toString();
    numLength  = numString.length;
    myArray = [];
    sumArray = [];
    function addRounded (previousValue, currentValue) {
        return previousValue + Math.round(currentValue);
    }
    for (var i = 0; i < numLength; i++) {
        myArray.push(Math.floor(numString[i]));
    }
    sumNum = myArray.reduce(addRounded, 0);
    sumString = sumNum.toString();
    sumLength = sumString.length
    for (var j = 0; j < sumLength; j++) {
        sumArray.push(Math.floor(sumString[j]));
    }
    digitalRoot = sumArray.reduce(addRounded, 0)
    if (digitalRoot > 9) {
        digString = digitalRoot.toString();
        digLength = digString.length;
        digArray = [];
        for (var k = 0; k < digLength; k++) {
            digArray.push(Math.floor(digString[k]));   
        } return digNum = digArray.reduce(addRounded, 0);
    } else {
        return digitalRoot;
    }
};

digitalRoot(myNum);
*/

//SUPER SIMPLE Mod Solution

var myNum = 1073741824;

var digitalRoot = function(num) {
  digNum = num % 9; 
  if (digNum > 9) {
        return digNum % 9;
  } else {
        return digNum; 
  }
};

digitalRoot(myNum);
