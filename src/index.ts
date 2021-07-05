import { getLengthArgument } from './getLengthArgument'
import { passwordService } from './instances'

const length = getLengthArgument(process.argv)

console.log(`Your password with length: ${length} is \n`)
console.log(passwordService.generate(length))