//depending on type respective Chart will be created
function Chart(type, data, canvasWidth, canvasHeight) {
    switch (type) {
        case 'coloumnChart':
            var myColoumnChart = new ColoumnChart();
            myColoumnChart.createChart(data, canvasWidth, canvasHeight);
            break;
        case 'barChart':
            console.log('yet not created');
            break;
        case 'pointChart':
            console.log('yet not created');
            break;
        case 'piChart':
            console.log('yet not created');
            break;
        case 'lineChart':
            console.log('yet not created');
            break;
    }
    this.renderChart = function () { };
}