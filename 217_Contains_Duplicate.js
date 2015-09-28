/* 217 Contains Duplicate

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

************************************************************************/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 /* Solution 1: Hashmap
  * Consider each element in the array a key in the hashmap. If the key is duplicated, then returns true.
  * Note: 
  * A JavaScript hashmap is an object.
  * A hashmap key has to be a string in JavaScript
  * How to create and manipulate a JavaScript hashmap?
  * https://sunfishempire.wordpress.com/2014/08/19/5-ways-to-use-a-javascript-hashmap/
 */
var containsDuplicate = function(nums) {
    var tb = {};    // Create a hashmap
    var i, key;
    // Traverse each element in the array
    for(i=0; i<nums.length;i++){
        key = nums[i].toString();   // Convert the array element to a string so it can be a key in the hashmap
        if(key in tb){      // If the key is already there - duplicates!
            break;
        }
        else{               // If no key is found, add it as a key
            tb[key] = true;
        }
    }
    
    // If the loop didn't break in the middle, then no duplicates were found.
    if(i===nums.length){	
        return false;
    }
    else{
        return true;
    }
};




/**
 * @param {number[]} nums
 * @return {boolean}
 */

 /* Solution 2: Array .sort()
  * Sort nums first. Then compare the adjacent elements. 
 */
var containsDuplicate = function(nums) {
    // When there are no or only 1 element in nums
    if(nums.length===0 || nums.length===1){
        return false;
    }

    // When there are more than 1 element in nums
    var newArr = nums.sort();   // Sort nums
    var i;
    for(i=0; i<newArr.length-1; i++){ // Compare all adjacent elements
        if(newArr[i]===newArr[i+1]){
            return true;
        }
    }
    if(i===newArr.length-1){  // Traversing to the end of nums suggests no duplicates found 
        return false;
    }
    
};