Status="";
objects=[];
function preload(){
    alarm= loadSound("alarm.mp3");
    img = loadImage("background.jpg");
}

function setup(){
    canvas= createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();

    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

} 
function modelLoaded(){
    console.log("Model Loaded!");
    Status= true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error , results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(video, 0, 0, 380, 380);
      for(i=0 ; i <objects.length;i++){
        if(objects[i].label = "persons")
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementsById("baby_status").innerHTMl ="Baby Detected";
            alarm.stop();
            
          }
          else{
            alarm.play();
          }
        
      }
       
  }
