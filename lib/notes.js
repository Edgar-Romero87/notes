'use strict';

class Notes {
  constructor(object) {
    const { action, payload } = object.command;
    this.action = action;
    this.payload = payload;

  }
  execute() {
    this[this.action]();
  }
  add() {
    const note = {
      id: Date.parse(),
      note: this.payload,
    };
    console.log(`adding note: ${note.note}`);
  }
}


module.exports = Notes;
