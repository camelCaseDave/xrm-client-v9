'use strict'

const Attribute = require('./attribute');
const properties = ['id', 'name', 'entityType'];

class LookupAttribute extends Attribute {
    constructor(options) {
        var options = Object.assign({}, options);
        options.attributeType = 'lookup';
        super(options);

        this._setIsPartyList(options.value);
        this._validateValue(options.value);
    }

    getIsPartyList() {
        return this._isPartyList;
    }

    _validateValue(value) {
        if (value !== undefined) {
            if (!Array.isArray(value)) {
                throw new TypeError('Lookup attribute value must be an array');
            } else {
                let isValid = value.every((l) => {
                    var lookupKeys = Object.keys(l);
                    return (typeof l === 'object' && lookupKeys.length === properties.length && lookupKeys.every((v, i) => v === properties[i]));
                });

                if (!isValid) {
                    throw new TypeError('Lookup attribute value must be an array of objects in the format [{id, name, entityType}]');
                }
            }
        }
    }

    _setIsPartyList(value) {
        if (value !== undefined && Array.isArray(value)) {
            this._isPartyList = value.length > 1;
        }
    }
}

module.exports = LookupAttribute;