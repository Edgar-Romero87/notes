'use strict';

// supergoose uses a fake memory database for testing purposes
require('@code-fellows/supergoose');
// always require the page you are testing
const Notes = require('../lib/notes.js');
// create a new notes obj to interact with

// testing execute
// describe takes string and a function
describe('execute', () => {
  it ('execute does nothing with invalid object', () => {
    const notes = new Notes ({command:'add', payload:'test'});
  
    return notes.add();
    // expect not is to not run. Not means expect the opposite.
    expect(notes.add).toHaveBeenCalled();
  });
});
