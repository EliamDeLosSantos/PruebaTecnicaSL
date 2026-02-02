import { useEffect, useReducer, useState } from "react"
import { getTasks,  createTask, updateTask } from "../helper/fetcher.js"
import { useForm } from 'react-hook-form'
import { } from '../helper/fetcher'

export const useTasks =() => {

    const [tasks, setTasks] = useState([])
    const [updatingIndex, setupdatingIndex] = useState(null)
    const [refresh, forceRefresh] = useReducer(x => x + 1, 0)
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm()

    useEffect(() => {
        const obtainTasks = async () => {
            const tasksResponse = await getTasks()
            setTasks(tasksResponse)
        }
        obtainTasks()
    }, [refresh])


  const upsertTask = async (data) => {
    if(!updatingIndex){
        const response = await createTask(data)
    }else{
       await handleUpdate(data)
    }
    forceRefresh()
    reset()
  }

  const setUpdatingTask = (id) => {
    setupdatingIndex(id)
    const updatingTask = tasks.find(t => t.id == id);
    if(!updatingTask) return;
    setValue("title", updatingTask.title)
    setValue("status",updatingTask.status)
    setValue("createdAt",updatingTask.createdAt)
    setValue("description",updatingTask.description)
  }

  const handleUpdate = async (data) => {
    const response = await updateTask({id:updatingIndex,data});
    setupdatingIndex(null)
  }

  return {
    tasks, 
    register,
    registerTask: upsertTask,
    handleSubmit,
    setUpdatingTask,
    errors
  }
}