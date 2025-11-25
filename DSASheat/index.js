function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // swap nums[mid] and nums[low]
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // nums[mid] === 2
      // swap nums[mid] and nums[high]
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}
let arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);
// Output: [0, 0, 1, 1, 2, 2]
