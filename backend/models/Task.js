const mongoose = require('mongoose')

const subtaskSchema = new mongoose.Schema({
    name: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const taskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

   subtasks: [subtaskSchema],
    completed: {
        type: String,
        required: true,
        default: "Employee"
    }
  
    
})

module.exports = mongoose.model('Task', taskSchema)