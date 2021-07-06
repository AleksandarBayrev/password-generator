import { DEFAULT_LENGTH } from '../constants'
import { ILengthResponse } from '../types'

const isLengthPresentAsArgument = (args: string[]) => args.find(x => x.indexOf('length=') !== -1) !== undefined

export const getLengthArgument = (args: string[]): ILengthResponse => {
    const response: ILengthResponse = {
        length: DEFAULT_LENGTH,
        isDefault: !isLengthPresentAsArgument(args)
    }
    
    if (response.isDefault) {
        response.length = DEFAULT_LENGTH
        return response
    }

    response.length = parseInt(args.slice(2)[0].split('=')[1])
    
    return response
}