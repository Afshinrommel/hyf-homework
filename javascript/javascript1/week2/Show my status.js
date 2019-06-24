//Create a empty variable called activities that stores all activities
var activities =[];
//Defination type of inputs
let date = "";
let activity = "";
let duration  = 0;
//Function defination
function addActivity(date,activity,duration){
  //use temporary variable to add object to array  
    let temporary = {
        Date:date,
        Activity:activity,
        Dduration:duration
    }
//push to Array
activities.push(temporary);
return activities;
}
addActivity("Monday","Footbal",50)
addActivity('1/7-18', 'Curch', 30);
addActivity('2/7-18', 'Disco', 120);
addActivity('3/7-18', 'Park', 330);
addActivity('6/7-18', 'Film', 330);
addActivity('8/7-18', 'Swimming', 303);
addActivity('22/7-18', 'Running', 303);
//ADD examples
// Show all of activities
function showActivity(){
    if(activities.length === 0){
        console.log("You must add activities.")
    }
for ( i = 0 ; i<activities.length;i++){
 console.log(activities[i].Date +" Acitivity is: " + activities[i].Activity +" With time Duration: "+ activities[i].Dduration );
}
}
showActivity();

//Show my status
function showStatus(activities){
    if(activities.length === 0){
        console.log("You must add activities.")
    }

    var temporary5 = 0;
    for ( i = 0 ; i<activities.length;i++){
        temporary5 = temporary5 + activities[i].Dduration
    }
    var temporary6 = activities.length - 1;
    console.log( "You have added " + temporary6 +" "+"activities." + " They amount to "+ temporary5 +" minute of usage.")    
    } 
showStatus(activities);


