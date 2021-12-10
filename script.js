"use strict";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
// Initial canvas sizing based on viewport
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

class Symbol {
    constructor() {

    }

    draw() {

    }
}

class RainEffect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
    }
    // Private method
    #init() {

    }
    // Public method
}

function animate() {

}












window.addEventListener("resize", resizeCanvas);

function resizeCanvas(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}