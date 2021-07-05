"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SymbolGenerator_1 = require("../SymbolGenerator");
var PasswordService_1 = require("./PasswordService");
describe('PasswordService', function () {
    var passwordService = new PasswordService_1.PasswordService(new SymbolGenerator_1.SymbolGenerator());
    it('generates a password with length 5', function () {
        expect(passwordService.generate(5)).toHaveLength(5);
    });
    it('generates a password with length 55', function () {
        expect(passwordService.generate(55)).toHaveLength(55);
    });
    it('generates a password with length 555', function () {
        expect(passwordService.generate(555)).toHaveLength(555);
    });
});
