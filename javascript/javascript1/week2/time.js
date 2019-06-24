var a = new Date(1000);
console.log("Wait a few seconds, then click OK");

var b = new Date(2000);
var difference = (b - a) / 1000;

console.log("You waited: " + difference + " seconds");