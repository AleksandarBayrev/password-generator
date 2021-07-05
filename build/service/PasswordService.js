"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordService = void 0;
var PasswordService = /** @class */ (function () {
    function PasswordService(symbolGenerator) {
        this.symbolGenerator = symbolGenerator;
    }
    PasswordService.prototype.generate = function (length) {
        return this.buildPassword(length);
    };
    PasswordService.prototype.buildPassword = function (length) {
        var possibleSymbols = this.symbolGenerator.generateSymbols('A'.charCodeAt(0), '~'.charCodeAt(0));
        var password = '';
        for (var i = 0; i < length; i++) {
            password += possibleSymbols[this.getRandomIntInclusive(0, possibleSymbols.length - 1)];
        }
        return password;
    };
    PasswordService.prototype.getRandomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    };
    return PasswordService;
}());
exports.PasswordService = PasswordService;
