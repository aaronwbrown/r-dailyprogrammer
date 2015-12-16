/*
Write A function that takes an amount of money, rounds it to the nearest 
penny and then tells you the minimum number of coins needed to equal that amount of 
money. 

For Example: "4.17" would print out:
Quarters: 16
Dimes: 1
Nickels: 1
Pennies: 2

Input Description
Your Function should accept a decimal number (which may or may not have an actual decimal, in which you can assume it is an integer representing dollars, not cents). 
Your function should round this number to the nearest hundredth.

Output Description

Print the minimum number of coins needed. The four coins used should be 25 cent, 
10 cent, 5 cent and 1 cent. It should be in the following format:
Quarters: <integer>
Dimes: <integer>
Nickels: <integer>
Pennies: <integer>
Sample Inputs & Outputs

Sample Input:
1.23

Sample Output:
Quarters: 4
Dimes: 2
Nickels: 0
Pennies: 3
Challenge Input

10.24
0.99
5
00.06
*/

//This is super sloppy, but it works.

var myNum = .99;
var numBottom = Math.floor(myNum);

var getRemainderAll = function(num) {
    return Math.round((myNum%.25) * 100);
};

var numberOfDimes = function(num) { // find the amount of dimes in the input number
    return Math.floor(getRemainderAll(num) / 10);
};

var remainderAfterDimes = function(num) {
    return ((numberOfDimes(num)*10) - getRemainderAll(num))*-1;
};

var getQuarters = function(num) {
    var quarterRemainder = (num / .25) - (numBottom / .25);  
    var finalQuarters = Math.floor(quarterRemainder) + (numBottom/.25);
    return finalQuarters;
};
var getChange = function(num) {
  var remainderChange = getRemainderAll(num);
  var numDimes = numberOfDimes(num);
  console.log("Dimes " + numDimes);
  var remainder = (numDimes * 10 - remainderChange) * -1;
  if (remainder > 5) { // finding if nickels are needed
        console.log("Nickels: " + 1); // if they are, just add 1 to the string. you will never need more than 1 nickel when finding the lowest amount of coins
        console.log("Pennies: " + Math.round((remainder - 5) * 1)); // taking remainder for pennies
    } else {
        console.log("Nickels: " + 0) // nickels are not needed
        console.log("Pennies: " + Math.round((remainder * 1))); // taking remainder for pennies
    }
};

var changeCalc = function(num) {
    console.log("Quarters: " + getQuarters(num));
    console.log(getChange(num));
};

changeCalc(myNum);

/*
//Input - .99
//OUTPUT
Quarters: 3
Dimes: 2
Nickels: 0
Pennies: 4
*/
