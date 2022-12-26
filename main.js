video = "";
status = "";
object = [];

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function mobelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop( );
    video.speed(1);
    video.volumn(0);
}
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', mobelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
   }

function draw(){
    image(video, 0, 0, 480, 380);
}   