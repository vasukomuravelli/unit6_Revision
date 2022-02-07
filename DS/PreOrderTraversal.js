// Link : https://oj.masaischool.com/contest/3003/problem/06
// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below
let arr = [];
function PreorderTraversal(root) {
  if (root == null) {
    return null;
  }
  arr.push(root.val);
  PreorderTraversal(root.left);
  PreorderTraversal(root.right);
  return arr;
}
