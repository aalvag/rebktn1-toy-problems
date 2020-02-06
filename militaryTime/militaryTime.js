/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  // your code here...
  var timeSplitted = time.split(':')
  var hours = Number(timeSplitted[0])
 
  if(timeSplitted[1][2]==='p'){
  	hours+=12
  }else if(hours===12 &&timeSplitted[1][2]==='a') {
  	hours = 0
  }
 return hours<10 ?"0"+hours+":"+timeSplitted[1][0]+timeSplitted[1][1]:hours+":"+timeSplitted[1][0]+timeSplitted[1][1]
}
