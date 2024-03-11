/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxStr = ""
    let maxChar = [...new Set([...s])].length;
    console.log("maxChar", maxChar)
    for (let i = 0; i < s.length; i++) {
        let max = s.length - i > maxChar ? maxChar : s.length - i
        for (let j = 1; j <= max; j++) {
            let str = s.slice(i, i+j);
            if (maxStr.length > j) {
                continue;
            } else {
                if (j === [...new Set([...str])].length) {
                    maxStr = str
                }
            }
        }
    }
    return maxStr.length
};