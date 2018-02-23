const assert = require('chai').assert;

const DataInternal = require('../../lib/xrm-client-v9/data');
const Data = DataInternal.Data;
const Entity = DataInternal.Entity;

describe('data', () => {
  let data;
  beforeEach(() => {
    data = new Data();
  });

  it('should exist', () => {
    assert.instanceOf(data, Data);
  });

  it('should have attributes', () => {
    assert.isArray(data._attributes);
  });

  it('should have entity', () => {
    assert.instanceOf(data.entity, Entity);
  });
});
