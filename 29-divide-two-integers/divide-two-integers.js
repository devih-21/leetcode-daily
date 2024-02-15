var divide = function (dividend, divisor) {
    let result = parseInt(dividend / divisor);
    if (result > 0x7FFFFFFF) return 0x7FFFFFFF;
    if (result < -0x7FFFFFFF) return -0x7FFFFFFF - 1;
    return result;
};