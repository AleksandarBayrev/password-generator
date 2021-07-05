import { DEFAULT_LENGTH } from './constants'

export const getLengthArgument = (args: string[]): number => {
    if (args.length === 0) {
        return DEFAULT_LENGTH
    }
    
    return parseInt(args.slice(2)[0].split('=')[1])
}