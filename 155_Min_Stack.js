/* 155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

************************************************************************************/

/* Solution: New an array as the stack that supports push, pop, top, etc functions.
 * New another array to store the minimum element.
 * In minStac elements have increasing value from top to bottom. The top element always has the smallest value.
*/

/**
 * @constructor
 */
var MinStack = function() {
    this.stac = [];		// The stack that supports the functions e.g. pop, push, etc.
    this.minStac =[];	// The stack to store minimum element
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.stac.push(x);
    
    // If this element is smaller than or equal to all elements in minStac, push it to minStac
    if(this.minStac[this.minStac.length-1]>=x || this.minStac.length===0){
        this.minStac.push(x);
    }
    
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
	// If the top element in stac is also the top one in minStac, pop it from minStack too
    if(this.stac[this.stac.length-1]===this.minStac[this.minStac.length-1]){
        this.minStac.pop();
    }
    this.stac.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    if(this.stac.length===0){
        return undefined;
    }
    
    return this.stac[this.stac.length-1];
    
    
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    if(this.minStac.length===0){
        return undefined;
    }
    // As long as minStac is not empty, the top element has the smallest value
    return this.minStac[this.minStac.length-1];
};