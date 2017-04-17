var createMyRect = new Rectangle();//creating the a object of rectangle class
var tooltip = [];
var rects = [];

// function to create coloumnChart
function ColoumnChart() {
    Chart.call(this);

    this.renderColoumnChart = function (totData, canvasWidth, canvasHeight) { //overriding the renderChart property of chart class

        var valOfY = [];

        var dataLength = totData.data.length;
        for (var i = 0; i < dataLength; i++) {
            valOfY.push(totData.data[i].value);
            tooltip.push(totData.data[i].tooltext);
        }

        var gapInXAxix,
            widthOfBar,
            x,
            gap,
            noOfBar = valOfY.length,
            rightGap = (canvasWidth * 5) / 100,
            gapPlusWidthOfBar = ((canvasWidth - rightGap) / noOfBar);
        gapInXAxix = x = widthOfBar = gapPlusWidthOfBar / 2;

        var graphHeight = (canvasHeight * 91) / 100,
            gapInYaxis = (graphHeight / 10),
            xOrdinate = 0,
            minVal = Math.min.apply(NaN, valOfY),
            maxVal = Math.max.apply(NaN, valOfY),
            minAbs = Math.abs(minVal),
            maxAbs = Math.abs(maxVal),
            strMax = JSON.stringify(maxAbs),
            strMin = JSON.stringify(minAbs),
            resMax = strMax.split(""),
            resMin = strMin.split(""),
            addedValMax = resMax.length,
            addedValMin = resMin.length,
            limitHigh = Math.pow(10, addedValMax - 2),
            limitLow = Math.pow(10, addedValMin - 2);
        maxVal += limitHigh;
        if (minVal > 0) {
            minVal = 0;
        } else {
            minVal -= limitLow;
        }

        gap = (maxVal - (minVal)) / 10;
        var color = 'green';
        //drawing the rectangle of coloumnChart
        for (var p = 0; p < valOfY.length; p++) {
            if (minVal < 0) {
                valOfY[p] = valOfY[p] - (minVal);
            }
            var val = (gapInYaxis * valOfY[p]) / gap,
                obj = {};
            obj.xordi = xOrdinate + x;
            obj.y = graphHeight - val;
            obj.width = widthOfBar;
            obj.height = val;
            rects.push(obj);
            createMyRect.drawRect(xOrdinate + x, graphHeight, widthOfBar, -val, color);//draws rectangle on graph
            xOrdinate = xOrdinate + gapInXAxix + x;
        }
    }
}
ColoumnChart.prototype = Chart.prototype; //inheriting the ColoumnChart property from chart class into coloumncahrt class

$(document).on('mousemove', '#myCanvas', function () {
    handleMouseMove(event, rects, tooltip);
});