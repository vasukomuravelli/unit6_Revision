// Link : https://oj.masaischool.com/contest/3046/problem/05
const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};
