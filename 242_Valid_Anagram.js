/* 242. Valid Anagram
 * Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

**********************************************************************************/

/* Solution: Use a hashmap to check if two strings have the same letters with the 
 * same number
 * string 1: use each letter as the key, and the number of the letter as value
 * string 2: to compare it with string 1
   Case 1: different length --> false
   Case 2: same length
   Case 2-a: a letter in string 2 cannot be found in the key of the hashmap --> false
   Case 2-b: all letters in string 2 can be found in the key of the hashmap
             value-- when found
        2-b-1: if all values are 0 --> true
        2-b-2: if any value is not 0 --> false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
   if(s.length!==t.length){		// Case 1
       return false;
   }
   
   // Create a hashmap based on s
   var i;
   var tb = {}; 
   for(i=0; i<s.length; i++){
       if(tb[s[i]]){
           tb[s[i]]++;
       }
       else{
           tb[s[i]] = 1;
       }
   }
   
   // Check if t is the same as s
   for(i=0; i<t.length; i++){
       if(!(tb[t[i]])){
           return false;	// Case 2-a
       }
       else{
           tb[t[i]]--;
       }
   }
   
   // Check if all values are 0s
   for(var key in tb){
       if(tb[key]!==0){
           return false;	// Case 2-b-2
       }
   }
   
   return true;		// Case 2-b-1
    
}; 