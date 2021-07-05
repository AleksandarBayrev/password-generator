"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLengthArgument = void 0;
var constants_1 = require("./constants");
var getLengthArgument = function (args) {
    if (args.length === 0) {
        return constants_1.DEFAULT_LENGTH;
    }
    return parseInt(args.slice(2)[0].split('=')[1]);
};
exports.getLengthArgument = getLengthArgument;
