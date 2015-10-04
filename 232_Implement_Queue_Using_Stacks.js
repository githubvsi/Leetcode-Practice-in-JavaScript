/* 232. Implement Queue Using Stacks

Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Notes:
You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

************************************************************************************/

/* Solution: simulate stacks using arrays.
 * stack1: supports push, pop etc
 * stack2: To implement .pop() and .peek()of Queue, transfer all elements from stack1 to stack2, get/remove the top element using .pop() of Array. Then transfer back all elements to stac1.
 */

/**
 * @constructor
 */
var Queue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    var l = this.stack1.length;
    // Transfer elements from stack1 to stack2
    for(var i=0; i<l; i++){
        this.stack2.push(this.stack1.pop());
    }
    // pop the top element
    this.stack2.pop();
    // Transfer back all other elements
    for(i=0; i<l-1; i++){
        this.stack1.push(this.stack2.pop());
    }
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    var l = this.stack1.length;
    // Transfer elements from stack1 to stack2
    for(var i=0; i<l; i++){
        this.stack2.push(this.stack1.pop());
    }
    // Retrieve the top element
    var front = this.stack2[l-1];
    
    // Transfer back all other elements
    for(i=0; i<l; i++){
        this.stack1.push(this.stack2.pop());
    }
    return front;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.stack1.length===0 ? true : false;
};