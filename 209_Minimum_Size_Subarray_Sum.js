/* 209. Minimum Size Subarray Sum

Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).

************************************************************************************/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
 
 /* Solution 1: Traverse the array using 2 pointers. 
  * O(n)
  * If the sum of subarray >= target, left pointer moves right; if sum < target, 
  * right pointer moves right.
  */
var minSubArrayLen = function(s, nums) {
    if(nums.length===0){
        return 0;
    }
    
    var left=0, right =0;
    var sum = nums[0];
    // Number.MAX_SAFE_INTEGER: the largest integer. 
    // Or minLen = nums.length
    var minLen = Number.MAX_SAFE_INTEGER    
    
    while(right<nums.length){
        // Case 1: When the sum of the subarray >= s
        // -(1) See if the length of the subarray is the shortest. If yes, store the length;
        // -(2) left pointer moves right by 1 element. Recalculate sum
        if(sum>=s){
            minLen = Math.min(minLen, right-left+1);    // Case 1-(1)
            sum -= nums[left];  // Case 1-(2)
            left++;
        }
        // Case 2: When the sum of the subarray < s 
        // Case 2a: When the sum of the subarray < s AND right pointer has reached the last element
        else{
            if(right==nums.length-1){   // Case 2a
                return minLen===Number.MAX_SAFE_INTEGER ? 0 : minLen;
            }
            right++;    // Case 2
            sum += nums[right];
        }
    }
};

/* Improved Solution 1
 */
 var minSubArrayLen = function(s, nums) {
    if(nums.length===0){
        return 0;
    }
    
    var left=0, right =0;
    var minLen = nums.length+1;
    var sum = 0;

    while(right<nums.length){
    	sum += nums[right];
    	while(sum>=s){
    		minLen = Math.min(minLen, right-left+1);
    		sum -= nums[left];
    		left++;
    	}
    	right++;
    }
    return minLen===nums.length+1 ? 0 : minLen;   
};


/* Solution 2: Binary Search
 * O(nlog)
 * e.g.
 * nums = [0,1,2,3,4,5];
 * The sum of any subarray can be presented as sums[i]-sums[j]. 
 * nums[i] is the last element of the subarray, nums[j+1] is the first element.
 * In this case, sums = [0, 0, 1, 3, 6, 10, 15]
 * sums[0]=0, sums[i+1] is the sum of all elements between nums[0] and nums[i]
 * 
 * Traverse sums[], i from 0 to the end of the array
 * If sums[i] >= target, then there might be a j that 
 * sums[i]-sums[j] >= target and sums[i] - sums[j+1] < target
 * In other words, subarray of nums[j+1] to nums[i] has the sum >= target 
 * Search j by binary search
 * Store the length of the subarray and keep searching until i has reached the end of nums[].
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length===0){
        return 0;
    }
   
    /*
    function binarySearch(left, right, target, arr){
    	while(left+1<right){	// stop when left+1 === right
    		var mid = Math.floor((left+right)/2);	// (right-left)/2 + left
    		if(arr[mid]>target){
    			right = mid;
    		}
    		else if (arr[mid]<target){
    			left = mid;
    		}
    		else{
    			return mid;
    		}
    	}
    	
    	if(arr[right]<=target){
    	    return right;
    	}
    	else{
    	    return left;
    	}
    	
    }*/

 	// Definition of binary search
    // Attention: when to stop! How to return the correct index
    // Attention: The difference between (1)return the next left element and
    // (2) return 0 if no target found - the return statement (if...else)
    function binarySearch(left, right, target, arr){
    	while(left<right){	// stop when left === right
    		var mid = Math.floor((left+right)/2);	// (right-left)/2 + left
    		if(arr[mid]>target){
    			right = mid-1;
    		}
    		else if (arr[mid]<target){
    			left = mid+1;
    		}
    		else{
    			return mid;
    		}
    	}
    	
    	if(arr[right]<=target){
    	    return right;
    	}
    	else{
    	    return right-1;
    	}
    	
    }
    

    
    var i, j;
    var minLen = nums.length + 1;	// make sure minLen is larger than the possible length of any subarray
    var sums = [];
    sums[0] = 0;	// sum of 0 element

    // traverse nums
    for(i=0; i<nums.length; i++)
    {
    	// sums[i] is the sum of all elements between nums[0] and nums[i-1]
    	sums[i+1] = sums[i] + nums[i];

    	// if sums[i+1] >= target, there might be a j so as sums[i+1]-sums[j] >= target. Search j using binary search
    	// sums[j] <= sums[i+1] - target. If sums[j] not found in sums[], return the index of the next left element.
    	if(sums[i+1]>=s){
    		j = binarySearch(0, i+1, sums[i+1]-s, sums);
    		minLen = Math.min(minLen, i-j+1);
    	}
    }

    return minLen===nums.length+1 ? 0 : minLen;
};


