/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = words.map((item, index) => item.includes(x) ? index : -1).filter(item => item !== -1);
    return result
};