class Solution {
    public String interpret(String command) {
        String replaceString = command.replace("()","o").replace("(al)","al");
        return replaceString;   
    }
}