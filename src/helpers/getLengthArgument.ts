import { IConstants, ILengthResponse } from '../types'

const isLengthPresentAsArgument = (args: string[]): boolean => processArguments(args) !== undefined

const processArguments = (args: string[]): string | undefined => args.find(x => x.indexOf('length=') !== -1)

const getArgument = (argument: string): number => parseInt(argument.split('=')[1])

const getIsDefault = (args: string[], lengthArgument: string | undefined, constants: IConstants) => isLengthPresentAsArgument(args) && lengthArgument !== undefined && getArgument(lengthArgument) === constants.DEFAULT_LENGTH

export const getLengthArgument = (args: string[], constants: IConstants): ILengthResponse => {
    const lengthArgument = processArguments(args)
    const response: ILengthResponse = {
        length: constants.DEFAULT_LENGTH,
        isDefault: getIsDefault(args, lengthArgument, constants)
    }

    if (response.isDefault || lengthArgument === undefined) {
        response.length = constants.DEFAULT_LENGTH
        return response
    }

    response.length = getArgument(lengthArgument)
    
    return response
}