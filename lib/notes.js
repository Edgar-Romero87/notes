'use strict';

const NotesSchema = require('./models/schema');
const noteCollection = require('./models/note-collection');
const chalk = require('chalk');

class Notes {

  async execute(object) {
   
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
  async add(object) {
    let result = await noteCollection.create(object);
    console.log(`note saved: ${result.text}`);
  }
  async list(str){
  
    const results = await noteCollection.get(str);
    results.forEach(note =>{
      console.log(note.text);
      console.log(`category: ${chalk.green(note.category)} id: ${note._id}`);
      console.log('---------------------------------------------');
    });
      
  }
  async delete(id){
    let result = await noteCollection.delete(id);
      
    console.log(`deleted note: ${id}`);

  }
}

module.exports = Notes;
