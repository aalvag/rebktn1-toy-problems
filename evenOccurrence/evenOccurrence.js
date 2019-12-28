/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/
function evenOccurrence(arr) {

    for (var i = 0; i < arr.length; i += 2) {
        var element = arr[i]
        var oddOcc = false
        var count = 0
        for (j = 0; j < arr.length; j++) {
            if (JSON.stringify(arr[j]) === JSON.stringify(arr[i]) && j % 2 === 1) {
                oddOcc = true
            }
            if (JSON.stringify(arr[j]) === JSON.stringify(arr[i]) && j % 2 === 0) {
                count = count + 1
            }
        }
        if (!oddOcc && count > 1) {
            return element
        }
    }
    return null
}