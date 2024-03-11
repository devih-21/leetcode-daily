/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    const arr = s.split("");
    let longest = 0;
    let curr = "";

    arr.forEach(letter => {

        const indexOfLetter = curr.indexOf(letter);

        if(indexOfLetter !== -1) {

            if(curr.length > longest) {
                longest = curr.length;
            }
            curr = curr.substring(indexOfLetter + 1, curr.length) + letter;
            return true;
        }
        
        curr = curr + letter;
    });

    return curr.length > longest ? curr.length : longest;
};