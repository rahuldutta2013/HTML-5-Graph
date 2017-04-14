var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d');

//function to call Axis class and chart class, provied respective data    
var chartManager = function (dataArr, canvasHeight, canvasWidth) {
    this.myDataArr = [];
    var arrOfTooltip = [];
    var dataLength = dataArr.data.length;
    for (var i = 0; i < dataLength; i++) {
        this.myDataArr.push(dataArr.data[i].value);
        arrOfTooltip.push(dataArr.data[i].tooltext);
    }

    //creating a obj of Axis class to draw Axis
    var myAxis = new Axis();
    myAxis.axisCalculation(ctx, canvasHeight, canvasWidth, dataArr);

    //creating a obj of coloumn cahrt to draw a chart
    var myColoumnChart = new ColoumnChart();
    myColoumnChart.coloumnChart(this.myDataArr, canvasWidth, canvasHeight);

// attach mousemove event
$(document).on('mousemove', '#myCanvas', function () {
    handleMouseMove(event, myColoumnChart.arrOfOrdinate, arrOfTooltip);
});


}