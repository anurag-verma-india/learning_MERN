// import * as pack from './package.json'
// // const package = require('./package.json')

// console.log(pack)

import fs from 'node:fs'

fs.readFile('./sample.json', (err, data) => {
    if (err) console.log("err\n", err);
    const env = JSON.parse(data)
    console.log(env)
    console.log(env.sample)
    console.log(env.mysql)
})