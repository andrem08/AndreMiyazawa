let counter = 0;
function setup() {
    createCanvas(600, 600);
    noStroke();
    fill(255, 204, 0);
    background(0)
}

function draw() {
    if(counter*30 > width+ 10){
        counter = -1;
    }
    background("rgba(0, 0, 0 ,0.1)");
    let y = sin(counter)*100 + height/2;
    let x = counter*30;

    ellipse(x, y, 20, 20);

    counter = counter + 0.05
}