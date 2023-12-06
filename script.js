window.addEventListener('keydown', (e) => {

    let code = e.keyCode;

    console.log(code);

    let keyElement = document.querySelector(`div[data-key = '${code}']`);

    if(!keyElement){return}
    //console.log(keyElement);

    
    let audio = document.querySelector(`audio[data-key = '${code}']`);
        audio.currentTime = 0;
        audio.play();

});