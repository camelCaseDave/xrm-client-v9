'use strict';

const ExecutionContext = require('./xrm-client-v9/executionContext');
const Xrm = require('./xrm-client-v9/xrm/xrm');

class XrmClientV9 {
  constructor (options) {
    this.options = Object.assign({}, options);
    this.executionContext = new ExecutionContext();
    this.Xrm = new Xrm(this.options);
  }
}

module.exports = XrmClientV9;
