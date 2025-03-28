// function playNow(){
//     // step-1: Hide the home screen.To hide the home screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // step-2: Unhide the playground screen. To unhide the playground screen remove the class hidden from the playground section
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame() {
    // step-1: generate a random alphabet
    getARandomAlphabet();
}

function playNow() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}