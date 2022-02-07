// Link : https://oj.masaischool.com/contest/3003/problem/05
// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var levelOrder = function (root) {
  let queue = [];
  let arr = [];
  queue.push(root);
  while (queue.length) {
    let temp = queue.shift();
    arr.push(temp.val);
    if (temp.left != null) {
      queue.push(temp.left);
    }
    if (temp.right != null) {
      queue.push(temp.right);
    }
  }
  console.log(arr[0]);
  let prev = 2 ** 0;
  for (let i = 1; i < arr.length; i++) {
    let str = "";
    for (let j = prev; j < 2 ** i + prev && arr[j]; j++) {
      str += arr[j] + " ";
    }
    prev += 2 ** i;
    console.log(str.trim());
  }
};
