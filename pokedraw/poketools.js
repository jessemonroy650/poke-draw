/* 

    poketools.js

0.5.0 = Screen size on my Huawei m931 is reported incorrectly.
    It appears to be 320wx520h. We can draw dots on canvas.
    Have primitive "about" screen.
0.6.0,2013-09-05 - Got two (2) new screens (about,point) working & installed.
    Need connect data.
0.8.0,2013-09-07 - Need 'Undo' button to do something, palette not working either
0.8.2,2013-09-08 - Added updateDebug functionallity

*/
// Unimplemented
//var wrapper = function() { alert("wrapper"); }
//var wrapper_canvas = function() { alert("wrapper_canvas"); }
//var wrapper_button = function() { alert("wrapper_button"); }
// Remove as canvas has it's own event handler. On 2013-09-05
//var pokedraw_canvas = function() {
//    alert("pokedraw_canvas");
//}

const poketools_version = "0.8.0";

var palette = function() {
    alert("palette"); 
}

var button_linewidth = function() {
    aux = document.getElementById('sizeConfig');

    if (aux.style.display == 'none') {
        aux.style.display = 'block';
    } else {
        aux.style.display = 'none';
    }
    updateDebug('db2', current_width.value);
}

var button_undo = function() {
    alert("button_undo");
}

// http://www.randomsnippets.com/2008/02/12/how-to-hide-and-show-your-div/
var button_pointnumber = function() {
    aux = document.getElementById('pointConfig');

    if (aux.style.display == 'none') {
        aux.style.display = 'block';
    } else {
        aux.style.display = 'none';
    }
        objectToDraw = pointsToOjectDraw[current_numPoints.value];
        //somethingSomething = current_numPoints.value + "," + objectToDraw;
    updateDebug('db3', objectToDraw);

}

var app_icon = function() {
    aux = document.getElementById('about');

    if (aux.style.display == 'none') {
        aux.style.display = 'block';
    } else {
        aux.style.display = 'none';
    }
}
