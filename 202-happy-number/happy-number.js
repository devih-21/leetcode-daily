/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let attempts = {};
    while (n !== 1) {
        n = sumOfSquares(n);
        if (attempts[n]) {
            return false;
        }
        attempts[n] = true;
    }
    return true;
};
function sumOfSquares(num) {
    let str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        sum += (Math.pow(Number(char), 2));
    }
    return sum;
}