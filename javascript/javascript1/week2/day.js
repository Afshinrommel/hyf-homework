var answer;
function changeDate(n){
    var temp1= new Date();
    var temp2 = temp1.getDate();
    var desireDate = temp2 + n;
    temp1.setDate(desireDate);

     answer =  temp1.toDateString(temp1.setDate(desireDate));
    return(answer);
}
changeDate(70);
console.log(answer);



