'use strict';

const Entity = require('./entity');

class Data {
  constructor () {
    this._attributes = [];
    this.entity = new Entity();
  }
}

module.exports = Data;
