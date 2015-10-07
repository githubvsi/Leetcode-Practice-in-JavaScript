/* 92. Reverse Linked List II

Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

 /* Solution: Iterately reverse mth to nth nodes, and insert the reversed sub-list into the old one.
  * In each iteration reverse one point-to connection
  * Before an interation
  * ptr1, ptr2 on node x --> ptr3 on node y --> node z
  * After an interation
  * node x <-- ptr1, ptr2 on node y --> ptr3 on node z
  * Attention: when iteration ends there are two cases:
  * case 1: m is head
  * Then head has to re-point to the nth node
  * case 2: m is not head
  * Then head remains unchanged.
  * Whether n is the last node (hence ptr3===null) or not does not affect how the reversed sub-list is inserted into the list.
 */
var reverseBetween = function(head, m, n) {
    // start points to the node before the mth node
    // if m===1, start points to head
    // if m===2, start point to head too
    var start = head;
    for(var i=2; i<m; i++){
        start = start.next;
    }
    
    // original situation before loop starts
    var ptr1, ptr2, ptr3;
    if(m===1){
        ptr1 = head;
        ptr2 = head;
        ptr3 = head.next;
    }
    else{
        ptr1 = start.next;
        ptr2 = start.next;
        ptr3 = ptr1.next;
    }
    
    // Reverse all point-to connections between m and nth node
    var cnt = 0;
    while(cnt<n-m){     // loop stops when the nth node points to (n-1)th node
        ptr1 = ptr3;
        ptr3 = ptr1.next;
        ptr1.next = ptr2;
        ptr2 = ptr1;
        cnt++;
    }  
    
    // if m is head, head has to re-point
    if(m===1){
        // if n is the last node, ptr3 is null, then head.next === ptr3;
        // if n is not the last node, ptr3 is not null, then again head.next === ptr3.
        head.next = ptr3;
        head = ptr2;    // the new head is the nth node
    }
    // if m is not head, head remains unchanged
    else{
        start.next.next = ptr3; // mth node points to (n+1)th node
        start.next = ptr2;  // start points to the nth node
    }
    
    return head;
};