/* 205. Isomorphic Strings
 * Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.
Given "foo", "bar", return false.
Given "paper", "title", return true.

************************************************************************************/

/* Solution: Use 2 hashmaps to save the relationship of corresponding letters in two 
 * strings.
 * "Your runtime beats 100% of javascript submissions!" :)
 * 1. Create 2 hashmaps. 
      map1: key: s[i], value: t[i]
      map2: key: t[i], value: s[i]
   2. Start to compare two strings
   Case: 1: if no key is found in either hashmap --> add the key-value pair to both hashmaps.
   Case 2: if both keys are found in 2 hashmaps, respectively, AND key1===value1 && key2===value2 --> do nothing in the current iteration and keep traversing
   Case 3: All other cases, including
   Case 3-1: only 1 key found in 1 hashmap
   Case 3-2: 2 keys are found but only key1===value1
   Case 3-3: ...
             All --> return false;
    When iteration reaches the end, return true;
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    var map1 = {};
    var map2 = {};
    var i;
    for(i=0; i<s.length; i++){
        if(!map1[s[i]] && !map2[t[i]]){     // Case 1
            map1[s[i]] = t[i];  // the key is the letter in s, and value the corresponding letter in t
            map2[t[i]] = s[i];  // the key is the letter in t, and value the corresponding letter in s
        }
        else if(map1[s[i]]===t[i] && map2[t[i]]===s[i]){	// Case 2
            continue;
        }
        else {		// Case 3
            return false;
        }
    }
    
    return true;
};