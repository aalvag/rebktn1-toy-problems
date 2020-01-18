/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
<<<<<<< HEAD
*/
function zeroSum(array) {
    for (var i = 0; i < array.length; i++) {
        if (array.indexOf(-array[i]) > -1 && array[i] !== 0) {
            return true
        }
    }
    return false;
}
=======
*/
>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
