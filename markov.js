"use strict";
/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

    /**
   * getChoice: returns a random index based on length of array input
   *
   */
    static getChoice(length) {

      return Math.floor(Math.random() * length);
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

  getChains() {
    let chains = {};

    for (let i = 0; i < this.words.length; i++) {
      let currWord = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (currWord in chains) {

          chains[currWord].push(nextWord);

      } else {

        chains[currWord] = [nextWord];

      }
    }

    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {

    const sentence = [];
    const wordsInObject = Object.keys(this.chains);

    let currWord = wordsInObject[0];
    sentence.push(currWord);

    while (currWord !== null) {

      let idx = MarkovMachine.getChoice(this.chains[currWord].length);

      currWord = this.chains[currWord][idx];
      sentence.push(currWord);
    }

    return sentence.join(' ');
  }

}

module.exports = {
  MarkovMachine,
};
