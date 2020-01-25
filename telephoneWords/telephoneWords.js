/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well
: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable.
 But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order)
that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/
var obj={
	0:["0"]
	1:["1"],
	2:["A","B","C"],
	3:["D","E","F"],
	4:["G","H","I"],
	5:["J","K","L"],
	6:["M","N","O"],
	7:["P","Q","R","S"],
	8:["T","U","V"],
	9:["W","X","Y","Z"]

}
function telephoneWords(digitString) {
  // your code here...
  var digits =digitString.split('') 
  var result = [];
 function combinations(comb, digits ) {
 	if(digits.length ===0) {
 		result.push(comb)
 		return
 	}
 	else{
 		var char = digits[0];
 		for(var i=0;i<obj[char].length;i++) {
 			comb+=obj[char][i]

 		}
 		result.push(comb)
 		digits = digits.slice(1)
 		combinations(comb,digits)


 	}
 	

 }
 combinations('',digits)
 return result

}
