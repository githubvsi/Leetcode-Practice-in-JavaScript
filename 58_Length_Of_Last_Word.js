/* 58. Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.

*****************************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
 /* Solution 1: trim() all whitespace at the beginning and end of the string, then find the index of the last whitespace. Calculate the length of the last word based on  the index and the length of the trimmed string.
 */
var lengthOfLastWord = function(s) {
    var tr = s.trim();  // remove whitespace from both side of s
    var len = tr.length;
    if(len===0){  // if no chars left --> no last word found
        return 0;
    }
    else{
        return len-1-tr.lastIndexOf(' ');
    }
    
};

/**
 * @param {string} s
 * @return {number}
 */
 /* Solution 2: Use regular expression to conver the string into an array. If the array is not empty, return the length of the last element of the array.
 */
var lengthOfLastWord = function(s) {
    var tr = s.trim();  // remove whitespace from both side of s

    var splitArr = tr.split(/ +/);  // Split the string into an array of subarrays separated by one or more whitespace
    return splitArr ? splitArr[splitArr.length-1].length : 0;
    
};