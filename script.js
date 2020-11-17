let beats = {
    "65": {
        beat: new Beat("./Audio And Background/Piano Chord 331.mp3"),
        button: new Button("#00FFFF",65)
    },
    "83": {
        beat: new Beat("./Audio And Background/Piano Chord 209.mp3"),
        button: new Button("#00FFFF",83)
    },
    "68": {
        beat: new Beat("./Audio And Background/Piano Chord 208.mp3"),
        button: new Button("#00FFFF",68)
    },
    "70": {
        beat: new Beat("./Audio And Background/Drum Sticks Hit 3.mp3"),
        button: new Button("#FF00FF",70)
    },
    "71": {
        beat: new Beat("./Audio And Background/Drum Snare Roll.mp3"),
        button: new Button("#FF00FF",71)
    },
    "72": {
        beat: new Beat("./Audio And Background/PREL Musical 57.mp3"),
        button: new Button("#FF00FF",72)
    },
    "74": {
        beat: new Beat("./Audio And Background/Cymbal Suspended 2.mp3"),
        button: new Button("#FF00FF",74)
    },
    "75": {
        beat: new Beat("./Audio And Background/Musical Compos 33.mp3"),
        button: new Button("#FFFFFF",75)
    },
    "76": {
        beat: new Beat("./Audio And Background/Musical Orches 4.mp3"),
        button: new Button("#FFFFFF",76)
    }
};

KeyDownFunction = (event) =>{
    let Code = event.keyCode;
    if(Code in beats){
       beats[Code].beat.play()
       beats[Code].button.SetButton()
    }
}

document.addEventListener('keydown',KeyDownFunction);

