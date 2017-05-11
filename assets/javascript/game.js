//Secret Computer Letters
var secretLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Game Set-up
var wins = 0;
var losses = 0;
var guesses = 7;
var guessesLeft = 7;
var guessedLetters = [];
var correctLetter = null;

//Random Letters
var secretGuess = secretLetters[Math.floor(Math.random() * secretLetters.length)];

//Game Play Updates
var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

var updateCorrectLetter = function() {
  this.correctLetter = this.secretLetters[Math.floor(Math.random() * this.secretLetters.length)];
};

var updateGuessesSoFar = function() {
  
  document.querySelector('#guesses').innerHTML = "Your Guesses So Far: " + guessedLetters.join(', ');
};

//Game Play Function
document.onkeyup = function(event) {
  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

    if (guessesLeft > 0){
    if (userGuess == correctLetter){
      wins++;
      document.querySelector('#wins').innerHTML = "Wins: " + wins;
      alert("OMG! Ermahgerd! You're Psychic!");
      reset();
    }}

    else if(guessesLeft == 0){
      losses++;
      document.querySelector('#losses').innerHTML = "Losses: " + losses;
      alert("Psychic... no. Psycho... maybe."); 
      reset();
    }
};

// Game Reset
var reset = function() {
  totalGuesses = 7;
  guessesLeft = 7;
  guessedLetters = [];

  updateCorrectLetter();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateCorrectLetter();
updateGuessesLeft();
