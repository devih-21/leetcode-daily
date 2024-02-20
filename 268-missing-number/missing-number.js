/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // let sum = nums.length * (nums.length+1) / 2;
    // let curSum = nums.reduce((a, b) => a+b, 0)
    return nums.length * (nums.length+1) / 2 - nums.reduce((a, b) => a+b, 0)
};