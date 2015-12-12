/* 
In number theory, a deficient or deficient number is a number n for which the 
sum of divisors sigma(n)<2n, or, equivalently, the sum of proper divisors 
(or aliquot sum) s(n)<n. The value 2n - sigma(n) (or n - s(n)) is called the 
number's deficiency. In contrast, an abundant number or excessive number is a number 
for which the sum of its proper divisors is greater than the number itself

As an example, consider the number 21. Its divisors are 1, 3, 7 and 21, and their sum is 32. 
Because 32 is less than 2 x 21, the number 21 is deficient. Its deficiency is 2 x 21 - 32 = 10.

The integer 12 is the first abundant number. Its divisors are 1, 2, 3, 4, 6, and 12, and their sum 
is 28. Because 28 is greater than 2 x 12, the number 12 is abundant. It's abundant by is 28 - 24 = 4.


deficient = when the sum of a numbers divisors is less than the number * 2
example = 21. divisors = 1, 3, 7, 21. sum of divisors = 32. number * 2 = 42
21's deficiency is 10 ((2 * 21) - 32 = 10).

abundant = when the sum of a numbers divisors is greater than the number * 2
example = 12. divisors = 1, 2, 3, 4, 6, 12
12's abundance is 4 (28 - 24 = 4).

solution draft - 
How I want to do this is run a modulo loop on all the numbers up to and including the number. 
Those w/o remainders are a divisor.
*/

var myNum = 21;
var myNumTwice = myNum * 2
var divisors = [];
var divisorsSum;

// function to find out of a number is a divisor
var isDivisor = function(number) {
  if (myNum%number === 0) {
      return number;
  }
};

// for loop and if statement storing divisors in the divisors array
for (i = 0; i <= myNum; i++) {
    if (isDivisor(i)) {
        divisors.push(i);
    }
}

// add divisors together
divisorsSum = (eval(divisors.join('+')));

var deficientBy = function() {
	return myNumTwice - divisorsSum;
};

var abundantBy = function() {
	return divisorsSum - myNumTwice;
}

var isDeficient = function() {
	if (myNumTwice > divisorsSum) {
		console.log(myNum + " is deficient by " + deficientBy() + ", and its divisors are " + divisors);
	} else {
		console.log(myNum + " is not deficient. In fact it is abundant by " + abundantBy() + ", and its divisors are " + divisors);
	}
};



console.log(isDeficient());




