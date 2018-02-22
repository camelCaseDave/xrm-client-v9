'use strict'

const Attribute = require('./attribute');

class OptionSet extends Attribute {
    constructor(options) {
        var options = Object.assign({}, options);
        options.attributeType = 'optionset';      
         
        super(options);              
    }
}

module.exports = OptionSet;