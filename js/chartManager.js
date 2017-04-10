var chartManager = function(dataArr){
    this.myDataArr = [];
    var dataLength = dataArr.data.length;
    for(var i = 0;i < dataLength;i++){
        this.myDataArr.push(dataArr.data[i].value);
    }
    // console.log(myDataArr);
    // var myColoumnChart = new ColoumnChart();
    // myColoumnChart.coloumnChart(myDataArr);
}