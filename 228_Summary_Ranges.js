/* 228 Summary Ranges

Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].

************************************************************************************/

/* Solution: traverse through the array, compare the current element with the next one. 
 * If they are adjacent numbers, count++, keep traversing;
 * If they are not, produce the string of range based on counter value, reset counter to 1, and keep traversing.
 * Till the second-to-last element
 * Deal with the last element based on count value (The last element has to be dealt 
   with separately because it is different in terms of how the counter value is determined. For all other elements the counter value is decided and then reset when a certain condition has been met. But for the last element it is simply because traversing reaches the end)
 */


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var n = 1;	// counter
    var i;
    var result = [];
    var str;	// to store the string of range
    
    // When nums has no or only 1 element
    if(nums.length===0){
        return result;
    }
    if(nums.length===1){
        result.push(nums[0].toString());
        return result;
    }
    
    for(i=0; i<nums.length-1; i++){     // traverse through till the second to last element
        if(nums[i+1]===nums[i]+1){
           n++;
        }
        else{
            if(n===1){      // single number
                result.push(nums[i].toString());
            }
            else{
                str = nums[i-n+1] + '->' + nums[i];
                result.push(str);
            }
            n = 1;
        }
    }
    
    if(n===1){      // If the last element is not within a range, add it to result
        result.push(nums[i].toString());   
    }
    else{           // If the last element is within a range, add the range to result
        str = nums[i-n+1] + '->' + nums[i];
        result.push(str);
    }
    
    return result;
    
};