"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _stringUtil = require("../../utilities/string-util");

function index(req, res) {}

function validateIndex(body) {
  var errors = "";
  if (_stringUtil.StringUtil.isEmpty(body.username)) {
    errors += "Username is required. ";
  }
  if (_stringUtil.StringUtil.isEmpty(body.password)) {
    errors += "Password is required. ";
  }

  return {
    isValid: _stringUtil.StringUtil.isEmpty(errors),
    message: errors
  };
}