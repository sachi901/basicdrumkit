function Bassdrum() {
    const audio = new Audio('sounds/bass_drum.mp3');
    audio.play();
  }

function floortom(){
    const audio = new Audio('sounds/floor_tom.mp3');
    audio.play();
}

function snare(){
    const audio = new Audio('sounds/snare.mp3');
    audio.play();
}

function midtom(){
    const audio = new Audio('sounds/mid_tom.wav');
    audio.play();
}

function hightom(){
    const audio = new Audio('sounds/high_tom.wav');
    audio.play();
}

function ride_cymbal(){
    const audio = new Audio('sounds/ride_cymbal.mp3');
    audio.play();
}

function crash_cymbal(){
    const audio = new Audio('sounds/crash_cymbal.mp3');
    audio.play();
}

function hi_hat(){
    const audio = new Audio('sounds/hi_hat.mp3');
    audio.play();
}

document.addEventListener('keydown', function(event) {
    switch (event.code) {
        case 'KeyA':
            crash_cymbal();
            break;
        case 'KeyS':
            hi_hat();
            break;      
        case 'KeyD':
            snare();
            break;
        case 'KeyF':
            hightom();
            break;
        case 'KeyG':
            Bassdrum();
            break;
        case 'KeyH':
            midtom();
            break;       
        case 'KeyJ':
            floortom();
            break;
        case 'KeyK':
            ride_cymbal();
            break;
    }
});
