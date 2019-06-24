
function meetingDate(desireDay){
  //n
let reminderDesireDay = desireDay%7;
let n4 = 0
// c1 is object with the current date and time
let c1 = new Date();
//get current Day
// c2 Return the day of the month from a specific date
let c2 = c1.getDate();
// get index of Day(Sunday is 0 and friday is 6 and other days follow between them)
let c3= c1.getDay()
// sum reminderDesireDay + c3
let n3 =reminderDesireDay+c3;
//correction 
//if (n3===12)
//{n4 = c3-1;}
//else
n4 = n3%6;
if(reminderDesireDay ===6 && c3=== 0 ){
  n4 = 6;
}

if(reminderDesireDay ===0 && c3=== 0 ){
  n4 = 0;
}


let day = "";
console.log (c2);
console.log(c3);
switch (n4){
  case 0:
  day ="Sunday";
  break;
  case 1:
  day ="Monday";
  break;
  case 2:
  day ="Tuesday";
  break;
  case 3:
  day ="Wednesday";
  break;
  case 4:
  day ="Thursday";
  break;
  case 5:
  day ="Friday";
  break;
  case 6:
  day ="Saturday";
  break;
}
console.log("How many days to meet :" + desireDay);
return day;
}
var meetingDay = meetingDate(18);

console.log("We are meeting on :" + meetingDay);



 