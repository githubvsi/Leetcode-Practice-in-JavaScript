/* 238 Product of Array Except Self

Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
 /* Solution: Forward-backward traversal 
  * For the ith element, get left[i], product of all elements on its left, 
  * and right[i], product of all elements on its right
  * result[i] = left[i] * right[i]
  * O(n)
  */
var productExceptSelf = function(nums) {
    var left = [];
    var right = [];
    var result = [];
    
    var n = nums.length;
    left[0] = 1;
    right[n-1] = 1;
    
    // traverse from front
    var i;
    for(i=1; i<n; i++){
        left[i] = left[i-1] * nums[i-1];
    }
    // traverse from back
    for(i=n-2; i>=0; i--){
        right[i] = right[i+1] * nums[i+1]; 
    }
    
    // Fill result array
    for(i=0; i<n; i++){
        result[i] = left[i] * right[i];
    }
    return result;
};