/* 234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?

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
 * @return {boolean}
 */

 /* Solution: 
  * 1. Divide the list into 2 symetrical halves by finding the middle node. 
  * 2. Reverse 2nd half.
  * 3. Compare the corresponding node in 2 halves.
  */
var isPalindrome = function(head) {
    
    if(head===null || head===[] || head.next===null){return true;}
    
    // find the middle node by counting nodes in the list
    var back = head;
    cnt = 1;
    // When while loop ends back points to the last node
    while(back.next!==null){
        cnt++;
        back = back.next
    }
    
    // Move front to the 1st node of the second half of the list
    var front = head;
    for(var i=1; i<Math.floor((cnt+1)/2)+1; i++){
        front = front.next;
    }
    
    // Reverse the second half of the list
    var ptr1 = front, ptr2 = front.next;
    // if the length of the list is 2 or 3, no need for reversion.
    if(ptr1!==back){
        while(ptr2!==back){     // loop stops when ptr2 is the last node of list
            front = ptr2;
            ptr2 = front.next;
            front.next = ptr1;
            ptr1 = front;
        }
        ptr2.next = ptr1;
    }
    
    // Compare val of the corresponding nodes in two halves 
    var sub_list_1 = head;
    var sub_list_2 = back;
    for(i=0; i<Math.round((cnt-1)/2); i++){
        if(sub_list_1.val === sub_list_2.val){
            sub_list_1 = sub_list_1.next;
            sub_list_2 = sub_list_2.next;
        }
        else{
            return false;
        }
    }
    return true;
};