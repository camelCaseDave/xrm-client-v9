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

  it('should set isPartyList to true when multiple lookups are added', () => {
    let attr = new LookupAttribute({
      value: [
        { id: '{00000000-0000-0000-0000-000000000000}', name: 'Parent Account', entityType: 'cccount' },
        { id: '{00000000-0000-0000-0000-000000000001}', name: 'Parent Contact', entityType: 'contact' }
      ]
    });

    assert.isTrue(attr.getIsPartyList());
  });

  it('should not allow invalid lookup properties', () => {
    assert.throws(() => new LookupAttribute({ value: [{ primaryName: 'Parent Account', entityType: 'cccount' }] }), TypeError);
  });
});
