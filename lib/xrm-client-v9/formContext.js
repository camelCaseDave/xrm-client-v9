'use strict';

const Data = require('./data/data');
const Ui = require('./ui/ui');

class FormContext {
  constructor () {
    this.data = new Data();
    this.ui = new Ui();
  }
}

module.exports = FormContext;
