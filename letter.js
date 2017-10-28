//Set up a letter constuctor
var Letter = function (word) {
	//empty array to push guesses to
  this.guessed = [];
	//storing the randomly chosen word on the letter constructor
  this.word = word;
};

//extending the constructor with a addLetter function that adds entered letters to the guessed array
Letter.prototype.addLetter = function (letter) {
  if(this.guessed.indexOf(letter) !== -1) {
    console.log('\nDuplicate letter\n');
    return false;
  }
  if(letter.length != 1) {
    console.log('\nMore than single character\n');
    return false;
  }
  if(!letter.match(/[a-zA-Z]/)) {
    console.log('\nInvalid characters found\n');
    return false;
  }
  this.guessed.push(letter);
  return true;
};

//extending the constructor function to display all of the incorrect letters
Letter.prototype.displayWrong = function () {
  var display = "";
  for(let i=0; i<this.guessed.length; i++) {
    if(!this.word.includes(this.guessed[i])) {
      display = display + this.guessed[i] + " ";
    }
  }
  return display;
};

module.exports = Letter;
