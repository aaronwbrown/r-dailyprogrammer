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

var myNum = 45.67;

var decimalToWhole = function(num) { // function to change a decimal into a whole number
    var inputNum = (num); // working variable
    var numCeil = Math.ceil(inputNum); // take top of the whole number
    var numDiff = numCeil - inputNum; // difference between top whole and inputNum
    var numDecimal = 1 - numDiff; // find decimal amount
    var numWhole = Math.floor(numDecimal * 100); // convert to whole number and take bottom (long decimal sensitivity not a factor)
    return numWhole; // return value
};
var numQuarters = function(num) { // find the amount of quarters in the input number
    console.log("Quarters: " + Math.floor(num) / .25);
};
var numberOfDimes = function(num) { // find the amoung of dimes in the input number
    return Math.floor(num / 10);
};
var remainder = function(num) { // find the remainder after taking out the dimes
    return (numberOfDimes(num) * 10 - num) * -1;
};
var newFunc = function(num) { // function to determine the smallest amount of change (not including quarters) needed
    var numToWhole = decimalToWhole(num) // converting input number into our numWhole format
    console.log("Dimes: " + numberOfDimes(numToWhole)); // taking input and finding the number of dimes needed
    if (remainder(numToWhole) > 5) { // finding if nickels are needed
        console.log("Nickels: " + 1); // if they are, just add 1 to the string. you will never need more than 1 nickel when finding the lowest amount of coins
        console.log("Pennies: " + (remainder(numToWhole) - 5) * 1); // taking remainder for pennies
    } else {
        console.log("Nickels: " + 0) // nickels are not needed
        console.log("Pennies: " + (remainder(numToWhole) * 1)); // taking remainder for pennies
    }
};
var changeCalc = function(num) {
    numQuarters(num);
    newFunc(num);
};

changeCalc(myNum);

/*
//Input - 45.67
//OUTPUT
Quarters: 180
Dimes: 6
Nickels: 1
Pennies: 2
*/
