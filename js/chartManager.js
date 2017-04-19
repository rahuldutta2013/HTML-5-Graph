var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d'),
    caption = $('.caption');

//function to call Axis class and chart class, provied respective data    
var chartManager = function (dataArr, canvasHeight, canvasWidth) {

    //creating a obj of Axis class to draw Axis
    var myAxis = new Axis();
    myAxis.createAxis(canvasHeight, canvasWidth, dataArr);

    //creating the obj of chart class to create chart
    var type = 'coloumnChart';
    var myChart = new Chart(type, dataArr, canvasWidth, canvasHeight);

    // creating the caption of the chart
    var createMyCaption = createCaption(dataArr, canvasHeight, canvasWidth, caption);
}