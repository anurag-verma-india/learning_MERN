const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})
app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .send({ success: false, msg: 'Please provide name value' })
    }
    res.status(201).json({ succes: true, person: name })
})
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
        .status(400)
        .send({ success: false, msg: 'Please provide name value' })
    }
    res.status(201).json({ succes: true, person: [...people, name]})
})

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    } else {
        res.status(401).send('Please Provide Credentials')
    }
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})