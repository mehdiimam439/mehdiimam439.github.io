/*
    Animation
    by Mehdi Imam
    CISC 3610
    10/5/2022
*/

//Sets up canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.style.backgroundColor = 'rgb(120, 170, 255)';

//Sets up canvas extents
canvas.width = 600;
canvas.height = 400;

ctx.scale(4,4);

const gokuSpriteSheet = new Image();
gokuSpriteSheet.src = "images/spritesheet.png";
gokuSpriteSheet.onload = loadImages;

//Figures out the size of each sprite
let cols = 6;
let rows = 5;
let spriteWidth = gokuSpriteSheet.width / cols;
let spriteHeight = gokuSpriteSheet.height / rows;

ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

//Animation extents
let totalFrames = 5;
let currentFrame = 0;

//Starting sprite
let srcX = 0
let srcY = 1 * spriteHeight;

let frameRate = 10;

let framesDrawn = 0;

function animate() {
    //Clears canvas
    //Called on each new frame
    requestAnimationFrame(animate);
    if(time > 180) {
        if(time > 300) {
            srcY = 4 * spriteHeight
            totalFrames = 2;
            frameRate = 30;
        }
        else {
            srcY = 3 * spriteHeight;
            totalFrames = 6;
            frameRate = 3;
        }
    }
    else {
        srcY = 1 * spriteHeight
        totalFrames = 5;
        frameRate = 10;
    }
    //Current frame
    currentFrame = currentFrame % totalFrames;
    //Shows next sprite image
    srcX = currentFrame * spriteWidth;
    ctx.drawImage(gokuSpriteSheet, srcX, srcY, spriteWidth, spriteHeight, 90, 20, spriteWidth, spriteHeight);

    framesDrawn++;
    if(framesDrawn >= frameRate) {
        currentFrame++;
        framesDrawn = 0;
    }
}

//Prevents canvas from rendering before image
let numOfImages = 1;
function loadImages() {
    if(--numOfImages > 0) return;
    animate();
}

let time = 0;

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDialog();
    drawPac();
    time++;
}

//Dialog variables
let x = 0;
let y = 0;
let dialogTime = 300;
let maxX = 150;
let maxY = 30;
let dx = 150/100;
let dy = 30/100;
let height = 10;
let width = 10;
let fontSize = 10;
let written = false;

function drawDialog() {
    if(time < dialogTime + 100) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, x, y);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.strokeRect(ctx.lineWidth / 3, ctx.lineWidth / 3, x, y);
        if(time > dialogTime) {
            x -= dx;
            y -= dy;
        }
        else if(x + ctx.lineWidth <= maxX) {
            x += dx;
            y += dy;
        }
        else {
            ctx.font = fontSize + "px Arial";
            ctx.fillStyle = 'black';
            ctx.fillText("Pacman: Boo!", fontSize - fontSize / 4, fontSize + fontSize / 4); 
        }
    }
    if(time > 180 && !written) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, x, y);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.strokeRect(ctx.lineWidth / 3, ctx.lineWidth / 3, x, y);
        ctx.fillStyle = 'black';
        ctx.fillText("Goku: Ahhh!", fontSize - fontSize / 4, fontSize + fontSize / 4); 
        if(time > 300) {
            written = true;
        }
    }
    if(time > dialogTime + 90) {
        time = 0;
        written = false;
    }
}

//Pacman variables
let u = 0.4; //->0
let v = 2.5; //->pi
let du = -0.1;
let dv = 0.1;

function drawPac() {
    ctx.beginPath();
    ctx.arc(x/3 + 22, 75, 20, 0 * Math.PI + u, 1 * Math.PI + u);
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x/3 + 22, 75, 20, 0 + v, 1 * Math.PI + v);
    ctx.stroke();
    ctx.fill();
    if(u < 0) {
        du = -du;
        dv = -dv;
    }
    if(u > 0.6) {
        du = -du;
        dv = -dv;
    }
    u+=du;
    v+=dv;
}
setInterval(drawScene, 1);
