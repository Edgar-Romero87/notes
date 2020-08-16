'use strict';


const Notes = require('../libs/notes');

describe('execute', ()=>{
  it('execute does nothing with invalid options', () =>{
    const notes = new Notes({command: 'add', payload: 'test'});
    return notes.add();
    expect(notes.add).toHaveBeenCalled();
  });
});

