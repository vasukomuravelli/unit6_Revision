function ReverseLinkedList(head) {
  let curr = head;
  let prev = null;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = curr.next;
  }
  return prev;
}
