'use strict';

const WebApi = require('./webapi');

class Xrm {
  constructor (options) {
    this.options = Object.assign({}, options);
    this.WebApi = new WebApi(this.options);
  }
}

module.exports = Xrm;
