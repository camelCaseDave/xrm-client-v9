const assert = require('chai').assert;
const XrmClientV9 = require('../lib');

describe('xrm-client-v9', () => {
    let client;
    beforeEach(() => {
        client = new XrmClientV9();
    });

    it('should exist', () => {
        assert.instanceOf(client, XrmClientV9);
    });

    it('should have an execution context', () => {
        assert.property(client, 'executionContext');
    });
});