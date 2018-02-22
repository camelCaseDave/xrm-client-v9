'use strict'

const Attribute = require('./attribute');

const formats = [null, 'email', 'textarea', 'text', 'tickersymbol', 'phone', 'url'];

class StringAttribute extends Attribute {
    constructor(options) {
        var options = Object.assign({}, options);
        options.attributeType = 'string';      
         
        super(options);

        this._maxLength = options.maxLength;

        this._setFormat(options.format || null);        
    }

    getMaxLength() {
        return this._maxLength;
    }

    _setFormat(format) {
        if (formats.includes(format)) {
            this._format = format;
        } else {
            throw new TypeError(format + ' must be one of ' + formats.join(', '));
        }
    }
}

module.exports = StringAttribute;