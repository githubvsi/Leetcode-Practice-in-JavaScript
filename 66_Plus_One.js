/* 66. Plus One
 * Given a non-negative number represented as an array of digits, plus one to the number.

 * The digits are stored such that the most significant digit is at the head of the list.

************************************************************************************/

/**
 * @param {number[]} digits
 * @return {number[]}
 */

 /* Solution: Number addition
  * From the element with the highest index, add 1, check if carry===1 or 0. Add the carry to the number of the second-to-highest index, and so forth. 
  */
var plusOne = function(digits) {
    var result = [];
    var carry = 1;
    var i;
    
    for(i=digits.length-1; i>=0; i--){	// from the highest index
        if(digits[i] + carry===10){
            digits[i] = 0;
            carry = 1;
        }
        else{
            digits[i]+=carry;
            carry = 0;
        }
        result.unshift(digits[i]);  // Insert the newly calculated digit at the beginning of the array
    }
    
    if(carry===1){
        result.unshift(1);
    }
    
    return result;
};


/* Solution: Improved Number addition (50% -> 62.9%)
 * changed the if else order
*/
var plusOne = function(digits) {
    var result = [];
    var carry = 1;
    var i;
    
    for(i=digits.length-1; i>=0; i--){	// from the highest index
        if(digits[i] + carry<10){
        	digits[i]+=carry;
        	carry = 0;
        	result.unshift(digits[i]); 
        }

        else {
            digits[i] = 0;
            carry = 1;
            result.unshift(digits[i]); 
        }
    }
    
    if(carry===1){
        result.unshift(1);
    }
    
    return result;
};




