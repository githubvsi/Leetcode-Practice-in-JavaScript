/* 204. Count Primes

Count the number of prime numbers less than a non-negative number, n.

************************************************************************************/

/* Solution 1: Brute Solution (Time Limit Exceeded)
 * Traverse through [3, n-1]
 * For each number, divide it with all numbers [2, n-1]. It it a prime number if all remainders are not 0.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n===1 || n===2){
        return 0;
    }
    if(n===3){
        return 1;
    }

    var i, j;
    var count = 0;
    for(i=n-1; i>2; i--){	// traverse through [3, n-1]
        for(j=2; j<i; j++){		// divide it with all numbers between 2 and i-1
            if(i%j===0){	// Whenever remainder is 0 --> not a prime
                break;
            }
        }
        if(j===i){		// If all remainders are not 0 --> a prime
            count+=1;
        }
    }
    return count+1;		// Adding 1 because 2 is a prime too.
};



/* Solution 2: Improved Brute Solution (Time Limit Exceeded)
 * Traverse through [3, n-1]
 * For each number, divide it with all numbers [2, n/2]. It it a prime number if all remainders are not 0.
 */
var countPrimes = function(n) {
    if(n===1 || n===2){
        return 0;
    }
    if(n===3){
        return 1;
    }

    var i, j;
    var count = 0;
    for(i=n-1; i>2; i--){	// traverse through [3, n-1]
    	for(j=2; j<Math.floor(i/2)+1; j++){		// divide it with all numbers between 2 and i/2
    		if(i%j===0){	// Whenever remainder is 0 --> not a prime
    			break;
    		}
    	}
    	if(j===i){		// If all remainders are not 0 --> a prime
    			count+=1;
    	}
    }
    return count+1;		// Adding 1 because 2 is a prime too.
};


/* Solution 3: Improved Brute Solution (Time Limit Exceeded)
 * Traverse through [3, n-1]
 * For each number, divide it with all numbers [2, n^0.5]. It it a prime number if all remainders are not 0.
 * Because if n=p*q, and p<=q, then p<=n^0.5
 */


 /* Solution 4: Sieve of Eratosthenes - ? Why TLE?
  * See https://leetcode.com/problems/count-primes/
  * Start with 2, stop with n^0.5
    Because if n=p*q, and p<=q, then p<=n^0.5
  * for example:
  * 2: mark off 4, 6, 8, 10, ..., till n-1
  * 3: mark off 9, 12, 15, ..., till n-1
  * 4: already marked off
  * 5: mark off 5^2, 5^2+5, 5^2+10, ... , till n-1
       starts with 5*5 because 5*2, 5*3, 5*4 has already be marked off by 2, 3, 4 before.
  * till n^0.5.
  The rest numbers are primes.
  */

  var countPrimes = function(n) {
    if(n<3){
        return 0;
    }
    
    var map = {};
    var i, j;
    
    // start with 2 and end with (n-1)^0.5. Use i*i<=n-1 to void expensive i<sqr(n-1)
    for(i=2; i*i<=n-1; i++){ 
        // search the whole hashmap to mark off all non-primer numbers.
        // If number i has been marked off already, no need to proceed to mark off its multiple.
        if(map[i]===false){
            continue;   // skip the current iteration
        }  
       
        for(j=i*i; j<n; j+i){ 	// start with i*i   
            if(map[j]!==false){		// if not found (marked off)
                n--;
            }
            map[j]=false;	// mark it off
            
        }
    }
    return n-2;		// exclude n and 1
};