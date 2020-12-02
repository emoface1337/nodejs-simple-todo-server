const { Schema, model } = require('mongoose')

const task = new Schema({
    id: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    favorite: {
        type: Boolean,
        required: true
    }
})

module.exports = model('Task', task, 'todo-app')
