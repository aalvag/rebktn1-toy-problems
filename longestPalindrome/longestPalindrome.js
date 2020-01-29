/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  // your code here...
 var palindrome = '';
 var arr = []
 for(var i = 0;i<string.length;i++) {
 	for(j=i+1;j<=string.length;j++) {
 		if(string.substring(i,j+1).split('').reverse().join('')===string.substring(i,j+1))
 		arr.push(string.substring(i,j))
 	}
 }
 var palindrome = ''
 for (var i=0;i<arr.length;i++) {
 	if(arr[i].length>palindrome.length) {
 		palindrome=arr[i]
 	}
 }
 return palindrome
}
