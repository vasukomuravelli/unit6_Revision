function PalindromeLinkedList(head) {
  let arr = [];
  let str = "";
  let curr = head;
  while (curr) {
    arr.push(curr.data);
    str += curr.data;
    curr = curr.next;
  }
  str.reverse() === arr.join("") ? console.log("true") : console.log("false");
}
