import { useEffect, useState } from "react"
import { getTasks,  createTask, updateTask } from "../helper/fetcher.js"
import { useForm } from 'react-hook-form'
import { } from '../helper/fetcher'

export const useTasks =() => {

    const [tasks, setTasks] = useState([])
    const [updatingIndex, setupdatingIndex] = useState(null)
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm()

    useEffect(() => {
        const obtainTasks = async () => {
            const tasksResponse = await getTasks()
            setTasks(tasksResponse)
        }
        obtainTasks()
    }, [])


  const upsertTask = async (data) => {
    if(!updatingIndex){
        const response = await createTask(data)
    }else{
       await handleUpdate(data)
    }
    reset()
  }

  const setUpdatingTask = (id) => {
    setupdatingIndex(id)
    const updatingTask = tasks.find(t => t.id == id);
    if(!updatingTask) return;
    setValue("title", updatingTask.title)
    setValue('status',updatingTask.title)
    setValue('createdAt',updatingTask.title)
  }

  const handleUpdate = async (data) => {
    const response = await updateTask({id:updatingIndex,data});
  }

  return {
    tasks, 
    register,
    registerTask: upsertTask,
    handleSubmit,
    setUpdatingTask
  }
}