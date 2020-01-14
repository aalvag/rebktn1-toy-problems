// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0
function Arrayception(array, depth = 0) {
    var depth = 0
    var maxdepth = 0
    function checkArray(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i]) && depth === 0) {
                depth++;
                if (depth > maxdepth) {
                    maxdepth = depth
                }
            }

            else return checkArray(arr[i], depth + 1)



        }
    }
    checkArray(array)
    // for (var i = 0; i < array.length; i++) {
    //     if (!Array.isArray(array[i]) && depth === 0) {
    //         depth++;
    //         if (depth > maxdepth) {
    //             maxdepth = depth
    //         }
    //     }

    //     else Arrayception(array[i])



    // }
    return maxdepth;
}