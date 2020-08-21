#!/usr/bin/env node
'use strict';

const minimist = require('minimist');
const Input = require('./lib/input');
const Notes = require('./lib/notes');

const mongoose = require('mongoose');

//require("dotenv").config();

const MONGODB_URI = 'mongodb://localhost:27017/Notes';

//on switch for mongo
mongoose.connect(MONGODB_URI, {
  //this is saying: use the new stuff that hasn't depricated
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const input = new Input();
const notes = new Notes();

if(input.valid()){
  notes.execute(input)
    .then(mongoose.disconnect);
} else {
  process.exit(9);
}
