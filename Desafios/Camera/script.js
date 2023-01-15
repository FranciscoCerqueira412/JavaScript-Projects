// Get the video element
let video = document.getElementById('video');

Promise.all([

    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet    .loadFromUri('/models')



]).then(startVideo)



// Ask for camera and microphone permissions
function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: {width:600, height:400}, audio: false })
    .then(stream => {
        // Set the video element's source to the camera stream
        video.srcObject = stream;
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })
}

