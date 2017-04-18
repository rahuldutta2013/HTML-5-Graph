var createMyRect = new Rectangle(),//creating the a object of rectangle class
    tooltip = [];

// function to create coloumnChart
function ColoumnChart() {
    Chart.call(this);

    //function to calculate coloumn property. it returns an array of co-ordinates of rectangles 
    function calculateColomnProprety(totData, canvasWidth, canvasHeight) {
        var valOfY = [],
            dataLength = totData.data.length;

        for (var i = 0; i < dataLength; i++) {
            valOfY.push(totData.data[i].value);//getting the value of rectangles
            tooltip.push(totData.data[i].tooltext); //getting the value of tooltip
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
            limitLow = Math.pow(10, addedValMin - 2),
            rects = [],
            coOrdinatesOfRectangle = [];

        maxVal += limitHigh;
        if (minVal > 0) {
            minVal = 0;
        } else {
            minVal -= limitLow;
        }

        gap = (maxVal - (minVal)) / 10;

        //drawing the rectangle of coloumnChart
        for (var p = 0; p < valOfY.length; p++) {
            if (minVal < 0) {
                valOfY[p] = valOfY[p] - (minVal);
            }
            var val = (gapInYaxis * valOfY[p]) / gap,
                obj = {},
                objOfRectangle = {};

            objOfRectangle.xordi = xOrdinate + x;
            objOfRectangle.y = graphHeight;
            objOfRectangle.width = widthOfBar;
            objOfRectangle.height = -val;

            obj.xordi = xOrdinate + x;
            obj.y = graphHeight - val;
            obj.width = widthOfBar;
            obj.height = val;

            rects.push(obj); //getting the co-ordinates of each rectangle,will be used in mouse hover
            coOrdinatesOfRectangle.push(objOfRectangle)//getting the co-ordinates of rectangles to draw

            xOrdinate = xOrdinate + gapInXAxix + x;
        }

        //binding event to show tooltip
        $(document).off().on('mousemove', '#myCanvas', function () {
            handleMouseMove(event, rects, tooltip);
        });

        return coOrdinatesOfRectangle;
    }

    //function to draw rectangles on canvas
    function drawColoumnChart(arr) {
        var dataLength = arr.length;
        var color = 'green';
        for (var i = 0; i < dataLength; i++) {
            createMyRect.drawRect(arr[i].xordi, arr[i].y, arr[i].width, arr[i].height, color);
        }
    }

    //function to render coloumn chart
    this.createChart = function (totData, canvasWidth, canvasHeight) {
        var obj = calculateColomnProprety(totData, canvasWidth, canvasHeight);
        drawColoumnChart(obj);
    }
}
ColoumnChart.prototype = Chart.prototype; //inheriting the ColoumnChart property from chart class into coloumncahrt class
