var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d');

//function to call Axis class and chart class, provied respective data    
var chartManager = function (dataArr, canvasHeight, canvasWidth) {

    //creating a obj of Axis class to draw Axis
    var myAxis = new Axis();
    myAxis.axisCalculation(ctx, canvasHeight, canvasWidth, dataArr);

    //creating the obj of chart class to create chart
    var type = 'coloumnChart';
    var myChart = new Chart(type, dataArr, canvasWidth, canvasHeight);
}