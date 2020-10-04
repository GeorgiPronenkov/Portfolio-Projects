const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const endGameElement = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

//words list:
const words = [
  'stone',        
  'water',        
  'air',        
  'universe',        
  'movie',        
  'second',        
  'ball',        
  'north',        
  'planet',        
  'admit',        
  'earth',        
  'loving',        
  'supernatural',        
  'fifty',        
  'star',        
  'scripter',        
  'percent',        
  'finito',        
];

//Initialize word
let randomWord;

//Initialize score:
let score = 0;

//Initialize time:
let time = 10;

//Set the difficulty:
let difficulty = localStorage.getItem('difficulty') !== null 
    ? localStorage.getItem('difficulty') : 'medium';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null 
    ? localStorage.getItem('difficulty') : 'medium';  

//Focus on text on start
text.focus();

//Count down timer:
const timeInterval = setInterval(updateTime, 1000);

//Generate random word from list array:
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//add word to DOM:
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

//update score:
function updateScore() {
  score++;
  scoreElement.innerHTML = score;
}

//update time:
function updateTime() {
  time--;
  timeElement.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);

    gameOver();
  }
}

//game over:
function gameOver() {
  endGameElement.innerHTML = `
                              <h1>Time ran out!</h1>
                              <p>Your Final Score is ${score}</p>
                              <button onclick="location.reload()">Reload</button>
                               `;
  endGameElement.style.display = 'flex';
}

addWordToDOM();

//event listeners:
//typing:
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    //clear:
    e.target.value = '';

    if (difficulty === 'hard') {
      time +=2;
    } else if(difficulty === 'medium') {
      time +=3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

//button click settings
settingsBtn.addEventListener('click', () => 
   settings.classList.toggle('hide'));

//select:
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficultySelect);
});   