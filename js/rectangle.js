// function to create Rectangle
function Rectangle() {
    var canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext('2d');
    this.drawRect = function (x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
}