'use strict';

const OnlineApi = require('./online');

class WebApi {
  constructor(options) {
    this._evaluateIfOnline(options.online, options.data);
  }

  _evaluateIfOnline(online, data) {
    if (online || online === undefined) {
      this.online = new OnlineApi(data);
      this.offline = {};
    } else {
      this.online = {};
      this.offline = new OfflineApi(data);
    }
  }
}

module.exports = WebApi;