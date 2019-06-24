


//Create a empty variable called activities that stores all activities
var activities =[];
// type of inputs
let date = "";
let activity = "";
let duration  = 0;
//let allowTime = 10000;
//Function for push objects to array
function addActivity(date,activity,duration){
   // temporary is the name of variable to push object to array 
    let temporary = {
        Date:date,
        Activity:activity,
        Dduration:duration
    }
  // temporary is the name of variable to push object to array 
activities.push(temporary);
return activities;
}
//ADD examples
addActivity("Monday","Facebook",1000)
addActivity('Monday', 'Twitter', 1000);
addActivity('Monday', 'Youtube', 4000);


//console.log(activities[1].Date);
let xsum = 0;
function showActivity(){
    //xsum will calculate total time of activities.
for ( i = 0 ; i<activities.length;i++){
//calculation of total activity 
xsum = Number(activities[i].Dduration) + xsum;
    console.log(activities[i].Date +" Acitivity is: " + activities[i].Activity +" With time Duration mseconds: "+ activities[i].Dduration );
}
return xsum
}
showActivity();
console.log("Total time in mseconds for use activities in miliseconds  = " + "  "+ xsum)


/////calculation of spending time.
let timeDuration = xsum;
//measuring of time with use javascript function.

function Inspection (allowTime){
    myVar = setTimeout(alertMe, xsum); 
    yourVar = setTimeout( goOn ,1);   
}

function alertMe(){
console.log("Your time usage for cellphone is finished.")
}
function goOn(){
    console.log("You can use yourCellphone.")
}
//change seconds to miliseconds.
let mSeconds = 15 * 1000;
Inspection(mSeconds);