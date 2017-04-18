function Axis() {
    var myText = new GraphText();//creating the object of Text class
    var drawMyLine = new Line(); //creating the object of Line class

    function calXAxis(totData, canvasHeight, canvasWidth) {
        var gapInXAxix,
            xOrdinate = 0,
            widthOfBar,
            x,
            color = 'red',
            noOfBar = totData.data.length,
            rightGap = (canvasWidth * 5) / 100,
            gapPlusWidthOfBar = ((canvasWidth - rightGap) / noOfBar);
        gapInXAxix = x = widthOfBar = gapPlusWidthOfBar / 2;

        myText.fillText(xOrdinate + x, canvasHeight - ((canvasHeight * 2) / 100), 'Months', color);
        for (var p = 0; p < totData.data.length; p++) {
            myText.fillText(xOrdinate + x, canvasHeight - ((canvasHeight * 6) / 100), totData.data[p].label, color); //writing the value in x-Axis
            xOrdinate = xOrdinate + gapInXAxix + x;
        }
    }

    function calYAxis(canvasHeight, canvasWidth, totData) {
        var val,
            x1 = (canvasWidth * 5) / 100,
            y1 = 0,
            x2 = (canvasWidth * 5) / 100,
            y2 = canvasHeight,
            color = 'red';

        drawMyLine.drawLine(x1, y1, x2, y2);
        myText.fillText(0, y1 + 10, totData.chart.yaxisname, color);

    }

    function calTrainLines(totData, canvasHeight, canvasWidth) {
        var arrOfValue = [],
            graphHeight = (canvasHeight * 91) / 100;
        for (var i = 0; i < totData.data.length; i++) { //getting the value x or y for creating axis
            arrOfValue.push(totData.data[i].value);
        }
        var gapInYaxis = (graphHeight / 10),
            text = 0,
            yaxis = 0,
            xOrdinate = 0,
            minVal = Math.min.apply(NaN, arrOfValue),
            maxVal = Math.max.apply(NaN, arrOfValue),
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
        var gap = (maxVal - (minVal)) / 10;
        var x1 = (canvasWidth * 5) / 100;

        //creating trainlines
        var color = 'blue';
        for (var j = 0; j <= 10; j++) {
            drawMyLine.drawLine(x1, yaxis, canvasWidth, yaxis);
            myText.fillText(0, yaxis, maxVal, color);
            maxVal = maxVal - gap;
            yaxis = yaxis + gapInYaxis;
        }
    }

    this.createAxis = function (canvasHeight, canvasWidth, totData) {
        if (totData.chart.xAxis === 'true') {
            calXAxis(totData, canvasHeight, canvasWidth);
        }

        if (totData.chart.yAxis === 'true') {
            calYAxis(canvasHeight, canvasWidth, totData);
        }

        if (totData.chart.trainLine === 'true') {
            calTrainLines(totData, canvasHeight, canvasWidth);
        }
    }

}