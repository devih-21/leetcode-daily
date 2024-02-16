/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = []

    for (let i = 0; i < nums.length; i += 2) {
        let newArr = new Array(nums[i]).fill(nums[i+1]);
        result = [...result, ...newArr]
    }
    return result
};