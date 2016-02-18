/*
    Date: 2016-02-17
*/
//
//
//  Set the color - replaces myColoris()
$('.mypalette').click(function(e) {
    console.log(JSON.stringify(e.target.id));
    var me = e.target.id;
    current_color.value = me;
    document.getElementById('db1').className = me;
});

// Points buttons
$('.pbutton').click(function(e) {
    //console.log(e.target.getAttribute("value"));
    // Save the new 'width' parameter
    current_numPoints.value = e.target.getAttribute("value");
    // remove color from current button
    //console.log(numPointsButton.id,numPointsButton.color);
    $('#' + numPointsButton.id).removeClass(numPointsButton.color);
    // apply color to button clicked
    //console.log(e.target.id,numPointsButton.color);
    $('#' + e.target.id).addClass(numPointsButton.color);
    // save the current active button
    numPointsButton.id = e.target.id;
});

// Width buttons
$('.wbutton').click(function(e) {
    //console.log(e.target.getAttribute("value"));
    // Save the new 'width' parameter
    current_width.value = e.target.getAttribute("value");
    // remove color from current button
    //console.log(lineWidthButton.id,lineWidthButton.color);
    $('#' + lineWidthButton.id).removeClass(lineWidthButton.color);
    // apply color to button clicked
    //console.log(e.target.id,lineWidthButton.color);
    $('#' + e.target.id).addClass(lineWidthButton.color);
    // save the current active button
    lineWidthButton.id = e.target.id;
});


