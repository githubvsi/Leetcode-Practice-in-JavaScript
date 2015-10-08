/* 125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.

******************************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
 /* Solution: 
  * 1. If the string is empty, return true.
  * 2. If the string is empty after all non-alphanumeric chars are removed, return true.
  * 3. Use two pointers.
  * Note: Use regualr expression to remove non-alphanumeric chars
 */
var isPalindrome = function(s) {
	// Step 1
    if(s===''){return true;}
    
    // Step 2
    var arr = s.match(/\w/g);	// /\w searches a-z, A-Z, 0-9, and _; /g prevent the search from stopping at the first occurent
    if(!arr){return true;}
    
    // Step 3
    var i, j;
    for(i=0, j=arr.length-1; i<j; i++, j--){
        if(arr[i].toLowerCase()!==arr[j].toLowerCase()){
            return false;
        }
    }
    return true;
    
};