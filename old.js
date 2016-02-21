var pokedraw = {

    screenSpecs : function() {
        return "width: " + screen.width + ", " +
               "height: " + screen.height + ", " +
               "depth: " + screen.colorDepth + ", " +
               "pixel: " + screen.pixelDepth;
    },
    handleEnd : function(evt) {
        evt.preventDefault();
        //alert(evt.clientX + "," + evt.clientY);
        dispatchClick(evt.clientX,evt.clientY)
    },
    updateDebug : function(box, message) {
	    // bit of a hack
        document.getElementById(box).innerHTML = message;
    }
};

const pokedraw_version = "0.9.6";

//
//    Setup the Canvas
//
var canvas               = document.getElementById("pokedraw_canvas");
var canvas_context       = canvas.getContext("2d");
canvas_context.fillStyle = cPokedrawColor.value;
canvas_context.fillRect(0,0, cPokedrawDim.canvas_width, cPokedrawDim.canvas_height);

// Touch API not working as of 2013-09-02
//canvas.addEventListener("touchend", pokedraw.handleEnd, false);
canvas.addEventListener('mouseup', pokedraw.handleEnd, false);

//
// Text (about)
//
var doc_title = document.getElementById('drawpoke_title');
var doc_heading = document.getElementById('AppName');
var doc_libversion = document.getElementById('LibVersion');
var doc_toolversion = document.getElementById('toolVersion');
var doc_buttonversion = document.getElementById('buttonVersion');
var span_screenSpec = document.getElementById('screenSpecs');

doc_title.innerHTML = doc_title.innerHTML + " " + pokedraw_version;
doc_heading.innerHTML = doc_heading.innerHTML + " " + pokedraw_version;
doc_libversion.innerHTML = drawtools_version;
//doc_toolversion.innerHTML = poketools_version;
doc_buttonversion.innerHTML = pokebuttons_version;
// poketools_version
// pokebuttons_version
span_screenSpec.innerHTML = pokedraw.screenSpecs();

//
// User tool status
//
objectToDraw = cPointsToOjectDraw[current_numPoints.value];
widthToDraw = cWidthToOjectDraw[current_width.value];
//somethingSomething = current_numPoints.value + "," + objectToDraw;

pokedraw.updateDebug('db3', objectToDraw);
// width of line use to draw
pokedraw.updateDebug('db2', widthToDraw);
// lineSegment Values
pokedraw.updateDebug('db1', '');
pokedraw.updateDebug('db0', '');

