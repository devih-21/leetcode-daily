/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a === "0") return b
    if (b === "0") return a
    let aArr = a.split("").reverse().map(item => Number(item))
    let bArr = b.split("").reverse().map(item => Number(item))

    let maxLength = aArr.length > bArr.length ? aArr.length : bArr.length
    let temp = 0
    let result = []
    for (let i = 0; i < maxLength; i++) {
        let newNum = (aArr?.[i] || 0) + (bArr?.[i] || 0) + temp;
        console.log(newNum)
        if (newNum > 1) {
            result.push(newNum%2)
            temp = 1
        } else {
            result.push(newNum)
            temp = 0
        }
    }
    if (temp === 1) result.push(1) 
    return result.reverse().join("")
};