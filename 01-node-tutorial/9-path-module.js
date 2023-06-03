const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath)

// file name
console.log(path.basename(filePath))
// absolute path
console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt'))