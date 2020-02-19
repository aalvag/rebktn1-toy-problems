/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function(x, y) {
  // your code here...
  var result=0
  var i=1;
  while(i<=y) {
  	result=result+x
  	i++
  }
  return result
};

var divide = function(x, y,count=0) {
  // your code here...
  if(y===0) {
  	return 'impossible to execute'
  }
  if(y>x) {
  	return count
  }
  count++
  return divide(x-y,y,count)
};

var modulo = function(x, y) {
  // your code here...
  if(x<y) {
  	return x
  }
  return modulo(x-y,y)
};
