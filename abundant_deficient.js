/* 
Daily Programmer Challenge #243 [easy] 2015-11-30
https://www.reddit.com/r/dailyprogrammer/comments/3uuhdk/20151130_challenge_243_easy_abundant_and/

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

var divisors = [];

var getDivisors = function(num) {
    for (i = 0; i <= num; i++) {
        if (num % i == 0) {
            divisors.push(i)
        }    
    }
};

// add divisors together
var addRounded = function(previousValue, currentValue) {
    return previousValue + Math.round(currentValue);    
};

var deficientBy = function(num, sum) {
    return (num * 2) - sum;
};

var abundantBy = function(sum, num) {
    return sum - (num * 2);
};

var isDeficient = function(num) {
	getDivisors(num);
	var divisorsSum = divisors.reduce(addRounded, 0)
	if ((num * 2) > divisorsSum) {
		console.log(num + " is deficient by " + deficientBy(num, divisorsSum) + ", and its divisors are " + divisors);
	} else {
		console.log(num + " is not deficient. In fact it is abundant by " + abundantBy(divisorsSum,num) + ", and its divisors are " + divisors);
	}
};

isDeficient(21);





