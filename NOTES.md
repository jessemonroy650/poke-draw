## NOTES ##

my phone: http://wikiknowledgee.com/huawei-premia-4g-m931-price-full-specifications/

http://www.w3schools.com/html/html5_canvas.asp
http://www.w3schools.com/html/html5_svg.asp
http://www.w3schools.com/tags/ref_canvas.asp

draws a dot
http://billmill.org/static/canvastutorial/ball.html

Touch events seem not to be support broadly yet.
Use mouse events
http://www.w3schools.com/tags/ref_eventattributes.asp
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

''canvas context mode, which is initially none but can be changed
to either '''direct-2d, direct-webgl, indirect,''' or '''proxied'''''
http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#htmlcanvaselement


= 4.8.11 The canvas element =

http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html

== 4.8.11.2 The 2D rendering context ==

http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#htmlcanvaselement


=== 4.8.11.2.2 The canvas state ===

Each CanvasRenderingContext2D rendering context maintains a stack of drawing states. Drawing states consist of:

* The current transformation matrix.
* The current clipping region.
* The current values of the following attributes: strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled.
* The current dash list.

=== 4.8.11.2.6 Building paths ===

Each object implementing the CanvasPathMethods interface has a path. A path has a list of zero or more subpaths. Each subpath consists of a list of one or more points, connected by straight or curved lines, and a flag indicating whether the subpath is closed or not. A closed subpath is one where the last point of the subpath is connected to the first point of the subpath by a straight line. Subpaths with only one point are ignored when painting the path.

When an object implementing the CanvasPathMethods interface is created, its path must be initialized to zero subpaths.



