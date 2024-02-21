/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
 citations.sort((a, b) => a - b)
    let result = 0;
    let n = citations.length;
    for(let i = 0; i < n; i++){
    if (citations[i] >= n - i) result = result < n - i ? n - i : result;
    }
    return result;
    };