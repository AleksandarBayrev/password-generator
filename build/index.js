"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getLengthArgument_1 = require("./getLengthArgument");
var instances_1 = require("./instances");
var length = getLengthArgument_1.getLengthArgument(process.argv);
console.log("Your password with length: " + length + " is \n");
console.log(instances_1.passwordService.generate(length));
