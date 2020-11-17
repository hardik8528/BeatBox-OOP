let beats = {
    "65": {
        beat: new Beat("./Audio And Background/Piano Chord 331.mp3")
    },
    "83": {
        beat: new Beat("./Audio And Background/Piano Chord 209.mp3")
    },
    "68": {
        beat: new Beat("./Audio And Background/Piano Chord 208.mp3")
    },
    "70": {
        beat: new Beat("./Audio And Background/Drum Sticks Hit 3.mp3")
    },
    "71": {
        beat: new Beat("./Audio And Background/Drum Snare Roll.mp3")
    },
    "72": {
        beat: new Beat("./Audio And Background/PREL Musical 57.mp3")
    },
    "74": {
        beat: new Beat("./Audio And Background/Cymbal Suspended 2.mp3")
    },
    "75": {
        beat: new Beat("./Audio And Background/Musical Compos 33.mp3")
    },
    "76": {
        beat: new Beat("./Audio And Background/Musical Orches 4.mp3")
    }
};

KeyDownFunction = (event) =>{
    let Code = event.keyCode;
    if(Code in beats){
       beats[Code].beat.play()
    }
}

document.addEventListener('keydown',KeyDownFunction);

