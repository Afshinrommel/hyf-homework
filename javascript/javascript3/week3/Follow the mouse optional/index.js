var canvas = document.querySelector("#designPat");
var ctx = canvas.getContext('2d');
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI, true);
    ctx.stroke();
     requestAnimationFrame(update);
   }
   update();
   function getPosition(el) {
     var xPosition = 0;
     var yPosition = 0;
     while (el) {
       yPosition = (el.offsetLeft - el.scrollLeft + el.clientLeft) + yPosition;
       xPosition = (el.offsetLeft - el.scrollLeft + el.clientLeft) + xPosition;
       el = el.offsetParent;
     }
     return {
       x: xPosition,
       y: yPosition
     };
   }
   var mouseX = 0;
   var mouseY = 0;
   canvas.addEventListener("mousemove", setMousePosition, false);
   function setMousePosition(e) {
     var canvasPos = getPosition(canvas);
     mouseX = e.clientX - canvasPos.x;
     mouseY = e.clientY - canvasPos.y;
   } 
 