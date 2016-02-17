var screenSpecs = function() {
	return "width: " + screen.width + ", " +
		"height: " + screen.height + ", " +
		"depth: " + screen.colorDepth + ", " +
		"pixel: " + screen.pixelDepth;
};

var handleEnd = function(evt) {
	evt.preventDefault();
	//alert(evt.clientX + "," + evt.clientY);
	dispatchClick(evt.clientX,evt.clientY)
};

var handleClick = function(x) {  
    return;
	//alert("handleClick");
	var me = document.getElementById(x);

	re = /button/;
	answer = re.exec(me.className);
	if (answer) {
		class_base = 'button';
	} else {
		class_base = 'palette';
	}
	me.className = class_base + '_active';
	//alert(me.id);
	window.setTimeout(function() {
		me.className = class_base + '_normal';
	}, 200);
	//alert(me.id);
	funcName = me.id.toString();

	//
	// The element 'id' doubles as the function name to call.
	//
	eval(funcName + '()');
};

//
// This functions set the background on the radio buttons.
// Mainly because the radio buttons are difficult to read on a phone.
// This function is cleaned up, and Reusable. 2013-09-03
// NOTE: rvStore stores the node ID an assoicative array.
//
function setMe(x, color, oldId, oldValue) {
    me       = document.getElementById(x.id);
    oldThing = document.getElementById(oldId['value']);

    if (me) {
        if (oldThing) {
            // if the ID of the Calling Node != the last node
            // mark it unselected
            if (oldThing.id != me.id) {
                // reset the color of the Last Node we modifiy
                oldThing.parentNode.style.backgroundColor = 'white';
                oldThing.checked = false;
            }
        }
        // save the values we are getting; overwriting what's there
        oldId['value']    = me.id;
	oldValue['value'] = me.value;
	// This change the background-color of the parent.
	// In this case, it is a box surrounding this.
        me.parentNode.style.backgroundColor = color;
        me.checked = true;
    }
}

function myColorIs(me) {
	//var x = document.getElementById(me);
	//alert(me);
	current_color.value = me;
	document.getElementById('db1').className = me;
}


function updateDebug(box, message) {
	// bit of a hack
        document.getElementById(box).innerHTML = message;
}


	const pokedraw_version = "0.8.9.0.0";

	var canvas = document.getElementById("pokedraw_canvas");
	var canvas_context = canvas.getContext("2d");
	canvas_context.fillStyle = pokedraw_color.value;
	canvas_context.fillRect(0,0, pokedraw_dim.canvas_width, pokedraw_dim.canvas_height);

	// Touch API not working as of 2013-09-02
	//canvas.addEventListener("touchend", handleEnd, false);
	canvas.addEventListener('mouseup', handleEnd, false);

	var doc_title = document.getElementById('drawpoke_title');
	var doc_heading = document.getElementById('AppName');
	var doc_libversion = document.getElementById('LibVersion');
	var span_screenSpec = document.getElementById('screenSpecs');

	doc_title.innerHTML = doc_title.innerHTML + " " + pokedraw_version;
	doc_heading.innerHTML = doc_heading.innerHTML + " " + pokedraw_version;
	span_screenSpec.innerHTML = screenSpecs();

	var points = document.getElementById(radioV['value']);
	var width = document.getElementById(radioW['value']);
	points.checked = true;
	width.checked  = true;
	points.parentNode.style.backgroundColor = 'lightgreen';
	width.parentNode.style.backgroundColor  = 'lightblue';

    objectToDraw = pointsToOjectDraw[current_numPoints.value];
    //somethingSomething = current_numPoints.value + "," + objectToDraw;

	updateDebug('db3', objectToDraw);
	// width of line use to draw
	updateDebug('db2', current_width.value);
	// lineSegment Values
	updateDebug('db1', '');
	updateDebug('db0', '');

