'use strict';

import minimist from 'minimist';


class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
    console.log(this);
  }
  parse(object) {
    const argsMap = {
      a: 'add',
      add: 'add',
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
  }
}




export default Input;