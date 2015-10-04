/* 225. Implement Stack Using Queues

Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
************************************************************************************/

/* Solution: Use arrays to simulate queues
 * queue1: supports push, pop, etc.
 * queue2: to implement .pop() and .top(), transfer all elements except the top one from queue1 to queue 2.

 * Your runtime beats 100% JavaScript submissions! :D
*/

/**
 * @constructor
 */
var Stack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    var l = this.queue1.length;
    // Move all elements except the top one from queue1 to queue2
    for(var i=0; i<l-1; i++){
        var elem = this.queue1.shift();
        this.queue2.push(elem);
    }
    
    // Exchange two queues
    var temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    
    // Remove the element in queue2, which is the top element in the original queue1
    this.queue2.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    var l = this.queue1.length;
    // Move all elements except the top one from queue1 to queue2
    for(var i=0; i<l-1; i++){
        var elem = this.queue1.shift();
        this.queue2.push(elem);
    }
    
    // Exchange two queues
    var temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    
    // Return the element in queue2, which is the top element in the original queue1
    var top = this.queue2.shift();
    this.queue1.push(top);
    return top;
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.queue1.length===0 ? true : false;
};