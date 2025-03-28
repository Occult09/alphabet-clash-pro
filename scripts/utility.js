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

function getARandomAlphabet() {
    // create an alphabet array
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // get a random index between 0-25
    const index = Math.round(Math.random() * 25);

    const alphabet = alphabets[index];
    return alphabet;
}