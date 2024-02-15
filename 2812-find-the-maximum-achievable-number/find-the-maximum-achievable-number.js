/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    if (t === 0 ) return num
    
    return num + t + t
};