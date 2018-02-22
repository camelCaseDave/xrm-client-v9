const assert = require('chai').assert;

const StringAttribute = require('../../lib/xrm-client-v9/data/attributes').StringAttribute;

describe('string', () => {
    let string;
    beforeEach(() => {
        string = new StringAttribute({ maxLength: 100 });
    });

    it('should exist', () => {
        assert.instanceOf(string, StringAttribute);
    });

    it('should have max length', () => {
        assert.property(string, '_maxLength');
    });

    it('should have a max length of 100', () => {
        assert.equal(string.getMaxLength(), 100);
    });

    it('should have an attribute type of string', () => {
        assert.equal(string.getAttributeType(), 'string');
    });

    it('should only accept a string value', () => {
        assert.doesNotThrow(() => new StringAttribute({ value: 'Joe' }));
        assert.throws(() => new StringAttribute({ value: 2 }), TypeError);
    });

    it('should only accept a format of email, textarea, text, tickersymbol, phone or url', () => {
        let allowed = ['email', 'textarea', 'text', 'tickersymbol', 'phone', 'url'];
        allowed.forEach((a) => {
            assert.doesNotThrow(() => { new StringAttribute({ format: a }) });
        });

        assert.throws(() => { new StringAttribute({ format: 'title' }) }, TypeError);
    });

    it('should return a format type of null if no format is given', () => {
        let unformattedAttr = new StringAttribute();
        assert.isNull(unformattedAttr.getFormat());

        let formattedAttr = new StringAttribute({ format: 'text' });
        assert.isNotNull(formattedAttr.getFormat());
    });
});