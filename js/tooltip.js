var tooltip = $('span.tooltip');
//craeting tooltip
function handleMouseMove(e, dots, dataArr) {
    var graph = document.getElementById("myCanvas");
    var ctx = graph.getContext("2d");
    var index;
    var canvasOffset = $("#myCanvas").offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    // Put your mousemove stuff here
    var hit = false;
    for (var i = 0; i < dots.length; i++) {
        var dot = dots[i];
        var dx = mouseX - dot.xordi;
        var dy = mouseY - (dot.y);
        var width = dot.width;
        var height = dot.height;
        var rXr = width * height;
        if (mouseX >= dot.xordi && mouseX < (dot.xordi + width) && mouseY >= dot.y && mouseY < (dot.y + height)) {
            hit = true;
            index = i+1;
        }
    }
    if (hit) {
        tooltip.text(dataArr[index]);
        tooltip.css({"top": mouseY, "left": mouseX, "display": "block" });
    } else {
        tooltip.empty().css("display", "none");
    }
}