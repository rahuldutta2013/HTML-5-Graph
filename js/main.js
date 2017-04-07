$(document).ready(function () {
    var myParserManager = new parserManager();
    var myGetData = myParserManager.getData("js/revenue.json");
    myGetData.then(function (resp) {  //try
        myParserManager.myData = resp;
        var myChartManager = new chartManager(myParserManager.myData);
    })
        .catch(function (err) {  //catch
            console.log(err);
        })
    var myColChart = new ColoumnChart();
    console.log(myColChart.coloumnChart());   
    var chart = new Chart();
    console.log(chart.coloumnChart());
});