/*
The Challenge

First, you mash in a random large number to start with. Then, repeatedly do the following:

If the number is divisible by 3, divide it by 3.

If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.

The game stops when you reach "1".

Challenge Description
The input is a single number: the number at which the game starts. Write a program that plays the Threes game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1. Input Description
The input is a single number: the number at which the game starts. 100
Output Description
The output is a list of valid steps that must be taken to play the game. Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.
100 -1 
33 0 
11 1 
4 -1 
1
***
Challenge Input
31337357
*/

var myNum = 31337357;
var number;

var checkDivisible = function(number) {
	if (number%3 === 0) {
      console.log(number)
      return number / 3;
  } else {
  		if ((number - 1)%3 === 0) {
  			console.log(number + " -1")
  			return (number -1) / 3;
  		} else {
  			console.log(number + " +1")
  			return (number + 1)/3;
  		}
  	}
};

do {
	myNum = checkDivisible(myNum);
}
while (myNum > 1);

/*

The output

31337357 +1
10445786 +1
3481929
1160643
386881 -1
128960 +1
42987
14329 -1
4776
1592 +1
531
177
59 +1
20 +1
7 -1
2 +1
=> 1

*/
