'use strict';


const minimist = require ('minimist');

const minimist = require('minimist');

/**
 * Creates the Input object based on CL inputs
 * @constructor
 * @returns {Object} command : {action: String, payload: String}
 */

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);

    console.log(this);
  }

    
  }


  parse(object) {
    const argsMap = {
      a: 'add',
      add: 'add',


      l: 'list',
      list: 'list',
      d: 'delete',
      delete: 'delete',

    };
    const arg = Object.keys(object).filter(arg => {
      return argsMap[arg];
    })[0];

    const command = {
      action: argsMap[arg],
      payload: object[arg],
    };
    return command;
  }
  valid() {
    return !!(this.command.action && this.command.payload);

    const category = object.c || object.category;
    const payload = typeof object [arg] === 'string' ? object[arg] : undefined;


    const command = {
      action: argsMap[arg],
      payload: payload,
      category: category,
    };

    return command;
  }


  valid() {
    if (!this.command.action) { return false; }
    if (this.command.action == 'add') {
      if (!this.command.payload){
        return false;
      }
    }
    if (this.command.action == 'delete'){
      if (!this.command.payload) {
        return false;
      }
    }
    return true;

  }
}







module.exports = Input;
