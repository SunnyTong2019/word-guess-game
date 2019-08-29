/*
-declare global variables:
 .animalWords(array), wordPicked
 .variables to hold DOM elements got by elementId

-declare game object:
 .properties: wins(number, 0),guesses(number, 12),letterGuessed(empty array), , currentWord(empty array)

-listen to keyUp event and check the key pressed:
 .if the key is part of the word:
  ..check if the key is already in currentWord array:
    ...if no:
       ....remaining guesses decreases by 1, display it in elementId "guesses"
       ....find the key indexes in the word, update the "_" character at the same indexes in currentWord array to the key
       ....display updated currentWord array in elementId "current-word"
    ...if yes, do nothing
 .if the key is NOT part of the word:
  ..check if the key is already in letterGuessed array:
    ...if no:
       ....remaining guesses decreases by 1, display it in elementId "guesses"
       ....add/push the key to letterGuessed array and display the array in elementId "letters"
    ...if yes, do nothing

-if currentWord array === the word picked:
 .wins increases by 1, display it in elementId "wins"
 .initialize the game

-if remaining guesses === 0:
 .initialize the game
*/


var animalWords = ["bear", "cat", "dolphin", "elephant", "goose", "jaguar", "mongoose", "ox", "roadrunner"];
var wordPicked;
var winsText = document.getElementById("wins");
var guessesText = document.getElementById("guesses");
var lettersText = document.getElementById("letters");
var currentWordText = document.getElementById("current-word");
var audio = document.getElementById("sound");

var game = {
    wins: 0,
    guesses: 12,
    letterGuessed: [],
    currentWord: [],

    initGame: function ()  {
        this.guesses = 12;
        guessesText.textContent = this.guesses;

        this.letterGuessed = [];
        lettersText.textContent = "Letters Guessed: ";

        this.currentWord = [];

        wordPicked = animalWords[Math.floor(Math.random() * animalWords.length)];

        for (var i = 0; i < wordPicked.length; i++) 
        { this.currentWord.push("_"); }

        currentWordText.textContent = this.currentWord.join(" ");
    },

    reduceGuess: function () {
        this.guesses--;
        guessesText.textContent = this.guesses;
    },

    addLetterGuessed: function (item) {
        this.letterGuessed.push(item);
        lettersText.innerHTML = "Letters Guessed: " + "<span class='value'>" + this.letterGuessed.join(" ") + "</span>";
    },

    updateCurrentWord: function (item) {
        for (var i = 0; i < wordPicked.length; i++) {
            if (wordPicked[i] === item) {
                this.currentWord[i] = item;
            }
        }

        currentWordText.textContent = this.currentWord.join(" ");
    },

    win: function () {
        audio.play();
        this.wins++;
        winsText.textContent = this.wins;
    }
}


game.initGame();


document.onkeyup = function (event) {

    if (wordPicked.includes(event.key)) {
        if (!game.currentWord.includes(event.key)) {
            game.reduceGuess();
            game.updateCurrentWord(event.key);
        }
    } else {
        if (!game.letterGuessed.includes(event.key)) {
            game.reduceGuess();
            game.addLetterGuessed(event.key);
        }
    }

    if (game.currentWord.join("") === wordPicked) {
        game.win();
        game.initGame();
    }

    if (game.guesses === 0) {
        game.initGame();
    }

};




