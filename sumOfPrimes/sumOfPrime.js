/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
    // your code here..
  debugger;
    var sumPrimes = 0
    //find all primes that are less than n
    for(var i = 2;i<n;i++) {
    	var isprime = true;
    	for(var j= 2;j<=i;j++) {
    		if(i%j===0 && j!==i) {
    			isprime=false
    		}
    	}
    	if(isprime) {
    		sumPrimes+=i
    	}
    }
    return sumPrimes;
}
