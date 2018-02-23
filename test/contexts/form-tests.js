const assert = require('chai').assert;
const FormContext = require('../../lib/xrm-client-v9').FormContext;

describe('formContext', () => {
  let formContext;
  beforeEach(() => {
    formContext = new FormContext();
  });

  it('should exist', () => {
    assert.instanceOf(formContext, FormContext);
  });

  it('should have data', () => {
    assert.property(formContext, 'data');
  });

  it('should have ui', () => {
    assert.property(formContext, 'ui');
  });
});
