const assert = require('chai').assert;

const NumberAttribute = require('../../lib/xrm-client-v9/data/attributes').NumberAttribute;

describe('number', () => {
  let number;
  beforeEach(() => {
    number = new NumberAttribute({ format: 'double', max: 100.01, min: -100.01 });
  });

  it('should exist', () => {
    assert.instanceOf(number, NumberAttribute);
  });

  it('should default a precision of 0 for an integer', () => {
    let number = new NumberAttribute({ format: 'integer' });
    assert.equal(number.getPrecision(), 0);
  });

  it('should default a precision of 2 for a decimal or money', () => {
    assert.equal(number.getPrecision(), 2);
  });

  it('should get its max value', () => {
    assert.strictEqual(number.getMax(), 100.01);
  });

  it('should get its min value', () => {
    assert.strictEqual(number.getMin(), -100.01);
  });

  it('should get its precision', () => {
    assert.strictEqual(number.getPrecision(), 2);
  });

  it('should set its precision to 4dp', () => {
    assert.strictEqual(number.getPrecision(), 2);
    number.setPrecision(4);
    assert.strictEqual(number.getPrecision(), 4);
  });

  describe('decimal min and max', () => {
    let decimal;
    let max = 100000000000.0000;
    let min = -100000000000.0000;

    beforeEach(() => {
      decimal = new NumberAttribute({ format: 'decimal' });
    });

    it('should default a max of 100,000,000,000.0000', () => {
      assert.equal(decimal.getMax(), max);
    });

    it('should default a min of -100,000,000,000.0000', () => {
      assert.equal(decimal.getMin(), min);
    });
  });

  describe('integer min and max', () => {
    let integer;
    let max = 2147483647;
    let min = -2147483647;

    beforeEach(() => {
      integer = new NumberAttribute({ format: 'integer' });
    });

    it('should default a max of 2,147,483,647', () => {
      assert.equal(integer.getMax(), max);
    });

    it('should default a min of -2,147,483,647', () => {
      assert.equal(integer.getMin(), min);
    });
  });
});
