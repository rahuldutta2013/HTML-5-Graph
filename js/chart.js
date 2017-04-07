function Chart(){
    var renderChart = function(){
        //code to render charts
    }
    this.coloumnChart = function(){
        return 'yet not decided';
    }
    this.barChart = function(){
        
    }
    this.piChart = function(){
        
    }
}

function ColoumnChart(){
    Chart.call(this);
    this.coloumnChart = function(){
        return 'coloumn chart generated';
    }
}
ColoumnChart.prototype = Chart.prototype;