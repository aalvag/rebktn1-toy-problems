/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null

A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over.
This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes in any way
*/

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

var hasCycle = function(linkedList) {
  // your code here...
  var arr = []
  var currentHead =linkedList.head;
  var nextHead = currentHead.next;
  arr.push(JSON.stringify(currentHead))
  while(!arr.includes(JSON.stringify(currentHead))&&nextHead !==null) {
  	currentHead = nextHead;
  	nextHead = currentHead.nextHead
  	arr.push(JSON.stringify(nextHead))


  }
  if(arr.includes(JSON.stringify(currentHead)) ){
  	return true
  }
  return false

};
