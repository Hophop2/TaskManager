const Task = require('../models/Task')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')


const getAllTasks = asyncHandler(async (req, res) => {
    // Get all tasks from MongoDB
    const tasks = await Task.find().lean()

 
    if (!tasks?.length) {
        return res.status(400).json({ message: 'No Tasks found' })
    }

    // Add username to each task before sending the response 
    
    const tasksWithUser = await Promise.all(tasks.map(async (task) => {
        const user = await User.findById(task.user).lean().exec()
        return { ...task, username: user.username }
    }))

    res.json(tasksWithUser)
})


const createNewTask = asyncHandler(async (req, res) => {
    const { user, title, content, subtasks } = req.body

    // Confirm data
    if (!user || !title || !content) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await Task.findOne({ title }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate task title' })
    }

    // Create and store the new user 
    const task = await Task.create({ user, title, content, subtasks })

    if (task) { // Created 
        return res.status(201).json({ message: 'New task created' })
    } else {
        return res.status(400).json({ message: 'Invalid task data received' })
    }

})


const updateTask = asyncHandler(async (req, res) => {
    const { id, user, title, content, subtasks } = req.body

    // Confirm data
    if (!id || !user || !title || !content || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm task exists to update
    const task = await Task.findById(id).exec()

    if (!task) {
        return res.status(400).json({ message: 'Task not found' })
    }

    // Check for duplicate title
    const duplicate = await Task.findOne({ title }).lean().exec()

    // Allow renaming of the original task 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate task title' })
    }

    task.user = user
    task.title = title
    task.content = content
    task.completed = completed

    const updatedTask = await task.save()

    res.json(`'${updatedTask.title}' updated`)
})


const deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Task ID required' })
    }

    // Confirm task exists to delete 
    const task = await Task.findById(id).exec()

    if (!task) {
        return res.status(400).json({ message: 'Task not found' })
    }

    const result = await task.deleteOne()

    const reply = `Task '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllTasks,
    createNewTask,
    updateTask,
    deleteTask
}