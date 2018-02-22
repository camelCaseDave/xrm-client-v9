'use strict'

const Attribute = require('./attribute');

class MultiSelectOptionSet extends Attribute {
    constructor(options) {
        var options = Object.assign({}, options);
        options.attributeType = 'multioptionset';      
         
        super(options);              
    }
}

module.exports = MultiSelectOptionSet;