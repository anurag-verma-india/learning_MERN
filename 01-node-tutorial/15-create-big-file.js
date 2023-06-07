const { writeFileSync } = require('fs');

for (i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `Hello there ${i}\n`, {flag: 'a'})
}