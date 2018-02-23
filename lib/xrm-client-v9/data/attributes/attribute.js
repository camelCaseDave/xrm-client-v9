'use strict';

const submitModes = [undefined, 'always', 'never', 'dirty'];
const requiredLevels = [undefined, 'none', 'required', 'recommended'];
const userPrivileges = ['canRead', 'canUpdate', 'canCreate'];

class Attribute {
  constructor (options) {
    this.options = Object.assign({}, options);

    this._value = options.value;
    this._isDirty = options.isDirty;
    this._attributeType = options.attributeType;
    this._name = options.name;

    this._setRequiredLevel(options.requiredLevel);
    this._setSubmitMode(options.submitMode);
    this._setUserPrivilege(options.userPrivilege);
  }

  getValue () {
    return this._value;
  }

  setValue (value) {
    // TODO: validate value
    this._value = value;
    this._isDirty = true;
  }

  getIsDirty () {
    return this._isDirty;
  }

  getAttributeType () {
    return this._attributeType;
  }

  getRequiredLevel () {
    return this._requiredLevel;
  }

  getFormat () {
    return this._format;
  }

  getName () {
    return this._name;
  }

  getUserPrivilege () {
    return this._userPrivilege;
  }

  _setSubmitMode (submitMode) {
    if (submitModes.includes(submitMode)) {
      this._submitMode = submitMode;
    } else {
      throw new TypeError(submitMode + ' must be one of ' + submitModes.join(', '));
    }
  }

  _setRequiredLevel (requiredLevel) {
    if (requiredLevels.includes(requiredLevel)) {
      this._requiredLevel = requiredLevel;
    } else {
      throw new TypeError(requiredLevel + ' must be one of ' + requiredLevels.join(', '));
    }
  }

  _setUserPrivilege (privileges) {
    privileges = privileges || {
      canRead: true,
      canUpdate: true,
      canCreate: true
    };

    var privilegeKeys = Object.keys(privileges);

    if (privilegeKeys.length === userPrivileges.length && privilegeKeys.every((v, i) => v === userPrivileges[i])) {
      this._userPrivilege = privileges;
    } else {
      throw new TypeError('Attribute user privileges must be all of and only ' + userPrivileges.join(', '));
    }
  }
}

module.exports = Attribute;
