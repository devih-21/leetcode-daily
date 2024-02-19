function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let a = Math.log2(n);
    console.log("a", a)
    return Number.isInteger(a)
};