/*
Spiral Traversal

Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.

spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
]) 

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]


spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
])	

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

spiralTraversal([ 
  [ 1, 2, 3 ], 
  [ 4, 5, 6 ], 
  [ 7, 8, 9 ], 
  [ 10, 11, 12 ], 
  [ 13, 14, 15 ], 
  [ 16, 17, 18 ], 
  [ 19, 20, 21 ], 
  [ 22, 23, 24 ] 
])	

// output: [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]

spiralTraversal([[ 1 ], [ 2 ], [ 3 ], [ 4 ]])	// [ 1, 2, 3, 4 ]

spiralTraversal([[ 1, 2, 3, 4, 5, 6, 7 ]]) // [ 1, 2, 3, 4, 5, 6, 7 ]
*/
function spiralTraversal(array) {
  var result = [];
  var arrlength = array[0].length
 for(var i =0;i<array[0].length;i++) {
   result.push(array[0][i])
 }

for(var i =arrlength-1;i>=0;i--) {
  var col  = []
for(var j=1;j<array.length) {
col.push(arr[j][i])
}

if(i%2 ===1) {
for(var k of  col ) {
  result.push(k)
}
}
else {
  for(var l = col.length-1;l>=0;l--) {
    result.push(col[l])
  }
}
}
return result
}
