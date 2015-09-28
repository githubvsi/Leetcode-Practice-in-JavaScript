/* 27. Remove Element

Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 /* Solution: Use nums.splice(index where to delete, how many to delete) to delete array elements in place
 */
var removeElement = function(nums, val) {
    var i;
    
    for(i=0; i<nums.length; i++){	
        if(nums[i]===val){
            nums.splice(i, 1);	// delete
            i--;		// the elements are shifted after deletion
        }
    }
    return nums.length;
};