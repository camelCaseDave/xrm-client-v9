const assert = require('chai').assert;

const OptionSetAttribute = require('../../lib/xrm-client-v9/data/attributes').OptionSetAttribute;

describe('optionset', () => {
    let optionSet;
    let options = [
        { text: 'Cold', value: 1 },
        { text: 'Warm', value: 2 },
        { text: 'Hot', value: 4 }];

    beforeEach(() => {
        optionSet = new OptionSetAttribute({ value: 4, options: options })
    });

    it('should exist', () => {
        assert.instanceOf(optionSet, OptionSetAttribute);
    });

    it('should not allow a value that isn\'t within its options', () => {
        assert.throws(() => new OptionSetAttribute({ value: 3, options: options }), TypeError);
    });

    it('should have an initial value of 4', () => {
        optionSet.setValue(2);
        assert.equal(optionSet.getInitialValue(), 4);
    });

    it('should get its option by label', () => {
        let expected = { text: 'Cold', value: 1 };
        assert.deepEqual(optionSet.getOption('Cold'), expected);
    });

    it('should get its option by value', () => {
        let expected = { text: 'Cold', value: 1 };
        assert.deepEqual(optionSet.getOption(1), expected);
    });

    it('should get its selected option', () => {
        let expected = { text: 'Hot', value: 4 };
        assert.deepEqual(optionSet.getSelectedOption(), expected);
    });

    it('should get its selected option\'s text', () => {
        assert.equal(optionSet.getText(), 'Hot');
    });

    it('should get all of its options as an array', () => {
        assert.deepEqual(optionSet.getOptions(), options);
    });

    it('should default an initial value of null if no value is given', () => {
        let optionSet = new OptionSetAttribute();
        assert.isNull(optionSet.getInitialValue());
    });
});