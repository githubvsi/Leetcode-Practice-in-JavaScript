/* 15. 3Sum
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.

For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)

************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /* Solution:
  * Sort the array first
  * Use nested loops
  * Outer loop: traverse through the array
  * Inner loop: use 2 pointers. One points to the (i+1)th element, and moves towards back. The other points to the last element, and moves towards front.
  * Inner loop ends when 2 pointers meet.
  * Attention: To avoid duplicates, outer/inner iterations starts only when the current element is different from the one in the last iteration.
 */

var threeSum = function(nums) {
    
    // store triplets in result
    var result = [];
    var triplet;
    
    // Sort the array first
    nums.sort(function(a,b){return a-b;});
    
    var i, m, n;
    
    // Outer loop: travers throught the array
    for(i=0; i<nums.length; i++){
        
        // If the current element is the same as the one right before it, skip the current iteration
        if(i>0 && nums[i]===nums[i-1]){
            continue;
        }
        else{
            // inner loop: one pointer m from the (i+1)th element, the other n from the last element
            // If the sum is larger than 0, n moves one element towards the front
            // If the sum is smaller than 0, m moves one element towards the back
            // If the sum is equal to 0, save the triplet.
            // End when 2 pointers meet.
            m = i+1;
            n = nums.length - 1;
            while(m<n){
                if(nums[i]+nums[m]+nums[n]>0){
                    n--;
                }
                else if(nums[i]+nums[m]+nums[n]<0){
                    m++;
                }
                else{
                    triplet = [nums[i],nums[m],nums[n]];
                    result.push(triplet);
                    // Move m towards back till it points to a different value or meets n
                    do{
                        m++;
                    }while(m<n && nums[m]===nums[m-1])
                    // Move n towards front till it points to a different value or meets m
                    do{
                        n--;
                    }while(m<n && nums[n]===nums[n+1])
                
                }
            } // end of while loop
        } // end of else
    } // end of for loop
    
    return result;
    
};