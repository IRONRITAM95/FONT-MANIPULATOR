left_wrist_x = 0 ;
right_wrist_x = 0 ;
difference = 0 ;

function setup(){
    canvas = createCanvas(900,700);
    canvas.center() ;
    video = createCapture(VIDEO);
    video.position(10, 200) ;
    video.size(400,400);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function modelLoaded(){
    console.log("POSENT IS INITIALIZED");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x ;
        right_wrist_x = results[0].pose.rightWrist.x ;
        difference = floor(left_wrist_x - right_wrist_x) ;
    }
}

function draw(){
    document.getElementById("hw").innerHTML = difference ;
    fill("red");
    stroke("pink");
    text("RITAM", 50,650);
    textSize(difference);
}