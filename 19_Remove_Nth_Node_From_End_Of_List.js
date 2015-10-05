/* 19. Remove Nth Node from End of List

Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.
Try to do this in one pass.

************************************************************************************/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 /* Use 2 pointers: fast and slow
  * Make fast n nodes ahead of slow. When fast moves over the last node, slow is the node for removal.
 */
var removeNthFromEnd = function(head, n) {
    var slow = head, fast = head;
    
    // move fast n nodes ahead of slow
    for(var i=0; i<n; i++){
        fast = fast.next;
    }
    
    // move both fast and slow concurrently till fast moves over the last node
    while(fast!==null){
        temp = slow;
        slow = slow.next;
        fast = fast.next;
    }
    
    // check if the to-be-deleted node is head
    if(slow!==head){
        temp.next = slow.next;
    }
    else{
        head = head.next;
    }
    
    return head;
};