const assert = require('chai').assert;

const LookupAttribute = require('../../lib/xrm-client-v9/data/attributes').LookupAttribute;

describe('boolean', () => {
    let lookup;
    beforeEach(() => {
        lookup = new LookupAttribute();
    });

    it('should exist', () => {
        assert.instanceOf(lookup, LookupAttribute);
    });

    it('should have an attribute type of lookup', () => {
        assert.equal(lookup.getAttributeType(), 'lookup');
    });
});