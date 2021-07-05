import { SymbolGenerator } from "../SymbolGenerator"
import { IGenerator } from "../types"
import { PasswordService } from "./PasswordService"

describe('PasswordService', () => {
    const passwordService: IGenerator = new PasswordService(new SymbolGenerator())

    it('generates a password with length 5', () => {
        expect(passwordService.generate(5)).toHaveLength(5)
    })

    it('generates a password with length 55', () => {
        expect(passwordService.generate(55)).toHaveLength(55)
    })
    
    it('generates a password with length 555', () => {
        expect(passwordService.generate(555)).toHaveLength(555)
    })
})