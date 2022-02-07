// Link : https://oj.masaischool.com/contest/3003/problem/08
// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below
const arr = [];
function inorderTraversal(root) {
  if (root == null) {
    return;
  }
  inorderTraversal(root.left);
  arr.push(root.val);
  inorderTraversal(root.right);
  return arr;
}
