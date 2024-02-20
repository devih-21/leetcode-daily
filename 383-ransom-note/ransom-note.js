/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length === 1 && magazine.length === 1 && ransomNote !== magazine) return false
    let mappingRansom = {};
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];
        mappingRansom[char] ? mappingRansom[magazine[i]]++ : mappingRansom[magazine[i]] = 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
            if (mappingRansom?.[ransomNote[i]]) {
                mappingRansom[ransomNote[i]]--;
            } else {
                mappingRansom[ransomNote[i]] = -1;
            }
        }
        let arr = Object.values(mappingRansom);
        if (arr.some(item => item < 0)) return false
        return true
};