'use strict'

const Attribute = require('./attribute');

class MultiSelectOptionSetAttribute extends Attribute {
    constructor(options) {
        var options = Object.assign({}, options);
        options.attributeType = 'multioptionset';

        super(options);

        this._options = options.options;

        this._validateValue(options.value, options.options);
        this._setInitialValue(options.value);
    }

    getOption(arg) {
        if (!this._options) {
            throw new TypeError('Multioptionset attribute contains no options.');
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
        return this._options.filter(o => this._value.includes(o.value));
    }

    getText() {
        return this._options.filter(o => this._value.includes(o.value)).map(o => o.text);
    }

    getInitialValue() {
        return this._initialValue;
    }

    _setInitialValue(value) {
        if (value !== undefined) {
            this._initialValue = value;
        } else {
            this._initialValue = null;
        }
    }

    _validateValue(value, options) {
        if (value !== undefined) {
            if (!Array.isArray(value)) {
                throw new TypeError('Multioptionset value must be an array of optionset objects formatted as [{text, value}].');
            }
            if (!options || !Array.isArray(options)) {
                throw new TypeError('To set a multioptionset attribute with a value, you must also provide options');
            } else {
                for (let i in value) {
                    if (!options.some(o => o.value === value[i])) {
                        throw new TypeError('Invalid value: multioptionset attribute value isn\'t contained within optionset\'s given options.');
                    }
                }
            }
        }
    }
}

module.exports = MultiSelectOptionSetAttribute;