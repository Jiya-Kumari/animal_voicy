///teachablemachine.withgoogle.com/models/hnmm7ggTg/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    }) ;
    classifier=ml5.soundClassifier('/teachablemachine.withgoogle.com/models/hnmm7ggTg/mocel.json',modelReady);
}
function modelReady(){
    console.log("model is loaded");
    classifier.classify(gotResults);

}
function gotResults(error,results){
    console.log("got the results");
    
}
function gotResults(error,results){
    console.log(results);
    console.log("got the results");
    random_red=Math.floor(Math.random()*255);
    random_green=Math.floor(Math.random()*255);
    random_blue=Math.floor(Math.random()*255);
document.getElementById("result_label").style.color="rgb("+random_red+","+random_green+","+random_blue+")";
document.getElementById("result_confidence").style.color="rgb("+random_red+","+random_green+","+random_blue+")";
document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+" %";
img1=document.getElementById("alien1");
img2=document.getElementById("alien2");
img3=document.getElementById("alien3");
img4=document.getElementById("alien4");
if(results[0].label=="clap"){
    img1.src="aliens-01.gif";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";
}else if(results[0].label=="drum"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.gif";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";
}else if(results[0].label=="whitle"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.gif";
    img4.src="aliens-04.png";
}else{
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img4.src="gif";
}
}
