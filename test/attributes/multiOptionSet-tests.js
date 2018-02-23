import { OptionSetAttribute } from '../../lib/xrm-client-v9/data/attributes/index';

const assert = require('chai').assert;

const MultiSelectOptionSetAttribute = require('../../lib/xrm-client-v9/data/attributes').MultiSelectOptionSetAttribute;

describe('multioptionset', () => {
    let multiOptionSet;
    let options = [
        { text: 'Chocolate', value: 1 },
        { text: 'Strawberry', value: 2 },
        { text: 'Vanilla', value: 3 }];

    beforeEach(() => {
        multiOptionSet = new MultiSelectOptionSetAttribute({ value: [1, 2], options: options });
    });

    it('should exist', () => {
        assert.instanceOf(multiOptionSet, MultiSelectOptionSetAttribute);
    });

    it('should not accept an object as a value', () => {
        assert.throws(() => new MultiSelectOptionSetAttribute({ value: {} }));
    });

    it('should have an initial value of [1, 2]', () => {
        assert.deepEqual(multiOptionSet.getInitialValue(), [1, 2]);
    });

    it('shouldn\'t allow a value that isn\'t within its options', () => {
        assert.throws(() => new OptionSetAttribute({ value: [1, 4], options: options }), TypeError);
    });

    it('should get its option by label', () => {
        let expected = { text: 'Chocolate', value: 1 };
        assert.deepEqual(multiOptionSet.getOption('Chocolate'), expected);
    });

    it('should get its option by value', () => {
        let expected = { text: 'Chocolate', value: 1 };
        assert.deepEqual(multiOptionSet.getOption(1), expected);
    });

    it('should get its selected option(s)', () => {
        let expected = [{ text: 'Chocolate', value: 1 }, { text: 'Strawberry', value: 2 }];
        assert.deepEqual(multiOptionSet.getSelectedOption(), expected);
    });

    // This is an assumption. At time of writing the Xrm Client API reference is unclear:
    // https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/gettext
    it('should get the text of all selected options', () => {
        assert.deepEqual(multiOptionSet.getText(), ['Chocolate', 'Strawberry']);
    });

    it('should get all of its options as an array', () => {
        assert.deepEqual(multiOptionSet.getOptions(), options);
    });

    it('should default an initial value of null if no value is given', () => {
        let multiOptionSet = new MultiSelectOptionSetAttribute();
        assert.isNull(multiOptionSet.getInitialValue());
    });
});