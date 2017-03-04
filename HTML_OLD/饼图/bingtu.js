window.onload = drawCircle;
var color = [ "#e8d47e", "#fba598", "#ea84c3", "#be87ec", "#94a9fa", "#81d7e4", "#92f8b9"];
var data = [70, 5, 7.5, 12.5, 2,2,1];

function drawCircle() {
    var canvas = document.getElementById("circle");
    var ctx = canvas.getContext("2d");
    var startPoint = 0;
    for (var i = 0; i < data.length; i++) {
        ctx.fillStyle = color[i];
        ctx.beginPath();
        ctx.moveTo(200, 150);
        ctx.arc(200, 150, 150, startPoint, startPoint + Math.PI * 2 * (data[i] / 100), false);
        ctx.fill();
        startPoint += Math.PI * 2 * (data[i] / 100);
    }
}
drawCircle();
