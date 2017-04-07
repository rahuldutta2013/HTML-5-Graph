//function to get data from Json
var parserManager = function () {
    this.myData = [];
    this.getData = function (dataUrl) {
        return $.ajax({
            url: dataUrl,
            type: "GET"
        });
    };
}