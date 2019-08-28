/*
-declare variables:
 .wins(number, 0),guesses(number, 12),letterGuessed(empty array),animalWords(array), wordPicked, currentWord(empty array)
 .variable to hold DOM elements by elementId

-initialize the game (function):
 .computer randomly pick a word from animalWords array
 .get the length of the word picked, push same amount of "_" characters to currentWord array
 .display currentWord array in elementId "current-word"

-listen to keyUp event and check the key pressed:
 .if the key is part of the word:
  ..remaining guesses decreases by 1, display it in elementId "guesses"
  ..find the key indexes in the word, update the "_" character at the same indexes in currentWord array to the key
  ..display updated currentWord array in elementId "current-word"
 .if the key is NOT part of the word:
  ..check if the key is already in letterGuessed array
    ...if no:
       ....remaining guesses decreases by 1, display it in elementId "guesses"
       ....add/push the key to letterGuessed array and display the array in elementId "letters"
    ...if yes, do nothing

-if currentWord array === the word picked:
 .wins increases by 1
 .reset game:
  ..remaining guesses goes back to 12
  ..letterGuessed array goes back to empty
  ..initialize the game

-if remaining guesses === 0:
 .reset game
*/

var wins = 0;
var guesses = 12;
var letterGuessed = [];
var animalWords = ["bear", "cat", "dolphin", "elephant"];
var wordPicked;
var currentWord = [];
var winsText = document.getElementById("wins");
var guessesText = document.getElementById("guesses");
var lettersText = document.getElementById("letters");
var currentWordText = document.getElementById("current-word");


function initGame() {

    wordPicked = animalWords[Math.floor(Math.random() * animalWords.length)];

    for (var i = 0; i < wordPicked.length; i++) 
    { currentWord.push("_"); }

    currentWordText.textContent = currentWord.join(" ");

}

initGame();


document.onkeyup = function (event) {

    if (wordPicked.includes(event.key)) {
        guesses--;
        guessesText.textContent = guesses;

        for (var i = 0; i < wordPicked.length; i++) {
            if (wordPicked[i] === event.key) {
                currentWord[i] = event.key;
            }
        }

        currentWordText.textContent = currentWord.join(" ");

    } else {
        if (!letterGuessed.includes(event.key)) {
            guesses--;
            guessesText.textContent = guesses;

            letterGuessed.push(event.key);
            lettersText.innerHTML = "Letters Guessed: " + "<span class='value'>" + letterGuessed.join(" ") + "</span>";
        }
    }

};


