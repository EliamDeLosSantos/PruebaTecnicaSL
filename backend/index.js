import express from 'express'
import cors from 'cors'
import tasksRouter from './src/routes/tasks.js'

const port = 3000
const app = express()
app.use(cors())
app.use(express.json())

app.use('/tasks', tasksRouter)

app.listen(port, () => console.log(`running in http://localhost:${port}`))