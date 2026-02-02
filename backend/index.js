import express from 'express'
import cors from 'cors'
import tasks from './mock/task.json' with {type : "json"}
import { TaskSchema } from './schemas/taskSchema.js'

const port = 3000
const app = express()
app.use(cors())
app.use(express.json())

let tasksMock = tasks
//GET
app.get('/tasks', (req, res) => {
    return res.status(200).json(tasksMock)
})

//GETBYID
app.get('/tasks/:id', (req, res) => {
    const id = req.params.id;
    if(!id) return res.status(400).json({message: 'Id necesario'})
        const task = tasksMock.find(t => t.id == id);
    if(!task) return res.status(404).json({message: 'No se encontro la tarea'})
    return res.status(200).json(task)
} )

//POST
app.post('/tasks', (req, res) => {
    //TODO: use uuid for id
    const {title, description, status, createdAt} = req.body;
    const validation = TaskSchema.safeParse({title, description, status, createdAt});
    if(!validation.success){
        return res.status(400).json(validation.error.issues)
    }
    const payload = {
        id: tasksMock.length + 1,
        title,
        description,
        status,
        createdAt
    }
    tasksMock.push(payload)
    return res.status(201).json({message: 'Tarea creada exitosamente'})
})

//PUT
app.put('/tasks/:id', (req, res) => {
    const id = req.params.id;
    if(!id) return res.status(400).json({message: 'Id necesario'})
        const task = tasksMock.find(t => t.id == id);
    if(!task) return res.status(404).json({message: 'No se encontro la tarea'})
    const {title, description, status, createdAt} = req.body;
    const validation = TaskSchema.safeParse({title, description, status, createdAt});
    if(!validation.success){
        return res.status(400).json(validation.error.issues)
    }
    const payload = {
        title,
        description,
        status,
        createdAt
    }
    Object.assign(task, payload)

    return res.status(201).json({message: 'Tarea editada exitosamente'})
})

app.listen(port, () => console.log(`running in http://localhost:${port}`))