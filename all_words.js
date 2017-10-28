//All words sets up an array for all the words available to be chosen randomly.

var All_Words = function() {
  this.words = ['boat', 'mast', 'aft', 'port', 'island', 'yacht', 'cruise', 'ocean', 'sea', 'river', 'lake', 'pontoon', 'speedboat'];
	this.chooseWord = function () {
  	this.word = this.words[Math.floor(Math.random()*this.words.length)];
	};
};

module.exports = All_Words;
