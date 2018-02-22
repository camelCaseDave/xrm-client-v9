const assert = require('chai').assert;
const ExecutionContext = require('../../lib/xrm-client-v9').ExecutionContext;
const FormContext = require('../../lib/xrm-client-v9').FormContext;

describe('executionContext', () => {
    let executionContext;
    beforeEach(() => {
        executionContext = new ExecutionContext();
    });

    it('should exist', () => {
        assert.instanceOf(executionContext, ExecutionContext);
    });

    it('should have form context', () => {
        assert.property(executionContext, '_formContext');
    });

    it('should get a form context', () => {
        let formContext = executionContext.getFormContext();
        assert.instanceOf(formContext, FormContext);
    });
});