/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    var jewelSet = new Set()
    for (let j of jewels) {
        jewelSet.add(j)
    }

    let count = 0
    for (let s of stones) {
        if (jewelSet.has(s)) {
            count++
        }
    }
    return count
};