const divide = function(dividend, divisor) {
    const absDivisor = Math.abs(divisor);
    const absDividend = Math.abs(dividend);
    let count = 0;
    let sum = 0

    let countFactor;
    let sumFactor;
    while (countFactor !== 1) {
        countFactor = 1;
        sumFactor = absDivisor;
        while (sum + sumFactor <= absDividend) {
            count += countFactor;
            sum += sumFactor;
            countFactor += countFactor;
            sumFactor += sumFactor;
        }
    }

    if (Math.sign(divisor) + Math.sign(dividend) === 0) {
        return Math.max(-count, -2147483648);
    } else {
        return Math.min(count, 2147483647);
    }
};