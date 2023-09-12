/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains(self) {
    // TODO: implement this!
    let chain = {};

    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i] in chain) {
        if (this.words[i+1] === undefined) {
          chain[this.words[i]].push(null);
        } else {
          chain[this.words[i]].push(this.words[i+1]);
        }
      } else {
        chain[this.words[i]] = [this.words[i+1]];
        if (this.words[i+1] === undefined) {
          chain[this.words[i]] = [null];
        }
      }

    }
    return chain;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  // getText() {
  //   // TODO: implement this!
  //   let randomWords = [];
  //   let idx = Math.floor(
  //     Math.random() * this.chains.length
  //   );

  //   for (let i = 0; i < this.chains.length; i++) {
  //     randomWords.push(this.chains[]);

  //     if (this === null) {

  //     }
  //   }
  //   // - start at the first word in the input text
  //   // - find a random word from the following-words of that
  //   // - repeat until reaching the terminal null
  // }
}

module.exports = {
  MarkovMachine,
};