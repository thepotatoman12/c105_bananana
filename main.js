Webcam.set({
    width:350,
    height:300,image_format: 'png',
    png_quality:90
});
 camera = document.getElementById("camorita");

 Webcam.attach('#camorita');

 function takeSnapshot(){
    Webcam.snap(function(the_closet_at_night){
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+the_closet_at_night+'"/>';
    });
 }

 console.log("ml5 version: ",ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4XHEKSBzg/model.json',modelLoaded);
  function modelLoaded(){
    console.log("the model is loaded yayyyyyyyyyyyyyyy!!!!!!")

  }

  function indefifieinfewification_detective(){
    mimgg = document.getElementById('captured_image');
    classifier.classify(mimgg, gotResult);
  }

  function gotResult(error, results) {
if (error) {
  console.error(error);
} else {
  console.log(results);
  document.getElementById("resultino_obectino").innerHTML = results[0].label;
  document.getElementById("resultino_accuracino").innerHTML = results[0].confidence.toFixed(4);
}
  }