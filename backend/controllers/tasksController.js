import { TaskSchema } from '../schemas/taskSchema.js'
import tasks from '../mock/task.json' with {type : "json"}

let tasksMock = tasks

export const getAll = (req, res) => {
  return res.status(200).json(tasksMock)
}

export const getById = (req, res) => {
  const id = req.params.id
  if (!id) return res.status(400).json({ message: 'Id necesario' })
  const task = tasksMock.find(t => t.id == id)
  if (!task) return res.status(404).json({ message: 'No se encontro la tarea' })
  return res.status(200).json(task)
}

export const createTask = (req, res) => {
  const { title, description, status, createdAt } = req.body
  const validation = TaskSchema.safeParse({ title, description, status, createdAt })
  if (!validation.success) return res.status(400).json(validation.error.issues)
  const payload = {
    id: tasksMock.length + 1,
    title,
    description,
    status,
    createdAt
  }
  tasksMock.push(payload)
  return res.status(201).json({ message: 'Tarea creada exitosamente' })
}

export const updateTask = (req, res) => {
  const id = req.params.id
  if (!id) return res.status(400).json({ message: 'Id necesario' })
  const task = tasksMock.find(t => t.id == id)
  if (!task) return res.status(404).json({ message: 'No se encontro la tarea' })
  const { title, description, status, createdAt } = req.body
  const validation = TaskSchema.safeParse({ title, description, status, createdAt })
  if (!validation.success) return res.status(400).json(validation.error.issues)
  const payload = { title, description, status, createdAt }
  Object.assign(task, payload)
  return res.status(201).json({ message: 'Tarea editada exitosamente' })
}
