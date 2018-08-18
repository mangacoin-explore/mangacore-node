'use strict';

var createError = require('errno').create;

var MangacoreNodeError = createError('MangacoreNodeError');

var RPCError = createError('RPCError', MangacoreNodeError);

module.exports = {
  Error: MangacoreNodeError,
  RPCError: RPCError
};
