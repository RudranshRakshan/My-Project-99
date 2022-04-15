var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    speak()
    Webcam.attach(camera);
}

function speak() {
    synth = window.speechSynthesis;
    speakData = document.getElementById("textbox").value;
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");