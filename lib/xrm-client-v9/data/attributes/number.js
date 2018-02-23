'use strict';

const Attribute = require('./attribute');

const formats = ['decimal', 'double', 'integer', 'money'];
const intMax = 2147483647;
const intMin = -2147483647;
const decMax = 100000000000.0000;
const decMin = -100000000000.0000;

class NumberAttribute extends Attribute {
  constructor (options) {
    options = Object.assign({}, options);

    super(options);

    this._setFormat(options.format);
    this._setPrecision(options.precision);
    this._setMinAndMax(options.min, options.max);
  }

  getMax () {
    return this._max;
  }

  getMin () {
    return this._min;
  }

  getPrecision () {
    return this._precision;
  }

  setPrecision (precision) {
    if (this._format === 'integer') {
      throw new TypeError('Integer number attribute cannot have a precision');
    }

    this._setPrecision(precision);
  }

  _setPrecision (precision) {
    if (precision === undefined) {
      this._precision = this._format === 'integer' ? 0 : 2;
    } else if (!Number.isInteger(precision) || precision < 0) {
      throw new TypeError('Number attribute precision must be a positive integer between 0 and 4.');
    } else {
      this._precision = precision;
    }
  }

  _setFormat (format) {
    if (formats.includes(format)) {
      this._format = format;
    } else {
      throw new TypeError('Number attribute format of ' + format + ' must be one of ' + formats.join(', '));
    }
  }

  _setMinAndMax (min, max) {
    if (this._format === 'integer') {
      this._min = min !== undefined ? min : intMin;
      this._max = max !== undefined ? max : intMax;
    } else {
      this._min = min !== undefined ? min : decMin;
      this._max = max !== undefined ? max : decMax;
    }
  }
}

module.exports = NumberAttribute;
