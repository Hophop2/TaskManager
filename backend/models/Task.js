const mongoose = require('mongoose')

const subtaskSchema = new mongoose.Schema({
    name: String,
    completedCheck: {
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
    completed: {
        type: String,
        required: true
    },
    flag: {
        type: String
    },

   subtasks: [subtaskSchema]
   
  
    
})

module.exports = mongoose.model('Task', taskSchema)