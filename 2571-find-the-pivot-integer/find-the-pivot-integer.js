/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let x = Math.sqrt((Math.pow(n, 2) + n) / 2);
    return Number.isInteger(x) ? x : -1
};