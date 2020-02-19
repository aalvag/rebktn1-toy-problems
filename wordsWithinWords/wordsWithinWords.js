/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'

*/

function nestedWordCount(words) {
  // your code here...
  
  var maxCount=0

  var word=''
  for(var i=0;i<words.length;i++) {
  	var count=0
  	if(words[i].length>2) {
  		for(var j=0;j<words.length;j++) {
  			if(words[i].includes(words[j]))
  				count++
  		}
  		if(count>maxCount) {
  			maxCount=count
  			word=words[i]
  		}
  	}
  } 
  return word
}
