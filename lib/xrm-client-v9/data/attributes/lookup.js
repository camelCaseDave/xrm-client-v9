'use strict'

const Attribute = require('./attribute');

class LookupAttribute extends Attribute {
    constructor(options) {
        var options = Object.assign({}, options);
        options.attributeType = 'lookup';
        super(options);  

        this._setIsPartyList(options.isPartyList);
        this._validateValue(value);
        this._validateIsPartyList(options);
    }

    _setIsPartyList(isPartyList) {
        if (isPartyList !== undefined) {
            this._isPartyList = isPartyList;
        } else {
            this._isPartyList = false;
        }
    }

    _validateValue(value) {
        if (value !== undefined) {
            if (!Array.isArray(value)) {
                throw new TypeError('Lookup value must be an array');
            }
        }
    }

    _validateIsPartyList(options) {
        if (options.isPartyList) {

        }
    }
}

module.exports = LookupAttribute;