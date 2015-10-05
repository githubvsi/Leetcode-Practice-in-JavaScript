/* 83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.

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
 * @return {ListNode}
 */
 /* Solution: Use two pointers: current and previous
  * If current.val === previous.val, move current forward by one node, make previous point to current (equivalent to deleting the duplicate)
  * If current.val! == previous.val, move both current and previous forward by one node
  * till current has moved over the last node.
  */
var deleteDuplicates = function(head) {
	// When the list has no node, or empty node, or only 1 node
    if(head===[] || head===null || head.next===null){return head;}
   
    // When the list has more than 1 node
    var current = head.next;
    var previous = head;
    while(current!==null){		
    	// if there is a duplicate, delete it
        if(current.val===previous.val){
            current = current.next;
            previous.next = current;
        }
        // if not a duplicate, move forward
        else{
            previous = current;
            current = current.next;
        }
    }
    return head;
};