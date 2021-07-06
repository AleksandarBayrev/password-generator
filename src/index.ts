import { buildMessage, getLengthArgument, passwordService } from './helpers'
import { ILengthResponse } from './types'

const lengthResponse: ILengthResponse = getLengthArgument(process.argv)

console.log(buildMessage(lengthResponse))
console.log(passwordService.generate(lengthResponse.length))