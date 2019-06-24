//Create an array with 3 items. All items should be functions. Go through the array and call them.
let firstFunc = function () {
    console.log('I am first function')
};
let secondFunc = function () {
    console.log('I am second function')
};
let thirdFunc = function () {
    console.log('I am third function')
};
let arrayFunction = [firstFunc, secondFunc, thirdFunc];

let b = console.log(arrayFunction.length);
for (i = 0; i < arrayFunction.length; i++) {
    let c = arrayFunction[i];
    c();
};

//Create a function as a const and try creating a function normally. Call both function.
const expFunction = function () {
    console.log("function expression");
}

function decFunction() {
    console.log('function declation');
}
expFunction();
decFunction();

//Create an object that has a key whose value is a function. Try calling this function.
let myObject = {
    firstKey: (a, b) => (a * b)
}
console.log(myObject.firstKey(4, 7));
//Create two setTimeouts one uses a function that is defined as a const. The other uses an anonomous function that is defined inside the setTimeout.

// first part (a function that is defined as a const) 
let count = function () {
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
}
setTimeout(count, 3000);

//second part (an anonomous function that is defined inside the setTimeout).
setTimeout(() => console.log('my name is afshin'), 6000);

//Create a function (outer) that returns a function (inner). Call the outer function and assign the return to a variable. 
function backInnerFunction() {

    this.inner = function (a, b, c) {
        let answer = a * b * c;
        // console.log(answer);
        return (answer)
    }
};
let result = new backInnerFunction().inner(3, 4, 5);
console.log(result);


