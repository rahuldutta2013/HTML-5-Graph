function Axis() {
    this.axisCalculation = function (canvasId, canvasHeight, canvasWidth, totData) {
        var myText = new GraphText();
        var drawMyLine = new Line(); //craeting the object of Line class
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        var arrOfValue = [],
            graphHeight = (this.canvasHeight * 91) / 100,
            origDist = (this.canvasWidth * 10) / 100;
        var color = 'red';
        //craeting the Y axis (10,0)
        if (totData.chart.yAxis === 'true') {
            var val,
                x1 = (this.canvasWidth * 5) / 100,
                y1 = 0,
                x2 = (this.canvasWidth * 5) / 100,
                y2 = this.canvasHeight;
            drawMyLine.drawLine(x1, y1, x2, y2);
            myText.fillText(0, y1 + 10, totData.chart.yaxisname, color);
        }
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
        //creating the division for coloumnChart
        if (totData.chart.trainLine === 'true') {
            var color = 'blue';
            for (var j = 0; j <= 10; j++) {
                drawMyLine.drawLine(x1, yaxis, this.canvasWidth, yaxis);
                myText.fillText(0, yaxis, maxVal, color);
                maxVal = maxVal - gap;
                yaxis = yaxis + gapInYaxis;
            }
        }

        var gapInXAxix, xOrdinate = 0;
        var widthOfBar,
            x,
            noOfBar = totData.data.length,
            rightGap = (this.canvasWidth * 5) / 100,
            gapPlusWidthOfBar = ((this.canvasWidth - rightGap) / noOfBar);
        gapInXAxix = x = widthOfBar = gapPlusWidthOfBar / 2,
            axisType = 'x';
        var color = 'blue';

        // creating the x-Axis
        if (totData.chart.xAxis === 'true') {
            drawMyLine.drawLine(xOrdinate + x, yaxis, this.canvasWidth, yaxis); //creating the x-Axis
            myText.fillText(xOrdinate + x, canvasHeight - ((canvasHeight * 2) / 100), 'Months', color);
            for (var p = 0; p < totData.data.length; p++) {
                myText.fillText(xOrdinate + x, canvasHeight - ((canvasHeight * 6) / 100), totData.data[p].label, color); //writing the value in x-Axis
                xOrdinate = xOrdinate + gapInXAxix + x;
            }
        }

    }
}

