/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let countOne = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') countOne++;
    }

    if (countOne === 1) return [...new Array(s.length - 1).fill(0), 1].join("")
    return [...new Array(countOne - 1).fill(1), ...new Array(s.length - countOne).fill(0), 1].join("")
};