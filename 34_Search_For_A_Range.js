/* 34. Search for a Range

Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 /* Solution: Binary search
 */
var searchRange = function(nums, target) {
    var first = 0, last = nums.length-1;
    var mid;
    
    while(first<=last){	// Search target
        mid = Math.floor((first+last)/2);
        if(nums[mid]<target){
            first = mid + 1;
        }
        else if(nums[mid]>target){
            last = mid - 1;
        }
        else{	// if target was found, then search for the range
            first = mid;
            last = mid;
            // first moves towards front if there is a duplicate
            while(first>0 && nums[first]===nums[first-1]){	
                first--;
            }
            // last moves towards back if there is duplicate
            while(last<nums.length-1 && nums[last]===nums[last+1]){
                last++;
            }
            return [first, last];
        }
    }	// while loop ends if no target was found
    
    return [-1, -1];
        
};