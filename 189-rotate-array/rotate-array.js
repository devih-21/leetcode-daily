var rotate = function(nums, k) {
    let step = k % nums.length;
    if (k === 0) return;
    nums.unshift(...nums.splice(nums.length - step));
};