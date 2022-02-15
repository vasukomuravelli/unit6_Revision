// Link : https://oj.masaischool.com/contest/3087/problem/01
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Complete the function below

function mirror(root) {
  if (root == null) {
    return;
  }
  mirror(root.right);
  mirror(root.left);
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
}
