let circleRadius = document.createElement('input');
circleRadius.setAttribute('id', 'circleRadius');
circleRadius.value = 5;
document.body.appendChild(circleRadius);
let drawCircle = document.createElement('button');
drawCircle.setAttribute('id', 'drawCircle');
let draCircleText = document.createTextNode('drawCircle');
drawCircle.appendChild(draCircleText);
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