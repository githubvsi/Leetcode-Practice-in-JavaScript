/* 268. Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /* Solution:
  * The missing element is the difference between the sum of the origianl array and the sum of the missing-one-element array
  * To sum all element in an array, use .reduce()
    https://www.airpair.com/javascript/javascript-array-reduce
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */
var missingNumber = function(nums) {
    
    // Sum of 0, 1, 2, ..., n
    var total = nums.length*(nums.length+1)/2;	// n equals to nums.length

    // Sum of the missing-one-element array
    var total_nums = nums.reduce(function(a,b){return a+b;});
    
    // Get the difference
    return total-total_nums;
};