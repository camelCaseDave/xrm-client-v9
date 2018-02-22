'use strict'

const Attribute = require('./attribute');

class BooleanAttribute extends Attribute {
    constructor(options) {
        var options = Object.assign({}, options);
        options.attributeType = 'boolean';
        super(options);

        this._setInitialValue(options.value);        
    }

    getInitialValue() {
        return this._initialValue;
    }

    _setInitialValue(value) {
        if (value !== undefined) {
            this._initialValue = value;
        } else {
            this._initialValue = false;
        }
    }
}

module.exports = BooleanAttribute;