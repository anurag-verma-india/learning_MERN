const _ = require('lodash')

const items = [3, [1, [4, [1, [5]]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)

