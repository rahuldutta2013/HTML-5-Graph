var canvasId = document.getElementById("myCanvas");
window.addEventListener('load', function () { CanvasResponsive(canvasId) });

$(document).ready(function () {
    window.addEventListener('resize', function () { CanvasResponsive(canvasId) });
});

//function to create dynamic height and width of the canvas with respect to the window
function CanvasResponsive(canvasId) {
    var myChartManager,
        data = [],
        myParserManager = new parserManager(),
        myGetData = myParserManager.getData("js/revenue.json");
    myGetData.then(function (resp) {  //try
        myParserManager.myData = resp;

        canvasWidth;
        var canvasHeight = 500;
        if (window.innerWidth > 1000) {
            canvasWidth = 1000;
        } else {
            var canvasWidth = (window.innerWidth * 90) / 100;
        }
        canvasHeight = (window.innerHeight * 80) / 100;
        canvasId.setAttribute("width", canvasWidth);  //setting responsive width to canvas 
        canvasId.setAttribute("height", canvasHeight);//setting responsive height to canvas 

        myChartManager = new chartManager(myParserManager.myData, canvasHeight, canvasWidth); //calling chart manager to create chart

    })
        .catch(function (err) {  //catch
            console.log(err);
        })

}