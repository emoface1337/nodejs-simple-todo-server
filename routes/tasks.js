const { Router } = require('express')
const Task = require('../models/task')
const router = Router()

const successResponseBody = {
    statusCode: 0
}

router.get('/', async (req, res) => {

    const tasks = await Task.find()
    res.send({
        tasks: tasks,
        ...successResponseBody
    })

})

router.post('/', async (req, res) => {

    const task = {
        id: req.body.id,
        text: req.body.text,
        created: req.body.created,
        completed: req.body.completed,
        favorite: req.body.favorite
    }

    await Task.create(task, (error, result) => {
        error
            ? res.send({ statusCode: 10, message: error.message })
            : res.send({ ...successResponseBody, result })
    })

})

router.get('/:id', async (req, res) => {

    const task = await Task.findOne({ id: req.params.id })
    res.json(task)

})

router.put('/:id', async (req, res) => {

        const { id } = req.params
        delete req.body.id

        await Task.updateOne({ id: id }, req.body, null, (error, result) => {
            error
                ? res.send({ statusCode: 10, message: error.message })
                : res.send({ ...successResponseBody, result })
        })
    }
)

router.delete('/:id', async (req, res) => {

    const { id } = req.params

    await Task.deleteOne({ id: id }, null, (error) => {
        error
            ? res.send({ statusCode: 10, message: error.message })
            : res.send({ ...successResponseBody })
    })

})

module.exports = router
