/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let bit = Math.pow(2,31) - 1   

    if (x > bit || x <= -(bit)) return 0
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
    }
    let result = (isNegative ? "-" : "") + ("" + x).split("").reverse().join("").replace("-", '') 
    return result > bit || result < -(bit) ? 0 : result
};