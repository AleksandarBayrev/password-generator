import { buildMessage } from './buildMessage'
import { getLengthArgument } from './getLengthArgument'
import { passwordService } from './instances'
import { ILengthResponse } from './types'

const lengthResponse: ILengthResponse = getLengthArgument(process.argv)

console.log(buildMessage(lengthResponse))
console.log(passwordService.generate(lengthResponse.length))