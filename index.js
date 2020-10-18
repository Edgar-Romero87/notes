'use strict';

const minimist = require('minimist');
const Input = require('./lib/input');
const Notes = require('./lib/notes') ;

const input = new Input();
const notes = new Notes(input);
if(input.valid()){
  notes.execute();
} else{
  process.exit(9);
}
