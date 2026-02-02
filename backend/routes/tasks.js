import express from 'express'
import { getAll, getById, createTask, updateTask } from '../controllers/tasksController.js'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', createTask)
router.put('/:id', updateTask)

export default router
