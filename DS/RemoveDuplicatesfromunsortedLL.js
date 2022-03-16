const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function reverse(head) {
  let p1 = head;
  let p2 = p1.next;
  let obj = {};
  obj[p1.data] = true;
  while (p2) {
    if (obj[p2.data]) {
      p1.next = p2.next;
    } else {
      obj[p2.data] = true;
      p1 = p2;
    }
    p2 = p2.next;
  }
  return head;
}
