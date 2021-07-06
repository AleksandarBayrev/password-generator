import { PasswordService } from '../service'
import { SymbolGenerator } from '../SymbolGenerator'
import { IGenerator, ISymbolGenerator } from '../types'

export const generator: ISymbolGenerator = new SymbolGenerator()
export const passwordService: IGenerator = new PasswordService(generator)