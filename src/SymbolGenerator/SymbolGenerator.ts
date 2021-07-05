import { ISymbolGenerator } from '../types'

export class SymbolGenerator implements ISymbolGenerator {
    generateSymbols(startCode: number, endCode: number): string[] {
        const symbols: string[] = []

        for (let i = this.getStartCode(startCode, endCode); i <= this.getEndCode(startCode, endCode); i++) {
            symbols.push(String.fromCharCode(i))
        }

        return symbols
    }

    private getStartCode(firstNumber: number, secondNumber: number) {
        return firstNumber > secondNumber ? secondNumber : firstNumber
    }

    private getEndCode(firstNumber: number, secondNumber: number) {
        return firstNumber > secondNumber ? firstNumber : secondNumber
    }
}