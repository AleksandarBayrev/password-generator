import { ILengthResponse } from '../types'
import * as constants from '../constants'

export const buildMessage = (lengthResponse: ILengthResponse) => lengthResponse.isDefault ? `Your password with default length = ${lengthResponse.length} (as configured in constants.ts ${JSON.stringify(constants)}) is \n` : `Your password with length = ${lengthResponse.length} is \n`