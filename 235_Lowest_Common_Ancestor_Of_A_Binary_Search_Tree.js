/* 235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

**************************************************************************************/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 /* Solution: Search from root. If one node is greater than root, the other is smaller, then they are on different subtrees of the root, so the root is the LCA.
  * If they are both greater or smaller than the root, then they are on the right or left subtree of root. Then make the root the root of the right/left subtree.
  * Keep search recursively.
  */
var lowestCommonAncestor = function(root, p, q) {
    if(root===null){return root;}
    if(p===null || q===null){
        return p || q;
    }
    
    // if p and q, one is larger than root, the other is smaller than root, they must be on different subtree of root. So root is the LCA
    // If p and q, at least one of them is equal to root, then it is self is the LCA
    if((p.val-root.val)*(q.val-root.val)<=0){
        return root;
    }
    // If both p and q are on the left subtree of root
    else if(p.val<root.val){
        return lowestCommonAncestor(root.left, p,q);
    }
    // If both p and q are on the right subtree of root
    else {
        return lowestCommonAncestor(root.right, p, q);
    }
    
};