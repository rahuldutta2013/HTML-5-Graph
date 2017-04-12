function Axis(canvasId, canvasHeight, canvasWidth, valOfY) {

    this.axisCalculation = function () {
        var canvas = document.getElementById('myCanvas'),
            ctx = canvas.getContext('2d');
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        var arrOfValue = [],
            graphHeight = (this.canvasHeight * 97) / 100,
            origDist = (this.canvasWidth * 10) / 100;

        //craeting the X axis (0,500)
        ctx.beginPath();
        ctx.moveTo(10, this.canvasHeight); //starting point of x-axis(10,500)
        ctx.lineTo(this.canvasWidth, this.canvasHeight);//ending point of x-axis(1000,500)
        ctx.stroke();

        //craeting the Y axis (10,0)
        ctx.beginPath();
        ctx.moveTo((this.canvasWidth * 3) / 100, 0); //starting point of y-axis(10,0)
        ctx.lineTo((this.canvasWidth * 3) / 100, this.canvasHeight);//ending point of y-axis(10,500)
        ctx.stroke();




        for (var i = 0; i < valOfY.data.length; i++) { //getting the value x or y for creating axis
            arrOfValue.push(valOfY.data[i].value);
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
        for (var j = 0; j <= 10; j++) {
           
            ctx.moveTo(0, yaxis);
            ctx.lineTo(1000, yaxis);
            ctx.stroke();
            ctx.beginPath();
           
            ctx.fillStyle  = '#00F';
            // ctx.font  = '90% Sans-Serif';
            ctx.fillText(maxVal, 0 , yaxis-2); //writing the value in y-axis
           
            maxVal = maxVal - gap;
            yaxis = yaxis + gapInYaxis;
        }


        var gapInXAxix, xOrdinate = 0;
        var widthOfBar,
            x,
            noOfBar = valOfY.data.length,
            rightGap = (this.canvasWidth * 5) / 100,
            gapPlusWidthOfBar = ((this.canvasWidth - rightGap) / noOfBar);

        gapInXAxix = x = widthOfBar = gapPlusWidthOfBar / 2;

     
        for (var p = 0; p < valOfY.data.length; p++) {
            ctx.fillStyle  = '#00F';
            ctx.font  = 'bold 110% Sans-Serif';
            ctx.fillText(valOfY.data[p].label, xOrdinate + x, canvasHeight - ((canvasHeight * .5) / 100)); //writing the value in X-axis
            xOrdinate = xOrdinate + gapInXAxix + x;
        }


    }

}