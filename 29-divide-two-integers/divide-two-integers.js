function divide(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    
    let negative = 2;
    if (dividend > 0) {
        negative--;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negative--;
        divisor = -divisor;
    }

    let result = dividePositive(dividend, divisor);
    return negative === 1 ? -result : result;
};

function dividePositive(dividend, divisor) {
    if (dividend > divisor) {
        return 0;
    }

    let count = 1;
    let tb = divisor;
    while (tb >= dividend - tb) {
        tb += tb;
        count += count;
    }

    return count + dividePositive(dividend - tb, divisor);
};