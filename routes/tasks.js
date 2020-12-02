const { Router } = require('express')
const Task = require('../models/task')
const router = Router()

router.get('/', async (req, res) => {

    const tasks = await Task.find()
    res.send({
        tasks: tasks,
        statusCode: 0
    })
})

router.post('/', async (req, res) => {

    const task = new Task({
        id: req.body.id,
        text: req.body.text,
        created: req.body.created,
        completed: req.body.completed,
        favorite: req.body.favorite
    })

    try {
        await task.save()
        res.send({ statusCode: 0 })
    } catch (e) {
        res.send(e)
    }

})

router.get('/:id', async (req, res) => {
    const task = await Task.findOne({ id: req.params.id })
    res.json(task)
})

module.exports = router
