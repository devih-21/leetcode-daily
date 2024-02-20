/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.length * (nums.length+1) / 2;
    let curSum = nums.reduce((a, b) => a+b, 0)
    return sum - curSum
};