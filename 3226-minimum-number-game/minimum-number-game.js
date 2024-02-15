/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const tempArr = nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < nums.length; i += 2) {
        result.push(tempArr[i+1], tempArr[i])
    }
    return result
};