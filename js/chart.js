function Chart(type, data, canvasWidth, canvasHeight) {
    switch (type) {
        case 'coloumnChart':
            var myColoumnChart = new ColoumnChart();
            myColoumnChart.renderColoumnChart(data, canvasWidth, canvasHeight);
            break;
        case 'barChart':
            console.log('');
            break;
        case 'pointChart':
            console.log('');
            break;
        case 'piChart':
            console.log('');
            break;
        case 'lineChart':
            console.log('');
            break;
    }
    this.renderChart = function () { };
}