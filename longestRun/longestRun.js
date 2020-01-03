/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
	var max =1;
	var start =0
	for(var i=0;i<string.length;i++) {
		var count =1
		

		for(var j=i+1;j<string.length;j++) {
			if(string[j]!==string[i]) {
				break;
			}
			else{
				count++
				
			}
		}
		if(count>max) {
			max=count;
			start =i;
		}
	}
	return [start,start+max-1]
}
