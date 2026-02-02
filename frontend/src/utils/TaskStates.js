export const TaskStates = {
    pending: 'Pendiente',
    in_progress: 'En Progreso',
    completed: 'Completado'
}

export const ObtainTaskStatesKey = ({value}) => Object.keys(TaskStates).find(key => TaskStates[key] === value);
