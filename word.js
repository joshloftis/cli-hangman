//set up a Word constructor
var Word = function (word) {
  this.word = word;
};

//extending consturctor to check whether the entered letter is in the word
Word.prototype.checkMatch = function (guessed) {
  for(var i = 0; i<this.word.length; i++) {
    if(guessed.indexOf(this.word.charAt(i)) === -1) {
       return false;
     }
  }
  return true;
};

//extending the constructor to display either underscores or letters
Word.prototype.displayWord = function (guessed) {
  var display = "";
  for(var i = 0; i<this.word.length; i++) {
    var check = this.word.charAt(i);
    if(guessed.indexOf(check) > -1) {
      display = display + check + " ";
    }
    else {
      display = display + "_ ";
    }
  }
  return display;
};

module.exports = Word;
