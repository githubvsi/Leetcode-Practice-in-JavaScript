/* 283. Move Zeros 

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*********************************************************************/

/**
 * JavaScript
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /* Solution: Traverse the array. When encounters a 0, delete it and add a 0 at the end of the array.
 */

var moveZeroes = function(nums) {
    var i;
    var len = nums.length;      // The original length of the nums
    for(i=0; i<len; i++){       // Traverse nums
        if(nums[i]===0){        // When encounters 0
            nums.splice(i, 1);  // Delete it
            len--;              // The length of nums changed
            i--;                // Move the index backward by 1
            nums.push(0);       // Add a 0 to the end of num
        }
    }
};