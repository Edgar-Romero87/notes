'use strict';

const minimist = require('minimist');
const Input = require('./lib/input').default;
const Note = require('./lib/notes');
const mongoose = require('mongoose');

//const Note = require('./notes.schema.js');

mongoose.connect('mongodb://localhost:27017/notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const input = new Input();
const notes = new Note(input);

if(input.valid()){
  notes.execute();
} else {
  process.exit(9);
}
