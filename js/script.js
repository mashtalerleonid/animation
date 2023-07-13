class ArrowAnimation {
    constructor() {
        this.canvas = document.querySelector("#canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight * 0.8;
        this.ctx = this.canvas.getContext("2d");
        this.startPoint = {};
        this.ctx.lineWidth = 0;
        this.ctx.lineCap = "round";
        this.ctx.lineJoin = "round";

        this.color = "rgb(187,230,34)";

        this.intervalId = null;
        this.interval = 20;
        this.distBetweenArrows = 15 + 10;
        this.pointer = 0;
        this.k = 10;
        this.angle = 0;
    }

    start() {
        this.intervalInnerId = setInterval(this.animate.bind(this), this.interval);
    }

    stop() {
        clearInterval(this.intervalInnerId);
    }

    setStartPoint(point) {
        this.startPoint = point;
    }

    setLineWidth(width) {
        this.ctx.lineWidth = width;
    }

    animate() {
        const ctx = this.ctx;
        const len = this.distBetweenArrows;
        const d = this.distBetweenArrows;
        let tr = 0;
        let k = (0.33 * (d - this.pointer)) / d;

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.save();
        ctx.translate(this.startPoint.x, this.startPoint.y);
        ctx.rotate(this.angle);

        tr = 0.66 + k;
        ctx.strokeStyle = `rgba(256,256,256,${tr})`;
        ctx.lineWidth += 2;
        ctx.beginPath();
        ctx.moveTo(0 + this.pointer, -10);
        ctx.lineTo(10 + this.pointer, 0);
        ctx.lineTo(0 + this.pointer, 10);
        ctx.stroke();

        ctx.strokeStyle = `rgba(187,230,34,${tr})`;
        ctx.lineWidth -= 2;
        ctx.beginPath();
        ctx.moveTo(0 + this.pointer, -10);
        ctx.lineTo(10 + this.pointer, 0);
        ctx.lineTo(0 + this.pointer, 10);
        ctx.stroke();

        tr = 0.33 + k;
        ctx.strokeStyle = `rgba(256,256,256,${tr})`;
        ctx.lineWidth += 2;
        ctx.beginPath();
        ctx.moveTo(d + this.pointer, -10);
        ctx.lineTo(10 + d + this.pointer, 0);
        ctx.lineTo(d + this.pointer, 10);
        ctx.stroke();

        ctx.strokeStyle = `rgba(187,230,34,${tr})`;
        ctx.lineWidth -= 2;
        ctx.beginPath();
        ctx.moveTo(d + this.pointer, -10);
        ctx.lineTo(10 + d + this.pointer, 0);
        ctx.lineTo(d + this.pointer, 10);
        ctx.stroke();

        tr = k;
        ctx.strokeStyle = `rgba(256,256,256,${tr})`;
        ctx.lineWidth += 2;
        ctx.beginPath();
        ctx.moveTo(2 * d + this.pointer, -10);
        ctx.lineTo(10 + 2 * d + this.pointer, 0);
        ctx.lineTo(2 * d + this.pointer, 10);
        ctx.stroke();

        ctx.strokeStyle = `rgba(187,230,34,${tr})`;
        ctx.lineWidth -= 2;
        ctx.beginPath();
        ctx.moveTo(2 * d + this.pointer, -10);
        ctx.lineTo(10 + 2 * d + this.pointer, 0);
        ctx.lineTo(2 * d + this.pointer, 10);
        ctx.stroke();

        ctx.restore();

        this.pointer += 1;

        if (this.pointer === len) {
            this.pointer = 0;
        }
    }
}

// --------------------------------------------------

const arrowAnimation = new ArrowAnimation();
arrowAnimation.setStartPoint({ x: 200, y: 200 });
arrowAnimation.setLineWidth(3);
arrowAnimation.angle = 0;
arrowAnimation.start();

const btnSpeedUp = document.querySelector("#speedUp");
const btnSpeedDown = document.querySelector("#speedDown");
const speedValue = document.querySelector(".speedValue");

btnSpeedUp.addEventListener("click", () => {
    arrowAnimation.stop();
    arrowAnimation.interval -= 1;
    arrowAnimation.start();
    speedValue.innerHTML = arrowAnimation.interval;
});
btnSpeedDown.addEventListener("click", () => {
    arrowAnimation.stop();
    arrowAnimation.interval += 1;
    arrowAnimation.start();
    speedValue.innerHTML = arrowAnimation.interval;
});

speedValue.innerHTML = arrowAnimation.interval;

// arrowAnimation.angle = -Math.PI / 4;
