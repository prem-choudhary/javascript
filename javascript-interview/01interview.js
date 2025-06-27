class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper to build linked list
function buildList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// ✅ Reverse Linked List Function
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}

// Usage
let head = buildList([1, 2, 3, 4]);
let reversed = reverseList(head);

// Print reversed list
while (reversed) {
  console.log(reversed.val); // Output: 4 3 2 1
  reversed = reversed.next;
}
