/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s.includes(" ")) return s.length;
    let newStr = s.trim()
    while (newStr.includes("  ")) {
        newStr = newStr.replaceAll("  ", " ")
    }

    return newStr.split(" ")[newStr.split(" ").length - 1].length
};