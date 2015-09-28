/* 219 Contains Duplicate II

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.

*************************************************************************/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

 /* Solution 1: Time limit exceeded
  * Traverse nums, find the first same element from the ith element using .indexof(). If no element is found, then false; if index difference > k, then false; otherwise returns true.
 */
var containsNearbyDuplicate = function(nums, k) {
    var i, j;
    var temp;
    for(i=0; i<nums.length; i++){
        temp = nums[i];
        delete nums[i];	// Use delete because it leaves a hole so no index shifting
        j = nums.indexOf(temp);
        if(j>0 && Math.abs(i-j)<=k){	
            return true;
        }
    }
    // If traversing has reached the end 
    if(i===len){
        return false;
    }    
};


/* Solution 2: Hashmap
 * Key: element value
 * Value: element index
 * Case 1: There is no duplicate, then add the element to hashmap. Keep traversing 
 * the array.
 * Case 2: There is duplicate, found by comparing the key. 
 * Case 2-a: If index difference <= k, returns true.
 * Case 2-b: If index difference > k, replace the old value (index) with * the current one.
 * If traversing reaches the end, then returns false.
 */

 var containsNearbyDuplicate = function(nums, k) {
    var map = {};   // Create a hashmap
    var i, key;
    for(i=0; i<nums.length; i++){   // Traverse nums
        key = nums[i];          // key of the hashmap

        // if(map[key]) is not exactly equivalent to if(key in map)
        // Difference 1:
        // When there is not duplcate, map[key] returns undefined, falsy;
        // When there is duplicate, map[key] returns a value, truthy, 
        // with one EXCEPTION that when map[key]===0, falsy.
        // Difference 2:
        // When there is no duplicate, map[key] creates a key with the value key
        // But not in if(key in map)

        // Case 1 and Case 2-b are essentially the same, can be combined

        if(key in map){      // Duplicate found
            if(Math.abs(i-map[key])<=k){    // Case 2-a. map[key] is the closest index of the same value
                return true;
            }
        }   

        map[key] = i;   // Both Case 1 and Case 2-b.
           
    }

    return false;   // When loop ends no true has been returned
};