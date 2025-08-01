// Define the Node class for the linked list
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to reverse a singly linked list
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    // Store the next node
    let next = current.next;
    // Reverse the link
    current.next = prev;
    // Move prev and current one step forward
    prev = current;
    current = next;
  }

  // prev is the new head
  return prev;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array for testing
function linkedListToArray(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Test the function
let arr = [1, 2, 3, 4, 5];
let head = createLinkedList(arr);
let reversedHead = reverseLinkedList(head);
console.log(linkedListToArray(reversedHead)); // Output: [5, 4, 3, 2, 1]
