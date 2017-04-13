var canvasId = document.getElementById("myCanvas");
window.addEventListener('load', function () { CanvasResponsive(canvasId) });

$(document).ready(function () {
    window.addEventListener('resize', function () { CanvasResponsive(canvasId) });
});

//function to make canvas responsive
function CanvasResponsive(canvasId) {
    var myChartManager,
        data = [],
        myParserManager = new parserManager(),
        myGetData = myParserManager.getData("js/revenue.json");
    myGetData.then(function (resp) {  //try
        myParserManager.myData = resp;
        myChartManager = new chartManager(myParserManager.myData);
        data = myChartManager.myDataArr.slice();
        var canvasWidth;
        var canvasHeight = 500;
        if (window.innerWidth > 1000) {
            canvasWidth = 1000;
        } else {
            var canvasWidth = (window.innerWidth * 90) / 100;
        }
        canvasHeight = (window.innerHeight * 80) / 100;
        canvasId.setAttribute("width", canvasWidth);  //setting responsive width to canvas 
        canvasId.setAttribute("height", canvasHeight);//setting responsive height to canvas 


       

        var myAxis = new Axis(canvasId, canvasHeight, canvasWidth, myParserManager.myData);
        myAxis.axisCalculation();

        var myColoumnChart = new ColoumnChart();
        myColoumnChart.coloumnChart(data, canvasWidth, canvasHeight);

    })
        .catch(function (err) {  //catch
            console.log(err);
        })
}