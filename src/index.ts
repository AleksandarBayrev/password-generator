import { constants } from './constants'
import { buildMessage, getLengthArgument, passwordService } from './helpers'
import { ILengthResponse } from './types'

const lengthResponse: ILengthResponse = getLengthArgument(process.argv, constants)

console.log(buildMessage(lengthResponse, constants))
console.log(passwordService.generate(lengthResponse.length))