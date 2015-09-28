/* 169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /* Solution 1: Brute force
 */

 /* Solution 2: Map all elements to a hashmap. 
  * Key: value of the array element
  * Value: occurrence of the array element
  * Then find out the key with the largest value (highest occurrence of an element) using Object.keys.reduce(...); 
 */
var majorityElement = function(nums) {
    var map = {};
    var i;
    
    // Map all elements to a hashmap and record the occurrence of each element
    for(i=0; i<nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }
        else{
            map[nums[i]]++;
        }
    }
    
    // Get the element with the largest occurrence -> Get the key with the largest value
    // Object.keys(someObj) returns all enumerable properties of someObj
    // .reduce(someFunction())
    // https://www.airpair.com/javascript/javascript-array-reduce
    var res_str = Object.keys(map).reduce(function(a,b){ return map[a] > map[b] ? a : b});
    return parseInt(res_str);  
    
};


/* Solution 3: Sort the array first. Then the element in the middle is the majority number*/
var majorityElement = function(nums) {

	// Sort numerical array
	// http://www.w3schools.com/jsref/jsref_sort.asp
    nums.sort(function(a,b){return a-b});

    var index = Math.floor(nums.length/2);	// find the middle element
    return nums[index];
};