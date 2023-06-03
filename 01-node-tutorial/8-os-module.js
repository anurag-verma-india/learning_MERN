const os = require('os')

// info about the current user

user = os.userInfo()
console.log(user)

// System uptime

console.log(`The system uptime is ${((os.uptime()) / 60)/60} hours`)

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)