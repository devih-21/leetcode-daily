/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let flag = new Array(nums.length + 1).fill(0)
    let result = []
    nums.forEach(item => flag[item]++)
    while (flag.some(item => item !== 0)) {
        let newItem = flag.map((num, i) => {
            if (num > 0) {
                flag[i]--
                return i
            }
        }).filter(item => !!item)
        console.log(flag)
        result.push(newItem)
    }
    return result
};