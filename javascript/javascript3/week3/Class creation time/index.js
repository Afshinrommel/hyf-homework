let circleRadius = document.createElement('input');
circleRadius.setAttribute('id', 'circleRadius');
circleRadius.value = 5;
document.body.appendChild(circleRadius);
let drawCircle = document.createElement('button');
drawCircle.setAttribute('id', 'drawCircle');
let drawCircleText = document.createTextNode('drawCircle');
drawCircle.appendChild(drawCircleText);
document.body.appendChild(drawCircle);
let labelCircle = document.createElement('label');
labelCircle.setAttribute('id', 'labelCircle');
labelCircle.textContent = "increase radius"
document.body.appendChild(labelCircle);
let deleteCircle = document.createElement('button');
deleteCircle.setAttribute('id', 'deleteCircle');
let deleteCirclePage = document.createTextNode('delete');
deleteCircle.appendChild(deleteCirclePage);
document.body.appendChild(deleteCircle);
let fillCircle = document.createElement('button');
fillCircle.setAttribute('id', 'fillCircle');
let fillCircleText = document.createTextNode('fillColor');
fillCircle.appendChild(fillCircleText);
document.body.appendChild(fillCircle);
let designPattern = document.createElement('canvas');
designPattern.setAttribute('id', 'designPattern');
designPattern.style.position = 'absolute';
var ctx = designPattern.getContext('2d');
document.body.appendChild(designPattern);
document.getElementById('drawCircle').addEventListener('click', drawing);
function drawing() {
    let radius = document.getElementById('circleRadius').value;
    radius = Number(radius);
    ctx.beginPath();
    ctx.arc(150, 72, radius, 0, 2 * Math.PI);
    ctx.stroke();
}
document.getElementById('deleteCircle').addEventListener('click', () => {
    ctx.clearRect(0, 0, 750, 750);
})
document.getElementById('fillCircle').addEventListener('click', () => {
    ctx.fillStyle = "Indigo";
    ctx.fill();
})
var rangeInput = document.getElementById("drawCircleRange");
rangeInput.addEventListener('mouseup', function () {
    let radius = this.value;
    radius = Number(radius);
    ctx.beginPath();
    ctx.arc(150, 72, radius, 0, 2 * Math.PI);
    ctx.stroke();
    document.getElementById('circleRadius').value = radius;
})
let CircleByClass = document.createElement('button');
CircleByClass.setAttribute('id', 'circleByClass');
let CircleByClassText = document.createTextNode('drawCircle');
CircleByClass.appendChild(CircleByClassText);
document.body.appendChild(CircleByClass);
fillCircle;
class CircleClass {
    constructor(xCoordinate, yCoordinate, radius, startAngle, endAngle, fillCircle) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillCircle = fillCircle
    }
    draw() {
        var radius = prompt("please input radius");
        radius = Number(radius);
        console.log(this.xCoordinate)
        let me = document.getElementById('designPattern');
        var ctx = me.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.xCoordinate, this.yCoordinate, radius, this.startAngle, this.endAngle);

        ctx.fillStyle = fillCircle
        ctx.fill();
        ctx.stroke();
    }
}
document.getElementById('circleByClass').addEventListener('click', () => { createCircle() })
function createCircle() {
    fillCircle = makeColor()
    let c1 = new CircleClass(150, 72, 5, 0, 2 * Math.PI, fillCircle)
    c1.draw()
}
var rangeColorOne = document.getElementById("rgbpartone");
rangeColorOne.addEventListener('mouseup', colorPartOne)
function colorPartOne() {
    var rangeColorOne = document.getElementById("rgbpartone");
    let rgbPart1 = rangeColorOne.value
    rgbPart1 = Number(rgbPart1);
    return (rgbPart1);
}
var rangeColorTwo = document.getElementById("rgbparttwo");
rangeColorTwo.addEventListener('mouseup', colorPartTwo)
function colorPartTwo() {
    let rgbPart2 = rangeColorTwo.value
    rgbPart2 = Number(rgbPart2);
    return (rgbPart2);
}
var rangeColorThree = document.getElementById("rgbpartthree");
rangeColorThree.addEventListener('mouseup', colorPartThree)
function colorPartThree() {
    let rgbPart3 = rangeColorThree.value
    rgbPart3 = Number(rgbPart3);
    return (rgbPart3);
}
function makeColor(rgbPart1, rgbPart2, rgbPart3) {
    rgbPart1 = colorPartOne();
    rgbPart3 = colorPartThree()
    rgbPart2 = colorPartTwo()
    fillCircle = 'rgb' + '(' + rgbPart1 + ',' + rgbPart2 + ',' + rgbPart3 + ')'
    return (fillCircle);
}