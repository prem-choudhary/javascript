function containsDuplicate(nums) {
  let numsSet = new Set(nums);
  return numsSet.size !== nums.length;
}

let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
