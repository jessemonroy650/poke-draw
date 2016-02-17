/* 

    pokedraw.js

*/

const pokedraw_dim    = {'canvas_width':260,'canvas_height':350};
const pokedraw_color  = {'value':'#f4f4f4'};
const pointsToOjectDraw = {'1':'dot','2':'line','3':'triangle','4':'box'}

var radioV            = {'value':'point', 'color':'lightgreen'};
var current_numPoints = {'value':'1'};

var radioW            = {'value':'pixel_two','color':'lightblue'};
var current_width     = {'value':2};
var current_color     = {'value':'black'};

// The next two (2) unused.
// var current_linecap = 'butt'; // 'round', 'square'
// var current_style   = 'stroke'; // 'fill', 'clip'

// This stores the x,y corrdinates of dots drawn.
// It is cleared (erased) every time the object is drawn.
var lineSegments = [];
