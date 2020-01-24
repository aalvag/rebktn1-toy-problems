/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
   if (!list1 || !list2) return null;
    
  let p1 = list1;
  let p2 = list2;
  let p1ReachedEnd = false;
  let p2ReachedEnd = false;
  
  while(p1 !== p2) {
    p1 = p1.next;
    if (!p1) {
      if (!p1ReachedEnd) {
        p1 = l2;
        p1ReachedEnd = true;   
      } else {
        return null;
      }
    }
     
    p2 = p2.next;
    if (!p2) {
      if (!p2ReachedEnd) {
        p2 = list1;
        p2ReachedEnd = true;
      } else {
        return null;
      }
    }
return p1
}

