class Solution {
    public int[] runningSum(int[] nums) {
        int sums = 0;
        for (int i = 0; i < nums.length; i++) {
            sums += nums[i];
        }
        int[] result = new int[nums.length];
        result[nums.length - 1] = sums;
        for (int i = nums.length-2; i >= 0; i--) {
            result[i] = result[i+1] - nums[i+1];
        }

        return result;
    }
}