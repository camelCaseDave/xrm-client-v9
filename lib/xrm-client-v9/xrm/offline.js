'use strict';

const Api = require('./api');

class OfflineApi extends Api {
  constructor(data) {
    super(data);    
  }
}

module.exports = OfflineApi;