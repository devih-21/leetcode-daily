/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.trim().length === 0) return true;
    let strFormated = s.toLowerCase().split("").filter(item => item.match(/[a-z0-9]/i));
 
    if (strFormated.join("") === strFormated.reverse().join("")) return true;
    return false
};