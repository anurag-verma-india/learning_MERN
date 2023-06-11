const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    } else {
        res.status(401).send('Please Provide Credentials')
    }
})
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
app.post('/api/people/postman', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .send({ success: false, msg: 'Please provide name value' })
    }
    res.status(201).json({ succes: true, person: [...people, name] })
})


app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res
            .status(404)
            .send({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res)=>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res
            .status(404)
            .send({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPerson = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data:newPerson})

})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})