"use strict";

var util = require("../../util");

module.exports = function (Parent) {
  var Constructor = function () {
    this.noInteropRequireExport = true;
    Parent.apply(this, arguments);
  };

  util.inherits(Constructor, Parent);

  return Constructor;
};
