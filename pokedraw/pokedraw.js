/* 

    pokedraw.js
    CONSTANTS and GLOBALS

*/

const cPokedrawDim    = {'canvas_width':260,'canvas_height':350};
const cPokedrawColor  = {'value':'#f4f4f4'};
const cPointsToOjectDraw = {'1':'dot','2':'line','3':'triangle','4':'box'}
const cWidthToOjectDraw  = {'1':'thin','2':'normal','4':'thick','8':'thicker'}

var numPointsButton   = {'id': 'dot', 'color': 'button-action'};
var current_numPoints = {'value': 1};

var lineWidthButton   = {'id': 'px2', 'color': 'button-primary'};
var current_width     = {'value':2};

var current_color     = {'value':'black'};

// The next two (2) unused.
// var current_linecap = 'butt'; // 'round', 'square'
// var current_style   = 'stroke'; // 'fill', 'clip'

// This stores the x,y corrdinates of dots drawn.
// It is cleared (erased) every time the object is drawn.
var lineSegments = [];
