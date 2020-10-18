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



const NotesSchema = require('./model/notes-schema');

const noteCollection = require('./model/notes-collection');

class Notes {
  async execute(object){
    switch(object.command.action){
    case 'add':
      return this.add(object.command);
    case 'list':
      return this.list(object.command.payload);
    case 'delete':
      return this.delete(object.command.payload);  
    default:
      return Promise.resolve();
    }
  }
  
  add(object) {
    noteCollection.create(object)
      .then(dbData => {
        console.log(`Note saved: ${dbData.text}`);

      });
  }
  async list(str){
    const results = await noteCollection.get(str);
    results.forEach(note => {
      console.log(note.text);
      console.log(`category: ${note.category} id: ${note._id}`);
      console.log('-------------------------------------------------');
    });
     
  }

  delete(id){
    noteCollection.delete(id)
      .then(()=>{
        console.log(`delete note: ${id}`);
      });
  }
}


module.exports = Notes;
