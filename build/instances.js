"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordService = exports.generator = void 0;
var service_1 = require("./service");
var SymbolGenerator_1 = require("./SymbolGenerator");
exports.generator = new SymbolGenerator_1.SymbolGenerator();
exports.passwordService = new service_1.PasswordService(exports.generator);
