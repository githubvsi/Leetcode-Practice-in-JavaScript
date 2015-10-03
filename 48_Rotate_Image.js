/* 48. Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?

************************************************************************************/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 /* Solution: Rotate twice:
  * Step 1: Transpose matrix along the diagonal (e.g. 00-11-22-33)
  * Step 2: Reverse all elements in each row
 */
var rotate = function(matrix) {
    
    // Definition of swap()
    function swap(matrix, x, y) {	// swap(x,y) does NOT work!
        var temp = matrix[x][y];
        matrix[x][y] = matrix[y][x];
        matrix[y][x] = temp;
    }
    
    // get number of rows and columns
    var row = matrix.length;
    var col = matrix[0].length;
    var i, j;
    
    /* Step 1: Transpose matrix in the following way
    00 01 02     -->    00 10 20 30
    10 11 12            01 11 21 31
    20 21 22            02 12 22 32
    30 31 32
    */
    for(i=0; i<row; i++){
        for(j=i+1; j<Math.max(row,col); j++){
            swap(matrix, i, j);
        }
    }
    
    // Step 2: everse all elements in each row
    for(i=0; i<row; i++){
        matrix[i].reverse();
    }
    
};