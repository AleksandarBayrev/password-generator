import { getLengthArgument } from "./getLengthArgument"

describe('getLengthArgument', () => {
    it('returns default props', () => {
        expect(getLengthArgument(['length=10'], {
            DEFAULT_LENGTH: 10
        })).toEqual({
            isDefault: true,
            length: 10
        })
    })
    it('returns correct props', () => {
        expect(getLengthArgument(['length=150'], {
            DEFAULT_LENGTH: 10
        })).toEqual({
            isDefault: false,
            length: 150
        })
    })
})