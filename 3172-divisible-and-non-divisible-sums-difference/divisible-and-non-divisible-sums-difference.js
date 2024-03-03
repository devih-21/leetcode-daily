/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num2 = ((n - n % m) + m) * ((n - n % m)/m) / 2
    
   
    let num1 = (1 + n)*n / 2 - num2
    console.log(num2, num1)
return num1 - num2
};