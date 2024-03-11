let textSorting = 'Começe a ordenar'
let textWait = 'Aguarde...'

let values = [];
let startSort = false;

function mergeSort(a) {
    // create copy of the array
    const a_copy = a.slice()
    // asynchronous sort the copy
    mergeSortSlice(a_copy, 0, a_copy.length);

}
async function mergeSortSlice(a, start, end) {
    if (end - start <= 1)
        return;
    var mid = Math.round((end + start) / 2);
    // wait till divides are sort
    await mergeSortSlice(a, start, mid);
    await mergeSortSlice(a, mid, end);
    // merge divides
    let i = start,
        j = mid;
    while (i < end && j < end) {
        if (a[i] > a[j]) {
            let t = a[j];
            a.splice(j, 1);
            a.splice(i, 0, t);
            j++;
        }
        i++;
        if (i === j) j++;
        // copy back the current state of the sorting
        values = a.slice();
        // slow down
        await sleep(1);
    }
    // restart
    if (start === 0 && end === a.length) {
        await sleep(2);
    }
}

async function bubbleSort(a) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                sorted = false;
                values = a.slice();
                await sleep(1);
            }
        }
    }
    await sleep(200);
    document.getElementById('startButton').disabled = false;
    document.getElementById('startButton').innerText = textSorting;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {
    let canvas = createCanvas(windowWidth * 4 / 9, windowHeight / 3);
    canvas.parent('canvasContainer');
}

let numOfRects = 10;
let rectWidth;

async function mergeSortMain(values) {
    await mergeSort(values);
    document.getElementById('startButton').disabled = false;
    document.getElementById('startButton').innerText = textSorting;
    await sleep(200);
}

function draw() {
    numOfRects = document.getElementById('arraySize').value;
    if (startSort) {
        startSort = false;
        rectWidth = floor(width / numOfRects);
        values =  new Array(floor(width / rectWidth));
        for (let i = 0; i < values.length; i++) {
            values[i] = random(height);
        }
        switch (document.getElementById('algorithm').value) {
            case 'bubbleSort':
                bubbleSort(values);
                break;
            case 'mergeSort':
                mergeSortMain(values);
                break;
        }
    }
    background(23);
    if(numOfRects > 300)
        stroke(255);
    else
        stroke(0);
    fill(255);
    for (let i = 0; i < values.length; i++) {
        rect(i * rectWidth, height - values[i], rectWidth, values[i]);
    }
}

function startSorting() {
    document.getElementById('startButton').disabled = true;
    document.getElementById('startButton').innerText = textWait;
    startSort = true;
    draw();
}

document.getElementById('startButton').addEventListener('click', startSorting);