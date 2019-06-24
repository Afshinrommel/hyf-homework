var activities =[];
//Defination type of inputs
let date = "";
let activity = "";
let duration  = 0;
var answer;
//Purpose of this function is determine Day after today with parameter n.
function changeDate(n){
    var temp1= new Date();
    var temp2 = temp1.getDate();
    var desireDate = temp2 + n;
    temp1.setDate(desireDate);
     answer =  temp1.toDateString(temp1.setDate(desireDate));
    return(answer);
}

//Function defination for addition of activities
function addActivity(date,activity,duration){
    let temporary = {
         Date:date,
        Activity:activity,
        Dduration:duration
    }
//push to Array
activities.push(temporary);
return activities;
}

addActivity(changeDate(1), 'Curch', 130);
addActivity(changeDate(10), 'Cinema', 430);
addActivity(changeDate(21), 'Curch', 130);
addActivity(changeDate(14), 'Curch', 130);
addActivity(changeDate(17), 'Disco', 350);
addActivity(changeDate(21), 'Disco', 350);
addActivity(changeDate(13), 'Swimming', 350);
addActivity(changeDate(18), 'Bar', 301);
addActivity(changeDate(96), 'Disco', 350);
addActivity(changeDate(23), 'Disco', 350);
addActivity(changeDate(91), 'Hunting', 130);
addActivity(changeDate(11), 'Curch', 130);
addActivity(changeDate(33), 'Hunting', 130);
addActivity(changeDate(87), 'Teaching', 130);
addActivity(changeDate(61), 'Sleeping', 130);
addActivity(changeDate(37), 'Eating', 130);
addActivity(changeDate(72), 'Hunting', 130);
addActivity(changeDate(28), 'Fishing', 130);
addActivity(changeDate(56), 'Kino', 130);


// print result
function showActivity(){
    for ( i = 0 ; i<activities.length;i++){
        console.log(activities[i].Date +" Acitivity is: " + activities[i].Activity +" With time Duration: "+ activities[i].Dduration + " minutes." );
    }
    }
console.log("****** function showActivity******");    
showActivity();
console.log("****** function showStatus********");
// the purpose of this function is determination of special activity in particuar day .
// parameter desireDate in a number days will be passed after today.
function showStatus(desireDate){
    changeDate(desireDate);

    for(i=0;i<activities.length;i++){
if (activities[i].Date===answer){
  //  console.log(answer);
    //console.log(activities[i].Activity)
    //console.log(activities[i].Dduration)
    console.log(activities[i].Date +" Acitivity is: " + activities[i].Activity +" With time Duration: "+ activities[i].Dduration + " minutes." );
}
    }
}
// 13 is number of days after today, and function will determine which activites will be do by user. 
//ONLY EXAMPLE
    showStatus(13);
//copy a copy of input data to new array
var duplicateactivities = JSON.parse(JSON.stringify( activities ));

function mosttime (){
    let sum = 0;
    let Bsum = 0;
    let index = 0;
    let activityName = [];
for (i=0;i<activities.length;i++){
    activityName.push(activities[i].Activity);
  //  console.log(activities[i].Activity);
}
for (k=0;k<activityName.length;k++){
     sum =  Number(activities[k].Dduration);
    let Radapt = activities[k].Activity;
for(j=0;j<activityName.length;j++){
    if (activityName[j]===Radapt && j !==k){
       sum = Number(activities[j].Dduration) + sum;
      activities[j].Dduration = 0;
    }
   // console.log(activityName[j])
}
activities[k].Dduration = 0;
if (Bsum<sum){
    Bsum = sum;
index = k;
}
//console.log("***"+activities[k].Activity+" : "+sum+"***********");
//console.log(activities[k].Activity);
}
console.log("****** function for determination most Activity********");
console.log("**This is the most Activity "+activities[index].Activity+" : "+Bsum+" minute**");

}
mosttime();
