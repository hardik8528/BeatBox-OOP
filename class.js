class Beat {
    
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}