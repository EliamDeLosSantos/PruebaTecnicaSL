import * as z from 'zod'
import { TaskStatuses } from '../utils/taskStatuses.js'

export const TaskSchema = z.object({
        title: z.string().min(2, 'El titulo debe tener al menos 3 caracteres'),
        description: z.string().min(2, 'La descripcion debe tener al menos 3 caracteres'),
        status: z.enum([
            TaskStatuses.pending,
            TaskStatuses.completed,
            TaskStatuses.in_progress
        ]), 
        createdAt: z.coerce.date()
})