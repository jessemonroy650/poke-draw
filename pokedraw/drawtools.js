/* 

    drawtools.js

0.9.5,2016-02-18 = Some minor internal cleanup
0.9.4,2013-09-09 = BUG; not getting right dot size
0.9.3,2013-09-08 = Added 'strokeStyle'
0.9.0,2013-09-07 = no equallaterals, as we want objects handdrawn. Errors and all.
    Need to validate color changes, and add DEBUG removal 
0.5.0 = Screen size on my Huawei m931 is reported incorrectly.
    It appears to be 320wx520h. We can draw dots on canvas.
    Have primitive "about" screen.

*/
const drawtools_version = "0.9.5";


var dispatchClick = function(x,y) {
    ctx = canvas.getContext("2d");

    // set drawing relative to screen
    x = x - 40;
    y = y - 5;

    // Save the value for later use.
    lineSegments.push(x,y);
    
    // Debug tools
    document.getElementById('db1').innerHTML = lineSegments;
    //document.getElementById('db2').innerHTML = current_numPoints.value; // current_numPoints;
    //document.getElementById('db3').innerHTML = current_width.value; // current_width;

    ctx.fillStyle = current_color.value;
    ctx.strokeStyle = current_color.value;
        width         = current_width.value;
        dotsNeeded    = current_numPoints.value
        dotsHave      = lineSegments.length/2;

        // WE ALWAYS DRAW A DOT
    ctx.beginPath();
    // Interface to function:
    // x, y, radius of circle, start angle, end angle, false=clockwise/true=counter-clockwise
    ctx.arc(x, y, width, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();

    objectToDraw = cPointsToOjectDraw[dotsNeeded];
    pokedraw.updateDebug('db3', objectToDraw);

    if (dotsNeeded == dotsHave) {
        switch (objectToDraw) {
          case 'dot':
            drawdot(x,y,width);
          break;
          case 'line':
                drawline(ctx, lineSegments, width);
          break;
          case 'triangle':
                drawtriangle(ctx, lineSegments, width);
          break;
          case 'box':
                drawbox(ctx, lineSegments, width);
          break;
          default:
        }
        lineSegments = [];
    }
    window.setTimeout(function(){
        document.getElementById('db1').innerHTML = lineSegments;
    }, 500);
}

var drawdot = function(x,y,w) {
    // alert("drawdot");
    // Drawing a dot will always happen.
}


var drawline = function(cx, lnseg, w) {
    //alert("drawline");
    cx.moveTo(lnseg[0], lnseg[1]); 
    cx.lineTo(lnseg[2], lnseg[3]); 
    cx.lineWidth = w ;
    //cx.lineCap = "none";
    cx.closePath();
    cx.stroke();
}

var drawtriangle = function(cx, lnseg, w) {
    //alert("drawtriangle");
    cx.moveTo(lnseg[0], lnseg[1]); 
    cx.lineTo(lnseg[2], lnseg[3]); 
    cx.lineTo(lnseg[4], lnseg[5]); 
    cx.lineWidth = w ;
    //cx.lineCap = "none";
    cx.closePath();
    cx.stroke();
}

var drawbox = function(cx, lnseg, w) {
    //alert("drawbox");
    cx.moveTo(lnseg[0], lnseg[1]); 
    cx.lineTo(lnseg[2], lnseg[3]); 
    cx.lineTo(lnseg[4], lnseg[5]); 
    cx.lineTo(lnseg[6], lnseg[7]); 
    cx.lineWidth = w ;
    //cx.lineCap = "none";
    cx.closePath();
    cx.stroke();
}
