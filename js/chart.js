function Chart() {

    this.coloumnChart = function () {
        return 'yet not decided';
    }
    this.barChart = function () {
        return 'yet not decided';
    }
    this.piChart = function () {
        return 'yet not decided';
    }
}

function ColoumnChart() {
    Chart.call(this);
    this.coloumnChart = function (valOfY, canvasWidth, canvasHeight) { //overriding the coloumnChart property of its parent class
        var gapInXAxix,
            widthOfBar,
            x,
            gap,
            noOfBar = valOfY.length,
            rightGap = (canvasWidth * 5) / 100,
            gapPlusWidthOfBar = ((canvasWidth - rightGap) / noOfBar);

        gapInXAxix = x = widthOfBar = gapPlusWidthOfBar / 2;

        var graphHeight = (canvasHeight * 97) / 100,
            gapInYaxis = (graphHeight / 10),
            canvas = document.getElementById('myCanvas'),
            ctx = canvas.getContext('2d'),
            text = 0,
            yaxis = 0,
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
        console.log(gap);

        //drawing the coloumnChart
        for (var p = 0; p < valOfY.length; p++) {
            ctx.fillStyle = "green";
            if (minVal < 0) {
                valOfY[p] = valOfY[p] - (minVal);
            }
            var val = (gapInYaxis * valOfY[p]) / gap;
            ctx.fillRect(xOrdinate + x, graphHeight, widthOfBar, -val);
            xOrdinate = xOrdinate + gapInXAxix + x;
        }

    }
}
ColoumnChart.prototype = Chart.prototype; //inheriting the ColoumnChart property from chart class into coloumncahrt class