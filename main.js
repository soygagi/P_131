function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Estatus: detectando objectos";
}
status = "";
img = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img, 0,0, 640,420);
    fill('#DF0101');
    text("Perro", 45,75);
    noFill();
    stroke("#DF0101");
    rect(30, 60, 450, 350);
    fill("#FF00000");
    text("gato", 320,120);
    noFill();
    stroke("FF00000");
    rect(300,100,300,300);
}
function modelLoaded(){
    console.log("Modelo cargado");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
}