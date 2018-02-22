const assert = require('chai').assert;

const BooleanAttribute = require('../../lib/xrm-client-v9/data/attributes').BooleanAttribute;

describe('boolean', () => {
    let boolean;
    beforeEach(() => {
        boolean = new BooleanAttribute();
    });

    it('should exist', () => {
        assert.instanceOf(boolean, BooleanAttribute);
    });

    it('should have an attribute type of boolean', () => {
        assert.equal(boolean.getAttributeType(), 'boolean');
    });

    it('should default an initial value of false if none is given', () => {
        assert.isFalse(boolean.getInitialValue());
    });

    it('should have an initial value of true', () => {
        let trueBoolean = new BooleanAttribute({ value: true });
        assert.isTrue(trueBoolean.getInitialValue());
    });

    it('should not change initial value when its value changes', () => {
        boolean.setValue(true);
        assert.isTrue(boolean.getValue());
        assert.isFalse(boolean.getInitialValue());
    }); 
});