import TaskForm from "./components/TaskForm"
import TaskTable from "./components/TaskTable"
import { useTasks } from "./hooks/useTasks"

export default function App() {
  const {tasks, 
    register,
    registerTask, handleSubmit, setUpdatingTask} = useTasks()
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* <h1>
        Manejador de Tareas
      </h1> */}
      <TaskForm register={register} registerTask={registerTask} handleSubmit={handleSubmit}/>
      <TaskTable tasks={tasks} setUpdatingTask={setUpdatingTask}/>
    </div>
  )
}

