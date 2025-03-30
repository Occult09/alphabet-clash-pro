function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected button to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check if the alphabet matched or not
    if (playerPressed === expectedAlphabet) {
        updateScore()

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        updateLife();
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

function gameOver() {
    hideElementById('play-ground');
    showElementById('score-screen');

    // update last score
    const currentScoreElement = document.getElementById('current-score');
    const lastScoreElement = document.getElementById('last-score');
    const currentScoreText = currentScoreElement.innerText;
    lastScoreElement.innerText = currentScoreText;

    // clear the alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

function playAgain() {
    hideElementById('score-screen');
    showElementById('play-ground');

    // reset score and life
    document.getElementById('life-score').innerText = '5';
    document.getElementById('current-score').innerText = '0';

    continueGame();
}