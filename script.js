function showShareFloat() {
    console.log('show');
    const element = document.getElementsByClassName("sharethis-sticky-share-buttons");
    if (element) {
        for (var x = 0; x < element.length; x++) {
            element[x].style.visibility = "visible";
        }
    }
}

function removeShareFloat() {
    console.log('hide');
    const element = document.getElementsByClassName("sharethis-sticky-share-buttons");
    if (element) {
        for (var x = 0; x < element.length; x++) {
            element[x].style.visibility = "hidden";
        }
    }
}

async function getUserMediaJS() {
    return await window.navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => { return true; }).catch((err) => { return false; });
}

let recorder = window.MicRecorder;
let Mp3Recorder = new recorder({ bitrate: 128 });

function initRecorder() { 
    let recorder = window.MicRecorder;
    Mp3Recorder = new recorder({ bitrate: 128 });
}

async function startButton() { 
    await Mp3Recorder.start()
    .then(() => {
      console.log("recording started");
    })
    .catch((e) => {
      console.error(e);
    });
  console.log("start button clicked");
}

async function stopButton() {
    let base64;
     await Mp3Recorder.stop()
    .getMp3()
    .then(async ([buffer, blob]) => {
      const blobToBase64 = (blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
        });
      };
        base64 = await blobToBase64(blob);
    })
         .catch((e) => console.log(e));
    
    return base64;
}