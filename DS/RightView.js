// Link : https://oj.masaischool.com/contest/3032/problem/01
// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var rightSideView = function (root) {
  const levels = [];
  dfs(root, levels);
  const res = [];
  console.log(levels);
  for (let l of levels) {
    res.push(l.pop());
  }
  return res;
};
const dfs = (root, levels, level = 0) => {
  if (!root) return;
  if (!levels[level]) {
    levels[level] = [];
  }
  levels[level].push(root.val);
  dfs(root.left, levels, level + 1);
  dfs(root.right, levels, level + 1);
};
