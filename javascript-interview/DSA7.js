class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    // Store next node
    let next = current.next;
    // Reverse the link
    current.next = prev;
    // Move prev and current one step forward
    prev = current;
    current = next;
  }

  return prev; // New head
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
let reversed = reverseList(head);
while (reversed) {
  console.log(reversed.val); // Output: 3, 2, 1
  reversed = reversed.next;
}
