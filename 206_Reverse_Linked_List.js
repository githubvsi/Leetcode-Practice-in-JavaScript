/* 206. Reverse Linked List

Reverse a singly linked list.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?

*************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
 /* Solution 1: Linked list reversed iteratively
  * This is how adjacent nodes look like before the loop start, or after one iteration of the loop ends
  * <-- head --> ptr2
  *     ptr1
  * Loop stops when ptr2 is the last node of the list 
 */
var reverseList = function(head) {
    if(head===null || head===[] || head.next===null){return head;}
    
    var ptr1 = head, ptr2 = head.next;
    
    // head becomes tail
    head.next = null;  
    // reverse one point-to connection at a time
    while(ptr2.next!==null){    // loop ends when ptr2 is the last node of list
        head = ptr2;
        ptr2 = ptr2.next;
        head.next = ptr1;
        ptr1 = head;
    }
    
    head = ptr2;
    head.next = ptr1;
    
    return head;
};