function removeDuplicates(nums) {
  let count = 1; // Counter for unique elements
  let duplicateCount = 1; // Counter for duplicate occurrences

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      duplicateCount++; // Increment duplicate count for the current element
    } else {
      duplicateCount = 1; // Reset duplicate count for a new unique element
    }

    if (duplicateCount <= 2) {
      // If duplicate count is less than or equal to 2, keep the element
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
}