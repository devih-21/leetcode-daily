/**
 * @param {number} n
 * @return {number}
 */
 let mapping = {}
var climbStairs = function(n) {
     let a = 0;
        let b = 1;
        let c = 0;
          for (let i = 0; i < n; i++) {
            c = a + b;
            a = b;
            b = c;
        }

        return b;
};