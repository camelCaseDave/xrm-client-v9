'use strict';

class Api {
  constructor (data) {
    this._data = data || [];
  }

  createRecord (entityLogicalName, data) {
    let id = this._getNewId();
    this._data.push({ id: id, logicalName: entityLogicalName, data: data });

    return new Promise((resolve, reject) => {
      resolve({
        entityType: entityLogicalName,
        id: id
      });
    });
  }

  deleteRecord (entityLogicalName, id) {
    let index = this._data.findIndex(d => d.logicalName === entityLogicalName && d.id === id);

    return new Promise((resolve, reject) => {
      if (index > -1) {
        let record = this._data.find(d => d.logicalName === entityLogicalName && d.id === id);
        let name = record.name || '';
        this._data.splice(index, 1);

        resolve({
          entityType: entityLogicalName,
          id: id,
          name: name
        });
      } else {
        reject(new Error('No record found matching the id ' + id + ' and logicalName ' + entityLogicalName + '.'));
      }
    });
  }

  retrieveRecord (args) {

  }

  retrieveMultipleRecords (args) {

  }

  updateRecord (args) {

  }

  _getNewId () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0;
      let v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  _validateData (data) {
    // TODO: must be in the format [{id: *valid guid*, logicalName: *string*, data: [{key, value}]}]
  }
}

module.exports = Api;
