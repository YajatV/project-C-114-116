nosex=0;
nosey=0;

function preload(){
    CLownnose=loadImage("https://i.postimg.cc/SsvPYh16/arrow-mustache-heart-clipart-8.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded(){
    console.log('poseNet is initialized');
}

function gotposes(results){
if(results.length > 0){
    console.log(results);
    console.log("nosex= "+results[0].pose.nose.x);
    console.log("nosey= "+results[0].pose.nose.y);
    nosex=results[0].pose.nose.x-15;
    nosey=results[0].pose.nose.y-15;  
}
}

function draw(){
    image(video,0,0,300,300);
    //stroke(255, 0, 0);
    //fill(255, 0, 0);
    //circle(nosex, nosey, 20);
    image(CLownnose,nosex,nosey,25,25)
}

function take_snapshot(){
    save('Yajats Filter.png');
}