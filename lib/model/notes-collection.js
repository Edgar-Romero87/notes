'use strict';

const schema = require('./notes-schema');

class NotesCollection {
  get(str){
    return str ? schema.find({category: str}):schema.find({});
  }
  create(object){
    const note = new schema ({
      text: object.payload,
      category: object.category,
    });
    return note.save();
  }
  delete(id){
    return schema.findOneAndDelete({_id:id});
  }
}

module.exports = new NotesCollection;