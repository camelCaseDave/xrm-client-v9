'use strict'

const Attribute = require('./attribute');

class OptionSetAttribute extends Attribute {
    constructor(options) {
        var options = Object.assign({}, options);
        options.attributeType = 'optionset';
        
        super(options);

        this._options = options.options;

        this._validateValue(options.value, options.options);
        this._setInitialValue(options.value);
    }

    getOption(arg) {
        if (!this._options) {
            throw new TypeError('Optionset attribute contains no options.');
        }
        if (arg === undefined || (typeof arg !== 'string' && typeof arg !== 'number')) {
            throw new TypeError('You must provide the label or value of the option to get.');
        }

        if (typeof arg === 'string') {
            return this._options.find(o => o.text === arg);
        } else if (typeof arg === 'number') {
            return this._options.find(o => o.value === arg);
        }
    }

    getOptions() {
        return this._options;
    }

    getSelectedOption() {
        return this._options.find(o => o.value === this._value);
    }

    getText() {
        return this._options.find(o => o.value === this._value).text;
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

    _validateValue(value, options) {
        if (value !== undefined) {
            if (!options || !Array.isArray(options)) {
                throw new TypeError('To set an optionset attribute with a value, you must also provide options');
            } else {
                if (!options.some(o => o.value === value)) {
                    throw new TypeError('Invalid value: optionset attribute value isn\'t contained within optionset\'s given options.');
                }
            }
        }
    }
}

module.exports = OptionSetAttribute;