/* 21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

**************************************************************************************/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 /* Solution:
  * 1. Determine head
  * 2. Traverse two sorted lists. Use a pointer current to point to the next smaller node between two lists
  * 3. When one list has reached the end, append the rest of the other list to it.
  */
var mergeTwoLists = function(l1, l2) {
    if(l1===null){return l2;}
    if(l2===null){return l1;}
    
    // step 1
    var current, head;
    if(l1.val>=l2.val){
        head = l2;
        l2 = l2.next;
    }
    else{
        head = l1;
        l1 = l1.next;
    }
    current = head;
    
    // step 2
    while(l1!==null && l2!==null){
        if(l1.val>=l2.val){
            current.next = l2;
            l2 = l2.next;
        }
        else{
            current.next = l1;
            l1 = l1.next;
        }
        current = current.next;
    }

    // step 3
    if(l2===null){
        current.next = l1;
    }
    else{
        current.next = l2;
    }
    
    return head;
};