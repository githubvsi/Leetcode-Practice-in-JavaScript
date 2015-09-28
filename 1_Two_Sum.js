/* 1. Two Sum

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
************************************************************************************/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 /* Solution 1: Brute force
    Traverse each element in the array to see if there is an element after it so that the sum of them is the target. 

  * Solution 2: Use a hashmap
    Because each input would have exactly one solution, so there are NOT duplicated elements
    1. Put all elements in a hashmap. Key: element's value; value: element's index
    2. Traverse the hashmap. If map[key1]+ map[key2] = target, then compare their indice and return them.
 */

var twoSum = function(nums, target) {
    var result = [];
    var map = {};
    var i;

    // Put all elements in map
    for(i=0; i<nums.length; i++){
        map[nums[i]] = i;        
    }
    
    // Traverse map
    for(i=0; i<nums.length; i++){
        if(map[target-nums[i]]){	// if key2 exists
        	// Compare two indice
            if(i<=map[target-nums[i]]){
                result.push(i+1);	// i+1 because index starts from 1 instead of 0
                result.push(map[target-nums[i]]+1);  
                break;
            }
            else{
                result.push(map[target-nums[i]]+1);
                result.push(i+1);
                break;
            }
        }
    }
    return result;
};
