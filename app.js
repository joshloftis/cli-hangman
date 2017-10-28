//Requiring the exported modules and npm inquirer package
var Letter = require('./letter');
var Word = require('./word');
var All_Words = require('./all_words');
var inquirer = require('inquirer');

//Getting a random word
var currentGame = new All_Words();
currentGame.chooseWord();

//Creating letter and word objects for the random word
var letters = new Letter(currentGame.word);
var currWord = new Word(currentGame.word);
//getting the guesses to 10 plus the total length of the random word
var guesses = 10 + currWord.word.length;

//playGame function handles the logic of capturing the user input with inquirer and is self invoking
(function playGame() {
  if(guesses !== 0) {
    console.log(`Word: ${currWord.displayWord(letters.guessed)}`);
    console.log(`Wrong guesses: ${letters.displayWrong()}`);
    console.log(`You have ${guesses} left.`);
    inquirer.prompt([
			{
				name: 'guess',
				message: 'Enter a letter:'
			}
		]).then(function (answers) {
      console.log('-------------------------');
      if(!letters.addLetter(answers.guess)) {
        playGame();
      } else {
         if(currWord.checkMatch(letters.guessed)) {
           console.log(`You win.`);
           console.log(`Word was ${currWord.word}.`);
         } else {
           guesses--;
           playGame();
         }
       }
    });
  } else {
    console.log(`Sorry, you lose.`);
    console.log(`Word was ${currWord.word}.`);
  }
})();
