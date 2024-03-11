let textSorting = 'Começe a ordenar'
let textWait = 'Aguarde...'
let time1 = 1;
let time2 = 200;

let values = [];
let startSort = false;

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
                await sleep(time1);
            }
        }
    }
    await sleep(time2);
    document.getElementById('startButton').disabled = false;
    document.getElementById('startButton').innerText = textSorting;
}
async function selectionSort(a) {

    for(let i = 0; i < a.length; i++) {
        let min = i;
        for(let j = i+1; j < a.length; j++){
            if(a[j] < a[min]) {
                min=j;
            }
        }
        if (min !== i) {
            let tmp = a[i];
            a[i] = a[min];
            a[min] = tmp;
        }
        values = a.slice();
        await sleep(time1);
    }
    document.getElementById('startButton').disabled = false;
    document.getElementById('startButton').innerText = textSorting;
    await sleep(time2);
}

async function mergeSort(a) {
    for (let size = 1; size < a.length; size *= 2) {
        for (let leftStart = 0; leftStart < a.length; leftStart += 2 * size) {
            let mid = Math.min(leftStart + size, a.length);
            let rightEnd = Math.min(leftStart + 2 * size, a.length);
            let left = leftStart;
            let right = mid;
            let temp = [];

            while (left < mid && right < rightEnd) {
                if (a[left] <= a[right]) {
                    temp.push(a[left++]);
                } else {
                    temp.push(a[right++]);
                }
            }

            while (left < mid) {
                temp.push(a[left++]);
            }

            while (right < rightEnd) {
                temp.push(a[right++]);
            }

            for (let i = 0; i < temp.length; i++) {
                a[leftStart + i] = temp[i];
            }

            values = a.slice();
            await sleep(time1);
        }
    }
    await sleep(time2);
    document.getElementById('startButton').disabled = false;
    document.getElementById('startButton').innerText = textSorting;
}

async function quickSort(a) {
    let stack = [];
    stack.push(0);
    stack.push(a.length - 1);

    while (stack.length > 0) {
        let end = stack.pop();
        let start = stack.pop();

        // Generate a random index between start and end
        let randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;

        // Swap elements at randomIndex and end
        let temp = a[randomIndex];
        a[randomIndex] = a[end];
        a[end] = temp;

        let pivotIndex = start;
        for (let i = start; i < end; i++) {
            if (a[i] < a[end]) {
                // Swap elements at i and pivotIndex
                temp = a[i];
                a[i] = a[pivotIndex];
                a[pivotIndex] = temp;
                pivotIndex++;
                await sleep(time1);
            }
        }
        // Swap elements at pivotIndex and end
        temp = a[pivotIndex];
        a[pivotIndex] = a[end];
        a[end] = temp;

        values = a.slice();

        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    await sleep(time2);
    document.getElementById('startButton').disabled = false;
    document.getElementById('startButton').innerText = textSorting;
}

async function heapSort(a) {
    let n = a.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(a, n, i);
    }

    // Heap sort
    for (let i = n - 1; i >= 0; i--) {
        let temp = a[0];
        a[0] = a[i];
        a[i] = temp;

        // Heapify root element
        await heapify(a, i, 0);
    }

    await sleep(time2);
    document.getElementById('startButton').disabled = false;
    document.getElementById('startButton').innerText = textSorting;
}

async function heapify(a, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    while (true) {
        // If left child is larger than root
        if (left < n && a[left] > a[largest]) {
            largest = left;
        }

        // If right child is larger than largest so far
        if (right < n && a[right] > a[largest]) {
            largest = right;
        }

        // If largest is not root
        if (largest !== i) {
            let swap = a[i];
            a[i] = a[largest];
            a[largest] = swap;

            // Move to next node
            i = largest;
            left = 2 * i + 1;
            right = 2 * i + 2;
        } else {
            break;
        }

        values = a.slice();
        await sleep(time1);
    }
}


async function countingSort() {
    const N = values.length;

    // Finding the maximum element of inputArray
    let M = 0;
    for (let i = 0; i < N; i++) {
        M = Math.max(M, values[i]);
    }

    // Initializing countArray with 0
    const countArray = new Array(M + 1).fill(0);

    // Mapping each element of inputArray as an index of countArray
    for (let i = 0; i < N; i++) {
        countArray[values[i]]++;
    }

    // Calculating prefix sum at every index of countArray
    for (let i = 1; i <= M; i++) {
        countArray[i] += countArray[i - 1];
    }

    // Creating outputArray from countArray
    const outputArray = new Array(N);
    for (let i = N - 1; i >= 0; i--) {
        outputArray[countArray[values[i]] - 1] = values[i];
        countArray[values[i]]--;
        values = outputArray.slice(0, countArray[values[i]]);
        await sleep(time1);
    }

    values = outputArray;
}

async function radixSort(a) {
    let max = Math.max(...a.map(el => Math.floor(Math.log10(Math.abs(el))) + 1));
    for (let i = 0; i < max; i++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < a.length; j++) {
            let digit = Math.floor(Math.abs(a[j]) / Math.pow(10, i)) % 10;
            buckets[digit].push(a[j]);
            await sleep(time1);
        }
        a = [].concat(...buckets);
        values = a.slice();
    }
    document.getElementById('startButton').disabled = false;
    document.getElementById('startButton').innerText = textSorting;
    await sleep(time2);
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


function draw() {
    numOfRects = document.getElementById('arraySize').value;
    if(numOfRects > 500)
        numOfRects = 500;
    time1 = document.getElementById('speed').value;
    if(time1 > 100)
        time1 = 100;
    if (startSort) {
        startSort = false;
        rectWidth = Math.floor(width / numOfRects);
        values =  new Array(Math.floor(width / rectWidth));
        for (let i = 0; i < values.length; i++) {
            values[i] = random(height);
        }
        switch (document.getElementById('algorithm').value) {
            case 'bubbleSort':
                bubbleSort(values);
                break;
            case 'mergeSort':
                mergeSort(values);
                // document.getElementById('startButton').disabled = false;
                // document.getElementById('startButton').innerText = textSorting;
                break;
            case 'radixSort':
                radixSort(values);
                break;
            case 'countingSort':
                countingSort(values);
                break;
            case 'selectionSort':
                selectionSort(values);
                break;
            case 'quickSort':
                quickSort(values);
                break;
            case 'heapSort':
                heapSort(values);
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

function reloadScript() {
    // Remove the existing script
    let oldScript = document.querySelector('script[src="sorters.js"]');
    oldScript.parentNode.removeChild(oldScript);

    // Create a new script
    let newScript = document.createElement('script');
    newScript.src = "sorters.js";

    // Add the new script to the DOM
    document.body.appendChild(newScript);
}

document.getElementById('startButton').addEventListener('click', startSorting);