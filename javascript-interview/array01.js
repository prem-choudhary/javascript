//  Move All Zeros to End
function moveZeros(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) arr[index++] = arr[i];
  }
  while (index < arr.length) arr[index++] = 0;
  return arr;
}
console.log(moveZeros([0, 1, 0, 3, 12]));
//  Algorithm – Maximum Subarray Sum
function maxSubArraySum(arr) {
  let maxSum = arr[0],
    currSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Find Missing Number (1 to N)
function findMissing(arr, n) {
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}
console.log(findMissing([1, 2, 4, 5, 6], 6)); // 3 is missing

//  Count Frequency of Elements
function countFrequency(arr) {
  const map = {};
  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }
  return map;
}
console.log(countFrequency([1, 2, 2, 3, 1, 4]));

// Trapping Rain Water Problem

function trapRainWater(height) {
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0,
    water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }
  return water;
}
console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6

//  Next Greater Element
function nextGreaterElement(arr) {
  const result = [];
  const stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    result[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(arr[i]);
  }
  
  return result;
}
console.log(nextGreaterElement([4, 5, 2, 25])); // [5, 25, 25, -1]

const todos = [
  { id: 1, task: "Learn JavaScript", completed: true },
  { id: 2, task: "Practice Coding", completed: false },
  { id: 3, task: "Build Projects", completed: false },
];

const pending = todos.filter((todo) => !todo.completed);
console.log("Pending tasks:", pending);

