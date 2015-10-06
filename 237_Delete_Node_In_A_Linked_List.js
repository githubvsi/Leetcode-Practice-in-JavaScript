/* 237. Delete Node in a Linked List

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.

************************************************************************************/



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

 /* Solution: The objective is to edit the values in the nodes so that the resulting list is equivalent to having deleted the given node in the list. Therefore, there is no need to know the head of the list.
  */
var deleteNode = function(node) {
    var current = node.next;
    
    // loop stops when node is the second to last, current is the tail
    while(current.next!==null){     // node is not the tail, so current!==null at beginning
        node.val = current.val;
        node = current;
        current = current.next;
    }
    // make node the tail
    node.val = current.val;
    node.next = null;
};