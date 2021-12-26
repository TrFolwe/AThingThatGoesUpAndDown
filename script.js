/**
 *
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let y = 75;
let way = false;
let speed = 10;
let power = 0;
const a = ["its about", "drive", "its about", "power"];
let b = 0;
setInterval(() => b >= a.length - 1 ? b = 0 : b++, 600);
function render() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 4, canvas.width, 1); //x 0, y 0 dan başlayarak 10 x 20 y ye kadar siyah kare çizior
    draw(50, 50, 100, y, "#e5b09c", 10);
    way ? y+=speed : y-=speed;
    ctx.fillStyle = "#ffffff";
    ctx.font = "20px Calibri";
    ctx.fillText("power: " + power, 5, 10);
    ctx.font = "30px Calibri";
    ctx.fillText(a[b], 150, 50);
    if(y < 25) {
        power++;
    }
    if(y < 25 || y > 75) way = !way;
    setTimeout(render, 50);
}

function draw(fromX, fromY, toX, toY, color = "#000000", width = 1) {
    ctx.beginPath()
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
}
render();