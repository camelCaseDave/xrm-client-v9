'use strict';

const Api = require('./api');

class OnlineApi extends Api {
  constructor(data) {
    super(data);
  }
}

module.exports = OnlineApi;