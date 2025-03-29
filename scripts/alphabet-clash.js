function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // get the expected button to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check if the alphabet matched or not
    if (playerPressed === expectedAlphabet) {
        console.log("You get a point");
        // update score:

        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // 2. increase the score by 1
        const newScore = currentScore + 1;

        // 3. show the updated score
        currentScoreElement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log("You missed. You lost a life");
        // update life

        // 1. get the current life
        const currentLifeElement = document.getElementById('life-score');
        const currentLifeScoreText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeScoreText);

        // 2. decrease the current life by 1
        const newLife = currentLife - 1;

        // 3. update the new life score
        currentLifeElement.innerText = newLife;
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // step-2 : show the randomly generated alphabet on the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function playNow() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}