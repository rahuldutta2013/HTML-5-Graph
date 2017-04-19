function Axis() {
    var myText = new GraphText();//creating the object of Text class
    var drawMyLine = new Line(); //creating the object of Line class

    var calXAxis = function (totData, canvasHeight, canvasWidth) {
        var gapInXAxix,
            xOrdinate = 0,
            widthOfBar,
            x,
            color = 'red',
            noOfBar = totData.data.length,
            rightGap = (canvasWidth * 5) / 100,
            gapPlusWidthOfBar = ((canvasWidth - rightGap) / noOfBar);
        gapInXAxix = x = widthOfBar = gapPlusWidthOfBar / 2;
        var arr = [];
        var xAxisName = {};
        xAxisName.x = xOrdinate + x;
        xAxisName.y = canvasHeight - ((canvasHeight * 2) / 100);
        xAxisName.label = 'Months';
        xAxisName.color = 'brown';
        arr.push(xAxisName);
        for (var p = 0; p < totData.data.length; p++) {
            var text = {}, line = {}, obj = {};
            text.x = xOrdinate + x;
            text.y = canvasHeight - ((canvasHeight * 6) / 100);
            text.label = totData.data[p].label;
            text.color = color;
            arr.push(text);
            xOrdinate = xOrdinate + gapInXAxix + x;
        }
        return arr; //returning co-ordinates of x-axis
    }

    var calYAxis = function (canvasHeight, canvasWidth, totData) {
        var val,
            x1 = (canvasWidth * 5) / 100,
            y1 = 0,
            x2 = (canvasWidth * 5) / 100,
            y2 = canvasHeight,
            color = 'red';
        var text = {}, line = {}, obj = {}, arr = [];
        text.x = 0;
        text.y = y1 + 10;
        text.label = totData.chart.yaxisname;
        text.color = color;
        line.x1 = x1;
        line.y1 = y1;
        line.x2 = x2;
        line.y2 = y2;
        obj.line = line;
        obj.text = text;
        arr.push(obj);
        return arr; //returning co-ordinates of y-axis
    }

    var calTrendLines = function (totData, canvasHeight, canvasWidth) {
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
        var color = 'blue',
            arr = [];
        for (var j = 0; j <= 10; j++) {
            var line = {}, text = {}, obj = {};

            line.x1 = x1;
            line.y1 = yaxis;
            line.x2 = canvasWidth;
            line.y2 = yaxis;
            text.x = 0;
            text.y = yaxis;
            text.label = maxVal;
            text.color = color;
            obj.trendLine = line;
            obj.trendText = text;
            arr.push(obj);
            maxVal = maxVal - gap;
            yaxis = yaxis + gapInYaxis;
        }
        return arr; //returning the co-ordinates of trendlins
    }

    this.createAxis = function (canvasHeight, canvasWidth, totData) {
        if (totData.chart.xAxis === 'true') {
            var xAxis = calXAxis(totData, canvasHeight, canvasWidth);
            for (var i = 0; i < xAxis.length; i++) {
                myText.fillText(xAxis[i].x, xAxis[i].y, xAxis[i].label, xAxis[i].color); //creating x-axis          
            }
        }

        if (totData.chart.yAxis === 'true') {
            var yAxis = calYAxis(canvasHeight, canvasWidth, totData);
            //creating y-axis
            for (var i = 0; i < yAxis.length; i++) {
                myText.fillText(yAxis[i].text.x, yAxis[i].text.y, yAxis[i].text.label, yAxis[i].text.color);
                drawMyLine.drawLine(yAxis[i].line.x1, yAxis[i].line.y1, yAxis[i].line.x2, yAxis[i].line.y2);
            }
        }

        if (totData.chart.trendLine === 'true') {
            var trendlineArr = calTrendLines(totData, canvasHeight, canvasWidth);
            // creating trendlins
            for (var i = 0; i < trendlineArr.length; i++) {
                myText.fillText(trendlineArr[i].trendText.x, trendlineArr[i].trendText.y, trendlineArr[i].trendText.label, trendlineArr[i].trendText.color); //writing the value in x-Axis
                drawMyLine.drawLine(trendlineArr[i].trendLine.x1, trendlineArr[i].trendLine.y1, trendlineArr[i].trendLine.x2, trendlineArr[i].trendLine.y2);
            }
        }
    }
}