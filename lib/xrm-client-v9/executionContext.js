'use strict'

const FormContext = require('./formContext');

class ExecutionContext {    
    constructor() {
        this._formContext  = new FormContext();
    }

    getFormContext() {
        return this._formContext;
    }
}

module.exports = ExecutionContext;