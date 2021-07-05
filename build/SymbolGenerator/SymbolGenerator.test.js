"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SymbolGenerator_1 = require("./SymbolGenerator");
describe('SymbolGenerator', function () {
    var generator = new SymbolGenerator_1.SymbolGenerator();
    it('returns correct array', function () {
        expect(generator.generateSymbols('A'.charCodeAt(0), 'D'.charCodeAt(0))).toEqual(['A', 'B', 'C', 'D']);
    });
    it('returns correct array (reversed order of letters)', function () {
        expect(generator.generateSymbols('D'.charCodeAt(0), 'A'.charCodeAt(0))).toEqual(['A', 'B', 'C', 'D']);
    });
});
