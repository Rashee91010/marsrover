canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var img = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

randomNumber=Math.floor(Math.random()*4);
console.log(randomNumber);

roverwidth = 100;
roverheight = 90;
roverx = 10;
rovery = 10;
backgroundimage = img[randomNumber];
console.log("backgroundimage = "+ backgroundimage);
roverimage = "rover.png";

function add() {
    backgroundimage1 = new Image();
    backgroundimage1.onload = uploadbackground();
    backgroundimage1.src = backgroundimage;
    roverimage1 = new Image();
    roverimage1.onload = uploadrover();
    roverimage1.src = roverimage;
}

function uploadbackground() {
    ctx.drawImage(backgroundimage1, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(roverimage1, roverx, rovery, roverwidth, roverheight);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '37') {
        left();
        console.log("Left key is pressed");
    }
    if (keypressed == '38') {
        up();
        console.log("Up key is pressed");
    }
    if (keypressed == '39') {
        right();
        console.log("Right key is pressed");
    }
    if (keypressed == '40') {
        down();
        console.log("Down key is pressed");
    }
}

function up() {
    if (rovery >= 0) {
        rovery = rovery - 10;
        console.log("When up arrow is pressed, x = " + roverx + "y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}
function down() {
    if (rovery <= 600) {
        rovery = rovery + 10;
        console.log("When down arrow is pressed, x = " + roverx + "y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}

function right() {
    if (roverx <= 750) {
        roverx = roverx + 10;
        console.log("When right arrow is pressed, x = " + roverx + "y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}
function left() {
    if (roverx >= 0) {
        roverx = roverx - 10;
        console.log("When left arrow is pressed, x = " + roverx + "y = " + rovery);
        uploadbackground();
        uploadrover();
    }
}
