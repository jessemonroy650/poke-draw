# poke-draw
a simple drawing program, that saves images in data:url format (base64)


----

Original Readme

##== Basic Canvas Drawer ==
AKA: PokeDraw
Date: 2013-09-01

Basic drawing of objects by poking. Note drag, swipe, or other gestures.
Options handled by explicit object handling. Undo is built-in to all
drawing capabilities. 

1. color must be decided before drawing
2. width of line must be decided before drawing, if needed
3. number of sides must be decided before drawing
    - 1=paint by method (drop can, splatter can, paint gun, spray can)
    - 2=line
    - 3=triangle
    - 4=square or rectangle
    - >4=nearest polygon definition (ie. pentagon,hexagon,septagon,etc.)

=== BUG #1 ===
If canvas scrolls off the screen, the dot draws relative to the top
of the screen, not where the point was clicked. This means when
the canvas is off, a drawing adjustment must be made - else we 
should get the 'x,y' relative to the canvas. NOTE: This appears
to be a browser bug.
