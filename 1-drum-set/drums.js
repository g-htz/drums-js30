
let updatePage = function(event) {
    if(event.propertyName !== 'transform') return;
    this.classList.remove('activated');
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(key => key.addEventListener('transitionend', updatePage))

let activateAudio = function(event) {
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const button = document.querySelector(`.button[data-key="${event.keyCode}"]`);
    if(!sound) return;
    sound.begin=0;
    sound.play();
    button.classList.add('activated');
}
  
window.addEventListener('keydown',activateAudio);
