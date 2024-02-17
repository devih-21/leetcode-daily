/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = []
    let temp = 1
    for (let i = digits.length - 1; i >= 0; i--) {
            let newNum = digits[i] + temp
            if (newNum === 10) {
                result = [0, ...result]
                temp = 1  
            } else {
                result = [newNum, ...result]
                temp = 0
            }

    }
    if (temp === 1) {
                result = [1, ...result]

    }
    return result
    
};