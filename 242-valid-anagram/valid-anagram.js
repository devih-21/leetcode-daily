/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const cache = {};
    for (let i = 0; i < s.length; i++){
        const char = s[i];
        const code = char.charCodeAt(0);
        if (code in cache){
            cache[code] = cache[code] += 1;
        } else {
            cache[code] = 1;
        }
    }

    for (let i = 0; i < t.length; i++){
        const char = t[i];
        const code = char.charCodeAt(0);
        if (code in cache){
            cache[code] = cache[code] -= 1;
        } else {
            return false;
        }
    }

    return Object.values(cache).every(val => val === 0)
};