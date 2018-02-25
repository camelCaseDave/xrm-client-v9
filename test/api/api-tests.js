const assert = require('chai').assert;

const Api = require('../../lib/xrm-client-v9/xrm').Api;

describe('api', () => {
  let api;

  beforeEach(() => {
    api = new Api([{ id: '00000000-0000-0000-0000-000000000000', logicalName: 'contact', data: [] }]);
  });

  it('has createRecord', () => {
    assert.equal(typeof api.createRecord, 'function');
  });

  it('creates a record', () => {
    api.createRecord('contact', [{ firstname: 'Joe' }])
      .then((result) => {
        assert.lengthOf(result.id, 36);
        assert.equal(result.entityType, 'contact');
      });
  });

  it('deletes a record', () => {
    api.deleteRecord('contact', '00000000-0000-0000-0000-000000000000')
      .then((result) => {
        assert.equal(result.id, '00000000-0000-0000-0000-000000000000');
      });
  });

  it('can\'t delete a record that doesn\'t exist', () => {
    // api.deleteRecord('account', '00000000-0000-5555-0000-000000000000')
    // .then((result) => {
    //   assert.isString(result);
    // })
    // .error((error) => {
    //
    // });
  });
});
