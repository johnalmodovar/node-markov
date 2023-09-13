"use strict";

/** Tests for MarkovMachine methods */

const { MarkovMachine } = require("./markov");

let machine;

beforeAll(function () {

  machine = new MarkovMachine("The cat in the hat.");
});


describe("getChains", function () {

  let chains;

  beforeEach(function () {
    chains = machine.getChains();
  })

  test("if null is counted as an input", function() {
    expect(chains["hat."]).toContain(null);
  });

  test("for correct number of keys in chains object", function() {
    expect(Object.keys(chains).length).toEqual(5);
  });

  test("if words are being correctly pushed into keys", function() {
    expect(Object.keys(chains)).toContain("hat.");
  });

});

describe("getText", function () {
  let sentence;

  beforeEach(function() {
    sentence = machine.getText();
  });

  test("if the sentence output equals the original text input", function() {
    expect(sentence).toEqual("The cat in the hat. ");
  });

});

describe("getChoice", function () {
  let length = 5;
  let index = MarkovMachine.getChoice(length);
  test("if index returned is within range of 0 - input length", function () {
    expect(index).toBeLessThan(length);
  });
});