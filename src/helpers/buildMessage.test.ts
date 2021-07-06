import { buildMessage } from './buildMessage'

describe('buildMessage', () => {
    it('returns correct message for default', () => {
        const message = buildMessage({
            length: 10,
            isDefault: true
        }, {
            DEFAULT_LENGTH: 10
        })
        expect(message).toEqual(`Your password with default length = 10 (as configured in constants.ts {"DEFAULT_LENGTH":10}) is \n`)
    })
    
    it('returns correct message for not default', () => {
        const message = buildMessage({
            length: 10,
            isDefault: false
        }, {
            DEFAULT_LENGTH: 10
        })
        expect(message).toEqual(`Your password with length = 10 is \n`)
    })
})