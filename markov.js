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
    // TODO: implement this!
    let chain = {};

    for (let i = 0; i < this.words.length; i++) {
      //TODO: assign variables to this.words[i] and this.words[i+1]
      // - shortcircuit next_word to make it equal to null when it hits undefined
      // - look at map datatype
      // - change chain to chains
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

  getText() {
  /*
  psuedo:
  create the variable to house our sentence.

  starting will be the first key inside of the chains object => push inside var
  take random index from its array and push it inside
    if that is null, break and return the sentence
    if not
      find the word inside of the object
        if it is inside, loop inside of its array
          repeat steps
  */

    const sentence = [];
    const wordsInObject = Object.keys(this.chains);
    //FIXME: NO SNAKE CASES WERE NOT IN PYTHON
    let curr_word = wordsInObject[0];
    sentence.push(curr_word);

    while (curr_word !== null) {
      //FIXME: make this its own function for better testing and readability
      let idx = Math.floor(
        Math.random() * this.chains[curr_word].length
      );

      curr_word = this.chains[curr_word][idx];
      sentence.push(curr_word);
    }

    return sentence.join(' ');
  }

}

module.exports = {
  MarkovMachine,
};

// let randomWords = [];


//     for (let word in this.chains) {
//       let idx = Math.floor(
//         Math.random() * this.chains[word].length
//       );

//       if (this.chains[word][idx] === null) {
//         return randomWords.join(' ');
//       } else {

//         randomWords.push(this.chains[word][idx])
//       }
//     }

//     return randomWords.join(' ');