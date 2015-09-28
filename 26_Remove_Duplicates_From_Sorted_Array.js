/* Remove Duplicates from Sorted Array

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /* Solution 1: Delete duplicates in place
  * Traverse the array and delete duplicates using splice(start, rep)
  * When traversing reaches the end, check the last element to see if it is properly handled 
  * But it is expensive to repeatedly use splice() becaue it shifts the array everytime.
  */

var removeDuplicates = function(nums) {
    var i, start=0, rep=0;
    
    for(i=1; i<nums.length; i++){
        if(nums[i]===nums[i-1]){
            rep++;
        }
        else if(rep===0){
           start++;
        }
        else{
            nums.splice(start+1, rep);	// delete the duplicates
            i = start;  // Because elements are shifted, make i points to start
            rep = 0;    // reset rep
        }
    }
    if(rep>0){      // there are duplicates at the end of nums
        nums.splice(start+1, rep);
    }
};


/* Solution 2: Improved traversing
 * Traverse through the array. If an element is different from the one next to it, append it to the array.
   Traverse till the second-to-last element. Append the last element to the array. Because:
   (1)If the last element is different to the second-to-last one, append it to the end of the array;
   (2)If the last element is the same as the second-to-last, with the value 'v', since second-to-last element has not be appended to the second to last, so append the last one.
   In either case, append the last element to the array.
   Then delete the original array. The rest of the array has no duplicates.
 */
 var removeDuplicates = function(nums) {
    var i;
    var len = nums.length;
    
    if(len===0 || len===1){
        return nums;
    }
    
    
    for(i=0; i<len-1; i++){
        if(nums[i]!==nums[i+1]){
            nums.push(nums[i]);
        }
    }
    nums.push(nums[len-1]);		// Append the last element in nums to the array
    
    nums.splice(0, len);		// Delete the origial array.
    
    return nums;
};