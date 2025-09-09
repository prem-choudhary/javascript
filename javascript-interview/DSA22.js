// Definition for a singly linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Recursive function to reverse a linked list

function reverseListRecursive(head) {
  // Base case: if head is null or only one node
  if (head === null || head.next === null) return head;

  // Recursive call to get to the end of the list
  let newHead = reverseListRecursive(head.next);

  // Reverse the link

  head.next.next = head;
  head.next = null;
  console.log(reverseListRecursive)

  return newHead;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print the linked list
function printList(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> ") + (result.length ? " -> null" : "null"));
}

// Test the solution
let inputArray = [1, 2, 3, 4, 5];

console.log("Original List:");
let list = createLinkedList(inputArray);
printList(list); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> null
console.log("Reversed List:");
let reversed = reverseListRecursive(list);
printList(reversed); // Output: 5 -> 4 -> 3 -> 2 -> 1 -> null
