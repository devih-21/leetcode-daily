/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let result = '';
    let flag = new Array(s.length).fill(0)
    for (let i = 0; i < order.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (order[i] === s[j]) {
                result += s[j];
                flag[j]++
            }
        }
    }
    console.log(flag)
    return result + s.split("").filter((_, index) => !flag[index]).join("")
};