// Beat class for play corresponding Audio
class Beat {

    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

// Button class for set up Button Environment

class Button {
    constructor(color,code){
        this.color = color;
        this.code = code;
        this.element = document.getElementById(code);
        this.SetBorder();
        this.AddTransitioendEvent();
    }

    SetBorder = () =>{
        this.element.style.borderColor = this.color;
    }

    SetButton = () =>{
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px ${this.color}`;
    }

    AddTransitioendEvent = () =>{
        this.element.addEventListener("transitionend",() =>{
            this.ResetButton();
        })
    }

    ResetButton = () =>{
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = 'none';
    }
}