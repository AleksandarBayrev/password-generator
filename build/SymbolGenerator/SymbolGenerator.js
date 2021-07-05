"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolGenerator = void 0;
var SymbolGenerator = /** @class */ (function () {
    function SymbolGenerator() {
    }
    SymbolGenerator.prototype.generateSymbols = function (startCode, endCode) {
        var symbols = [];
        for (var i = this.getStartCode(startCode, endCode); i <= this.getEndCode(startCode, endCode); i++) {
            symbols.push(String.fromCharCode(i));
        }
        return symbols;
    };
    SymbolGenerator.prototype.getStartCode = function (firstNumber, secondNumber) {
        return firstNumber > secondNumber ? secondNumber : firstNumber;
    };
    SymbolGenerator.prototype.getEndCode = function (firstNumber, secondNumber) {
        return firstNumber > secondNumber ? firstNumber : secondNumber;
    };
    return SymbolGenerator;
}());
exports.SymbolGenerator = SymbolGenerator;
