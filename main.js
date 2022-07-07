//  https://teachablemachine.withgoogle.com/models/s94QGL0Wo/o

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true,video:false});


    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HKaa43UK7/model.json ',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}




function gotResults(error, results) {
    if (error){
        console.error(error);
    } else {
        console.log(results);
      
document.getElementById("animal_voices").innerHTML = results[0].label;
    }
} 