// Link : https://oj.masaischool.com/contest/3073/problem/06
// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

function isSameTree(a, b) {
  if (a == null && b == null) {
    return;
  }
  if (a.val != b.val) {
    return false;
  }
  isSameTree(a.left, b.left);
  isSameTree(a.right, b.right);
  return true;
}
