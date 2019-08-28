/*
-declare variables:
 wins(number, 0),guesses(number, 12),letterGuessed(empty array),animalWords(array),currentWord(empty array)

-initialize the game:
 .computer randomly pick a word from animalWords array
 .get the length of the word picked, push a dash character to currentWord array
 .display currentWord array in elementId "current-word"

-listen to keyUp event and check the key pressed
 .if the key is part of the word:
  ..find the key index in the word, update the dash at the same index in currentWord array to the key
  ..display updated currentWord array in elementId "current-word"
 .if the key is NOT part of the word:
  ..check if the key is already in letterGuessed array
    ...if no:
       ....remaining guesses decreases by 1
       ....add/push the key to letterGuessed array and display the array in elementId "letters"
    ...if yes, do nothing

-if currentWord array === the word picked
 .user wins, wins increases by 1
 .reset game:
  ..remaining guesses goes back to 12
  ..letterGuessed array goes back to empty
  ..initialize the game

-if remaining guesses === 0
 .user loses, reset game
*/

