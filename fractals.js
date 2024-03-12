

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function setup() {
    let canvas = createCanvas(windowWidth * 0.407, windowHeight / 2);
    canvas.parent('canvasContainer2');
}
function draw() {
    background(12,12,28);
    translate(width / 2, height)
    stroke(255)
    branch(150)
    translate(0, -150)
}
async function branch(length) {
    line(0, 0, 0, -length)
    translate(0, -length)
    if (length > 10) {
        push()
        rotate(PI / 4)
        branch(length * 0.75)
        pop()
        push()
        rotate(-PI / 4)
        branch(length * 0.75)
        pop()
    }
}