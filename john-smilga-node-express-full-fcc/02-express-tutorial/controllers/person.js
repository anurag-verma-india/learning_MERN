let {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const postPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .send({ success: false, msg: 'Please provide name value' })
    }
    res.status(201).json({ succes: true, person: name })
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .send({ success: false, msg: 'Please provide name value' })
    }
    res.status(201).json({ succes: true, person: [...people, name] })
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res)=>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res
            .status(404)
            .send({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPerson = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data:newPerson})

}

module.exports = {
    getPeople,
    postPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}