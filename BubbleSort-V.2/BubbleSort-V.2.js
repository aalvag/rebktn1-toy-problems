// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first
// element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

// You've got Helpers!
// myHelper(x, y)

// Examples
// input: [ 20, -10, -10, 2, 4, 299 ]
// Output:	[ -10, -10, 2, 4, 20, 299 ]


function bubbleSort(input) {
    // Write your code here, and
    // return your final answer.
    var i=0
    while(i<input.length) {
    	for(var j=0;j<input.length;j++) {
    		if(input[j]>input[j+1]) {
    			var tmp =input[j]
    			input[j]=input[j+1]
    			input[j+1]=tmp
    		}
    	}
    	i++
    }
    return input
}
