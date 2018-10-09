window.addEventListener('load', init);

// Globals.
let time = 5;
let score = 0;
let isPlaying;

// DOM elements.
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialise game.
function init() {
  // Load a word from the array.
  showWord(words);

  // Call countdown every second.
  setInterval(countdown, 1000);

  // Check game status.
  setInterval(checkStatus, 50);
}

// Pick and show a random word.
function showWord(words) {
  // Generate random array index.
  const randIndex = Math.floor(Math.random() * words.length);

  // Output random word.
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer.
function countdown() {
  // Make sure time hasn't run out.
  if (time > 0) {
    // Decrease the time.
    time--;
  } else if(time === 0) {
    // Game is over.
    isPlaying = false;
  }

  // Show remaining time.
  timeDisplay.innerHTML = time;
}

// Check game status.
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
  }
}
