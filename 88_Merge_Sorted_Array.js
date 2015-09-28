/* 88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

************************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 /* Solution 1: The merged array would have m+n element. Merge the arrays from their last element, and fill the new array from the end to beginning. So there would be no shifting!
 */
var merge = function(nums1, m, nums2, n) {
    var i = m-1;
    var j = n-1;
    var len = m+n;	// new length
    
    // Merge them beginning from the end of both nums1 and nums2
    // Fill the newly merged array from the end too
    // So no shifting!
    for(; i>=0,j>=0; len--){
        if(nums1[i]>=nums2[j]){
            nums1[len-1] = nums1[i];
            i--;
        }
        else{
            nums1[len-1] = nums2[j];
            j--;
        }
    }
    
    // If all nums2 elements are merged before i reaches 0, then it is all.
    // If all nums1 elements are used up before j reaches 0
    if(j>=0){
        for(;j>=0;j--){
            nums1[j] = nums2[j];
        }
    }
};


/* Solution 2: Append the whole nums2 to the end of nums1. Then sort it.
*/
var merge = function(nums1, m, nums2, n) {
   var i;
   var j; 
   for(i=0, j=m; i<n; i++,j++){
       nums1[j] = nums2[i];
   }
   
   nums1.sort(function(a,b){return a-b;});
};