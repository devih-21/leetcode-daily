/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  // Create an array for the output
  let output = new Array();
  // Create a row array
  let row = new Array();
  // Add a new row to the output
  output.push(row);
  // Create an array for the last used indexes in the output
  let last = new Array(201).fill(0);
  // Loop through the input nums
  for (let i = 0; i < nums.length; i++) {
    // If the last number is higher than the number of rows
    if (last[nums[i]] > output.length - 1) {
      // Create a row array
      let row = new Array();
      // Add a new row to the output
      output.push(row);
    }
    // Otherwise the number needed to be added to the output
    // Set the index for the insertion
    let index = last[nums[i]];
    // Get the the current row using the index number
    let current = output[index];
    // Add the number to the corresponding row
    output[index][current.length] = nums[i];
    // Increment the index on the last array
    last[nums[i]]++;
  }
  // Return the output
  return output;
};