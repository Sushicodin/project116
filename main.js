x_nose=0;
y_nose=0;

function preload(){
mustath_image=loadImage("https://i.postimg.cc/59gfxcS6/mustath.png");

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();

video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("posenet is initiulized");
    }
    
    
    function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    image(mustath_image,x_nose,y_nose,35,35);


    }
    
    function take_snapshot(){
        save("snapshot.png");
    }
    
    function gotPoses(results){
        if (results.length>0){
            console.log(results);
            x_nose=results[0].pose.nose.x - 30;
            y_nose=results[0].pose.nose.y - 30;
            console.log("nose x =" + x_nose);
            console.log("nose y =" + y_nose);
        }
    
    }


    


