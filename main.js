objects = [];
states = "";

function preload(){
    img = loadImage("1.jpg");
    img2 - loadImage("tv.webp");
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    states = true;
}

function gotResults(error , results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}