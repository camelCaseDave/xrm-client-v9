'use strict';

const ExecutionContext = require('./xrm-client-v9').ExecutionContext;

class XrmClientV9 {
  constructor () {
    this.executionContext = new ExecutionContext();
  }
}

module.exports = XrmClientV9;
