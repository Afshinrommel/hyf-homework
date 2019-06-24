alert("Notification : Movement of mouse will delete all of circles");
let designPattern = document.createElement('canvas');
designPattern.setAttribute('id', 'designPattern');
designPattern.style.position = 'absolute';
var ctx = designPattern.getContext('2d');
document.body.appendChild(designPattern);
setInterval(drawing, 50)
function getRandomRadius() {
    let randomNumber = Math.floor(Math.random() * 18);
    return (randomNumber);
}
function getRandomCoordinate() {
    let xCoordinate = Math.floor(Math.random() * 300);
    let yCoordinate = Math.floor(Math.random() * 180);
    let position = {
        x: xCoordinate,
        y: yCoordinate
    }
    return (position);
}
function drawing() {
    let radius = getRandomRadius();
    radius = Number(radius);
    let location = getRandomCoordinate();
    xCoord = location.x;
    yCoord = location.y;
    let color = getRandomColor();
    color1 = color.rgb1;
    color2 = color.rgb2;
    color3 = color.rgb3;
    fillCircle = 'rgb' + '(' + color1 + ',' + color2 + ',' + color3 + ')'
    ctx.beginPath();
    ctx.arc(xCoord, yCoord, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fillCircle
    ctx.fill();
   // ctx.stroke();
}
function getRandomColor() {
    let rgbNumber1 = Math.floor(Math.random() * 255);
    let rgbNumber2 = Math.floor(Math.random() * 255);
    let rgbNumber3 = Math.floor(Math.random() * 255);
    let colorIndex = {
        rgb1: rgbNumber1,
        rgb2: rgbNumber2,
        rgb3: rgbNumber3
    }
    return (colorIndex);
}


window.addEventListener('mousemove', () => {
    ctx.clearRect(0, 0, 750, 750);
})


