let canvas = document.querySelector(".dino-canvas");
let context = canvas.getContext("2d");

canvas.width = 720;
canvas.height = 220;

let dino = new Image();
let ground = new Image();
let cactus = new Image(); 
dino.src = "./imgs/dinostand.png";
ground.src = "./imgs/ground.png";
cactus.src = "./imgs/ca ctus.png";


let xPos = 10;
let yPos = canvas.height - dino.height;

let gravity = 0.2;
let velY = 1;


function draw() {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    velY += gravity;
	yPos += velY;

    context.drawImage(dino, xPos, yPos);
    context.drawImage(ground, 0, canvas.height - ground.height - 20)
}

canvas.addEventListener("click", function () {
    yPos = yPos - 25;  
})
setInterval(draw, 20);
canvas.addEventListener("mousedown", moveUp);
function moveUp(){
    velY = -4;
    
}