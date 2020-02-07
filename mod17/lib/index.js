"use strict";

var validator = require('validator');

var valid_email = 'email@gmail.com';
var invalid = 'invalid.email';
console.log("".concat(valid_email, " is valid EMAIL: ").concat(validator.isEmail(valid_email)));
console.log("".concat(invalid, " is valid EMAIL: ").concat(validator.isEmail(invalid)));
var line = 'hello world from NodeJS';

var func = function func(a) {
  console.log(a);
};

func(line);