const canvas = document.getElementById('canvas-fractals');
const container = document.getElementById('fractals-container');
const pageFractals = document.getElementById('page-fractals');
canvas.width = container.offsetWidth;
const ctx = canvas.getContext('2d');


const select = document.getElementById('fractal-select');
const fractalSelect = document.getElementById('fractal-select');
const iterationsInput = document.getElementById('iteration-fractals');

ctx.strokeStyle = "white";
ctx.lineWidth = 5;

const x1 = pageFractals.offsetWidth / 10;
const y1 = 500;
const length = 500;

function drawSierpinski(x1, y1, x2, y2, x3, y3, depth) {
    if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();
    } else {
        const x4 = (x1 + x2) / 2;
        const y4 = (y1 + y2) / 2;
        const x5 = (x2 + x3) / 2;
        const y5 = (y2 + y3) / 2;
        const x6 = (x1 + x3) / 2;
        const y6 = (y1 + y3) / 2;

        drawSierpinski(x1, y1, x4, y4, x6, y6, depth - 1);
        drawSierpinski(x4, y4, x2, y2, x5, y5, depth - 1);
        drawSierpinski(x6, y6, x5, y5, x3, y3, depth - 1);
    }
}
function drawKoch(x1, y1, x2, y2, depth) {
    if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    } else {
        const dx = x2 - x1;
        const dy = y2 - y1;

        const x3 = x1 + dx / 3;
        const y3 = y1 + dy / 3;

        const x4 = x1 + dx / 2 - dy / 6;
        const y4 = y1 + dy / 2 + dx / 6;

        const x5 = x1 + 2 * dx / 3;
        const y5 = y1 + 2 * dy / 3;

        drawKoch(x1, y1, x3, y3, depth - 1);
        drawKoch(x3, y3, x4, y4, depth - 1);
        drawKoch(x4, y4, x5, y5, depth - 1);
        drawKoch(x5, y5, x2, y2, depth - 1);
    }
}
function drawLevy(x1, y1, x2, y2, depth) {[]
    if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    } else {
        const x3 = 0.5 * (x1 + x2) - 0.5 * (y1 - y2);
        const y3 = 0.5 * (y1 + y2) + 0.5 * (x1 - x2);

        drawLevy(x1, y1, x3, y3, depth - 1);
        drawLevy(x3, y3, x2, y2, depth - 1);
    }
}
function drawDragon(x1, y1, x2, y2, depth, dir = 1) {
    if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    } else {
        const midX = (x1 + x2) / 2 + dir * (y2 - y1) / 2;
        const midY = (y1 + y2) / 2 + dir * (x1 - x2) / 2;

        drawDragon(x1, y1, midX, midY, depth - 1, -1);
        drawDragon(midX, midY, x2, y2, depth - 1, 1);
    }
}
function drawFractal() {
    let y3;
    let x3;
    let y2;
    let x2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let iterations = Math.round(document.getElementById('iteration-fractals').value) - 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (select.value === 'koch') {
        x2 = x1 + length / 2;
        y2 = y1 - length * Math.sqrt(3) / 2;
        x3 = x1 + length;
        y3 = y1;

        drawKoch(x2, y2, x1, y1, iterations);
        drawKoch(x3, y3, x2, y2, iterations);
        drawKoch(x1, y1, x3, y3, iterations);
    } else if (select.value === 'sierpinski') {
        x2 = x1 + length / 2;
        y2 = y1 - length * Math.sqrt(3) / 2;
        x3 = x1 + length;
        y3 = y1;

        drawSierpinski(x1, y1, x3, y3, x2, y2, iterations);
    } else if (select.value === 'levy') {
        x2 = x1 + length;
        y2 = y1;
        iterations = (iterations - 1)*2 + 2;
        drawLevy(x1, y1, x2, y2, iterations);
    } else if (select.value === 'dragon') {
        const ya1 = y1 - 100;
        x2 = x1 + length;
        y2 = ya1;
        iterations = (iterations - 1)*2 + 2;
        drawDragon(x1, ya1, x2, y2, iterations);
    }
}

fractalSelect.addEventListener('click', drawFractal);
iterationsInput.addEventListener('change', drawFractal);