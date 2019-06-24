let myArray = [];
let dividedByThree = [];
let dividedByFive = [];
let divideByFiveThree = [];
let divideByThree = false;
let divideByFive = false;

function threeCallback(a) {
    divideByThree = false;
    let resultDivideByThree = a % 3;
    if (resultDivideByThree === 0) {
        console.log("for " + a + " reminder of divide by 3 is equal to zero ");
        divideByThree = true;
        dividedByThree.push(a);

    };
};
function fiveCallback(a) {
    divideByFive = false;
    let resultDivideByFive = a % 5;
    if (resultDivideByFive === 0) {
        console.log("for " + a + " reminder of divide by 5 is equal to zero ");
        divideByFive = true;
        dividedByFive.push(a);

    };
};
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array 
    // loop through the array. Check if you should call threeCallback and/or fiveCallback.
    let index = -1;
    for (i = startIndex; i < stopIndex; i++) {
        index = index + 1;
        myArray.push(i);
        threeCallback(i);
        fiveCallback(i);
        if (divideByThree === true && divideByFive === true) {
            divideByFiveThree.push(myArray[index]);
            console.log("for " + myArray[index]+ " reminder of divide by 5 and 3 is equal to zero ");

        };
    };

};
threeFive(1, 2000, threeCallback, fiveCallback);
let arr2d = [[1,2], [3,4], [5,6]]
for(i=0,len = arr2d.length;i<len;i++){
for(j = 0,lem= arr2d[i].length;j<lem;j++){
    console.log(arr2d[i][j]);
};
}



