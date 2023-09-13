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

  test("for correct length for chains object", function() {
    expect(chains.length).toEqual(5);
  })

});