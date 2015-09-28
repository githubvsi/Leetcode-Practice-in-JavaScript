/* First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

***********************************************************************/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * JavaScript
 * @param {function} isBadVersion()
 * @return {function}
 */

 /* Solution: binary search
  * There has to be a first bad version, so there is no "not found" situation.
  * Case 1: There is only 1 version, so first === last;
    Case 2: THere are more than 1 version, so first < last. Eventually first===last where the first bad version is found.
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n===1){		// If there is only 1 element , it has to be it.
            return 1;
        }
        
        var first = 1;	// If there are more than 1 element
        var last = n;
        var i;
        while(first<last){
            i = Math.floor((last-first)/2) + first;	// Integer division
            // If returns a good version, then the searching range should start right next to i
            if(isBadVersion(i)===false){
                first = i+1;
            }
            // If returns a back version, the searching range should end with i.
            else{
                last = i;
            }
            
            // Eventually first === last, because there has to be a first bad version.
            if(first===last){
                return first;
            }
        }
        
    };
};