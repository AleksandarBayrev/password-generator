import { ISymbolGenerator } from '../types'
import { SymbolGenerator } from './SymbolGenerator'

describe('SymbolGenerator', () => {
    const generator: ISymbolGenerator = new SymbolGenerator()

    it('returns correct array', () => {
        expect(generator.generateSymbols('A'.charCodeAt(0), 'D'.charCodeAt(0))).toEqual(['A', 'B', 'C', 'D'])
    })
    it('returns correct array (reversed order of letters)', () => {
        expect(generator.generateSymbols('D'.charCodeAt(0), 'A'.charCodeAt(0))).toEqual(['A', 'B', 'C', 'D'])
    })
})