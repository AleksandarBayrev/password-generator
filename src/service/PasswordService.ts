import { IGenerator, ISymbolGenerator } from '../types'

export class PasswordService implements IGenerator {
    private readonly symbolGenerator: ISymbolGenerator

    constructor(symbolGenerator: ISymbolGenerator) {
        this.symbolGenerator = symbolGenerator
    }

    generate(length: number): string {
        return this.buildPassword(length)
    }

    private buildPassword(length: number) {
        const possibleSymbols = this.symbolGenerator.generateSymbols('A'.charCodeAt(0), '~'.charCodeAt(0))
        let password = ''
        for (let i = 0; i < length; i++) {
            password += possibleSymbols[this.getRandomIntInclusive(0, possibleSymbols.length - 1)]
        }
        return password
    }
    private getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
}