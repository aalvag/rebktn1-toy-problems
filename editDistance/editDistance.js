/*
Edit Distance
Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, deletion, or substitution.
Challenge: Do this in O(m x n) time, where m and n are the respective lengths of str1 and str2.



editDistance("cat", "cut") // 1

editDistance("wednesday", "sunday") // 5

editDistance("hackerrank", "hackreactor") // 6

For more information check out this article: https://en.wikipedia.org/wiki/Levenshtein_distance
*/

function editDistance(str1, str2) {
    // your code here...
    var count=0;
    var l1=str1.length
    var l2=str2.length
    var short = l1>=l2?str2:str1
        var long = l1>=l2?str1:str2

    for(var i=0;i<long.length;i++) {
    	if(short[i]&&short[i]!==long[i]) {
    		count++
    	}}
    return count
}