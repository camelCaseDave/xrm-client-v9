'use strict';

const Attribute = require('./attribute');

class BooleanAttribute extends Attribute {
  constructor (options) {
    options = Object.assign({}, options);
    options.attributeType = 'boolean';

    super(options);

    this._setInitialValue(options.value);
  }

  getInitialValue () {
    return this._initialValue;
  }

  _setInitialValue (value) {
    if (value !== undefined) {
      this._initialValue = value;
    } else {
      this._initialValue = false;
    }
  }

  _validateValue (value) {

  }
}

module.exports = BooleanAttribute;
