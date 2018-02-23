'use strict'

const Attribute = require('./attribute');

const formats = ['email', 'textarea', 'text', 'tickersymbol', 'phone', 'url'];

class StringAttribute extends Attribute {
    constructor(options) {
        var options = Object.assign({}, options);
        options.attributeType = 'string';      
         
        super(options);
        
        this._maxLength = options.maxLength;
        
        this._validateValue(options.value);
        this._setFormat(options.format);        
    }

    getMaxLength() {
        return this._maxLength;
    }

    _setFormat(format) {
        if (formats.includes(format)) {
            this._format = format;
        } else {
            throw new TypeError('String attribute format of ' + format + ' must be one of ' + formats.join(', '));
        }
    }

    _validateValue(value) {
        if (value !== undefined && typeof value !== 'string') {
            throw new TypeError('String attribute value must be a string');
        }
    }
}

module.exports = StringAttribute;