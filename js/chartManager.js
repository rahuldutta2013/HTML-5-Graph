var chartManager = function(dataArr){
    var myDataArr = [];
    var dataLength = dataArr.data.length;
    for(var i = 0;i < dataLength;i++){
        myDataArr.push(dataArr.data[i].value);
    }
    console.log(myDataArr);
}