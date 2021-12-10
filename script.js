"use strict";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
// Initial canvas sizing based on viewport
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

class MatrixSymbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.text = "";
    }

    draw(context) {
        this.text = this.characters.charAt(getRandomInt(this.characters.length));
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

        if (this.y * this.fontSize > this.canvasHeight &&
            Math.random() > 0.99) {
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

class RainEffect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#init();
    }
    // Private method
    #init() {
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new MatrixSymbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }
    // Public method
    resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#init();
    }
}

const effect = new RainEffect(canvas.width, canvas.height);
// Adjust fps
const fps = 60;
const nextFrame = 1000 / fps;
let lastTime = 0;
let timer = 0;

function animate(timestamp = 0) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    if (timer > nextFrame) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.textAlign = "center";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${effect.fontSize}px monospace`;
        ctx.fillStyle = "#0aff0a";
    
        for (let symbol of effect.symbols) {
            symbol.draw(ctx);
        }

        timer = 0;
    } else {
        timer += deltaTime;
    }

    requestAnimationFrame(animate);
}

// Kick off
animate();

// Util funcs
/**
 * @param {number} charsLen 
 * @returns {number}
 */
function getRandomInt(charsLen) {
    return Math.floor(Math.random() * charsLen);
}

function resizeCanvas() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    effect.resize(canvas.width, canvas.height);
}

window.addEventListener("resize", resizeCanvas);