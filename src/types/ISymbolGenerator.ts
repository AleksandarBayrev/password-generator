export interface ISymbolGenerator {
    generateSymbols(startCode: number, endCode: number): string[]
}