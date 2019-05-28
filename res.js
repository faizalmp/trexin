'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'message': 'Success',
      'values': values
  };
  res.json(data);
  res.end();
};