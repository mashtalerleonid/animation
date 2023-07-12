const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;
const ctx = canvas.getContext("2d");

const btnSpeedUp = document.querySelector("#speedUp");
const btnSpeedDown = document.querySelector("#speedDown");
const btnDistUp = document.querySelector("#distUp");
const btnDistDown = document.querySelector("#distDown");
const btnv1 = document.querySelector("#v1");
const btnv2 = document.querySelector("#v2");

const distValue = document.querySelector(".distValue");
const speedValue = document.querySelector(".speedValue");

btnSpeedUp.addEventListener("click", () => {
    clearInterval(intervalInnerId);
    interval -= 10;
    start();
    speedValue.innerHTML = interval;
});
btnSpeedDown.addEventListener("click", () => {
    clearInterval(intervalInnerId);
    interval += 10;
    start();
    speedValue.innerHTML = interval;
});
btnDistUp.addEventListener("click", () => {
    clearInterval(intervalInnerId);
    d += 10;
    start();
    distValue.innerHTML = d;
});
btnDistDown.addEventListener("click", () => {
    clearInterval(intervalInnerId);
    d -= 10;
    start();
    distValue.innerHTML = d;
});
btnv1.addEventListener("click", () => {
    clearInterval(intervalInnerId);
    transp1Arr = transp11Arr;
    transp2Arr = transp22Arr;
    transp3Arr = transp33Arr;
    start();
});
btnv2.addEventListener("click", () => {
    clearInterval(intervalInnerId);
    transp1Arr = transp111Arr;
    transp2Arr = transp222Arr;
    transp3Arr = transp333Arr;
    start();
});

const params = {
    
};
const color = "rgb(187,230,34)";
const startPoint = { x: 200, y: 200 };

ctx.translate(startPoint.x, startPoint.y);
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.lineJoin = "round";

let intervalInnerId = null;
let interval = 60;
let d = 50;
let pointer = 0;
const k = 10;

distValue.innerHTML = d;
speedValue.innerHTML = interval;

const transp11Arr = [
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
];
const transp22Arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
const transp33Arr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

const transp111Arr = [
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 

];
const transp222Arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];
const transp333Arr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
];

let transp1Arr = transp11Arr;
let transp2Arr = transp22Arr;
let transp3Arr = transp33Arr;

function animate() {
    const len = transp1Arr.length;
       
    ctx.strokeStyle = createRGBAColor(color, transp1Arr[pointer] / k);
    ctx.clearRect(-startPoint.x, -startPoint.y, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, -25);
    ctx.lineTo(50, 0);
    ctx.lineTo(0, 25);
    ctx.stroke();

    ctx.strokeStyle = createRGBAColor(color, transp2Arr[pointer] / k);
    ctx.beginPath();
    ctx.moveTo(d, -25);
    ctx.lineTo(50 + d, 0);
    ctx.lineTo(d, 25);
    ctx.stroke();

    ctx.strokeStyle = createRGBAColor(color, transp3Arr[pointer] / k);
    ctx.beginPath();
    ctx.moveTo(2 * d, -25);
    ctx.lineTo(50 + 2 * d, 0);
    ctx.lineTo(2 * d, 25);
    ctx.stroke();

    pointer += 1;

    if (pointer === len) {
        pointer = 0;
    }
}

function start() {
    intervalInnerId = setInterval(animate, interval);
}

function stop() {
    clearInterval(intervalInnerId);
}

function createRGBAColor(rgbStr, transp) {
    const rgbArr = rgbStr.split(",");
    const r = rgbArr[0].split("(")[1];
    const g = rgbArr[1];
    const b = rgbArr[2].split(")")[0];
    return `rgba(${r},${g},${b},${transp})`;
}

start();
