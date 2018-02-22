const assert = require('chai').assert;

const Attribute = require('../../lib/xrm-client-v9/data/attributes').Attribute;

describe('attribute', () => {
    let attribute;
    beforeEach(() => {
        attribute = new Attribute({ name: 'new_firstname' });
    });

    it('should exist', () => {
        assert.instanceOf(attribute, Attribute);
    });

    it('should get its name', () => {
        assert.equal(attribute.getName(), 'new_firstname');
    });

    it('should only allow a submit mode of always, never or dirty', () => {
        let allowed = ['always', 'never', 'dirty'];
        allowed.forEach((a) => {
            assert.doesNotThrow(() => { new Attribute({ submitMode: a }) });
        });

        assert.throws(() => { new Attribute({ submitMode: 'sometimes' }) }, TypeError);
    });

    it('should only allow a required level of none, required or recommended', () => {
        let allowed = ['none', 'required', 'recommended'];
        allowed.forEach((a => {
            assert.doesNotThrow(() => { new Attribute({ requiredLevel: a }) });
        }));

        assert.throws(() => { new Attribute({ requiredLevel: 'needed' }) }, TypeError);
    });

    it('should only allow user privileges canRead, canUpdate and canCreate', () => {
        let allowed = { 'canRead': true, 'canUpdate': false, 'canCreate': false };
        let notAllowed = { 'canWrite': false };

        assert.doesNotThrow(() => { new Attribute({ userPrivilege: allowed }) });
        assert.throws(() => { new Attribute({ userPrivilege: notAllowed }) }, TypeError);
    });

    it('should default all user privileges to true if none are given', () => {
        let userPrivilege = attribute.getUserPrivilege();
        assert.isTrue(userPrivilege['canCreate']);
        assert.isTrue(userPrivilege['canRead']);
        assert.isTrue(userPrivilege['canUpdate']);
    });

    describe('properties', () => {
        it('should have submit mode', () => {
            assert.property(attribute, '_submitMode');
        });

        it('should have value', () => {
            assert.property(attribute, '_value');
        });

        it('should have isDirty', () => {
            assert.property(attribute, '_isDirty');
        });

        it('should have attributeType', () => {
            assert.property(attribute, '_attributeType');
        });

        it('should have name', () => {
            assert.property(attribute, '_name');
        });

        it('should have required level', () => {
            assert.property(attribute, '_requiredLevel');
        });
    });
});