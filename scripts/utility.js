function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet() {
    // create an alphabet array
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // get a random index between 0-25
    const index = Math.round(Math.random() * 25);

    const alphabet = alphabets[index];
    return alphabet;
}

function updateScore() {
    // 1. get the current score
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    // 2. increase the score by 1
    const newScore = currentScore + 1;

    // 3. show the updated score
    currentScoreElement.innerText = newScore;
}

function updateLife() {
    // 1. get the current life
    const currentLifeElement = document.getElementById('life-score');
    const currentLifeScoreText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeScoreText);

    // 2. decrease the current life by 1
    const newLife = currentLife - 1;

    // 3. update the new life score
    currentLifeElement.innerText = newLife;

    if (newLife === 0) {
        gameOver();
    }
}