
// IMPORTS
const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3000

// setup database 
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

// connect to mongo 
mongoose.connect(mongoURI)

const db = mongoose.connection
// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ' , err)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})

// Define a schema for your to-do items
const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
})

// Create a model based on the schema
const Todo = mongoose.model('Todo', todoSchema)

// Middleware for parsing JSON request bodies


app.get('/', (req, res) => {
   res.send('Hello!')
})

// Route to create a new to-do item
app.post('/todos', async (req, res) => {
    try {
        const { title, completed } = req.body
        const todo = new Todo({ title, completed })
        await todo.save()
        res.status(201).json(todo)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Route to update a to-do item by ID
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { title, completed } = req.body
        const todo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true })
        if (!todo) {
            res.status(404).json({ error: 'Todo not found' })
        } else {
            res.status(200).json(todo)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


// Route to delete a to-do item by ID
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findByIdAndRemove(id)
        if (!todo) {
            res.status(404).json({ error: 'Todo not found' })
        } else {
            res.status(204).send()
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})