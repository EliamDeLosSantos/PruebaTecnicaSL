import Title from "../shared/Title";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { TaskStates, ObtainTaskStatesKey } from "../../utils/TaskStates";
import { useEffect, useReducer, useState } from "react"
import TaskModal from "./TaskModal";

export default function TaskTable({ tasks, setUpdatingTask }) {
    const [selectedTask, setSelectedTask] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (task) => {
        setSelectedTask(task);
        setIsOpen(true);
    };

    const statusLabelColor = ({ status }) => {
        switch (status) {
            case ObtainTaskStatesKey({ value: TaskStates.completed }):
                return 'bg-green-100 text-green-700'
            case ObtainTaskStatesKey({ value: TaskStates.pending }):
                return 'bg-yellow-100 text-yellow-700'
            case ObtainTaskStatesKey({ value: TaskStates.in_progress }):
                return 'bg-blue-100 text-blue-700'
            default:
                return 'bg-blue-100 text-blue-700'
        }
    }

    return (
        <>
            {
                tasks.length > 0 && (
                    <div className="flex flex-col items-center">
                        <Title text={'Tareas'} />
                        <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tareas</h2>

                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-left text-sm text-gray-600">
                                        <th className="p-3">ID</th>
                                        <th className="p-3">Título</th>
                                        <th className="p-3">Descripcion</th>
                                        <th className="p-3">Estado</th>
                                        <th className="p-3">Creado</th>
                                        <th className="p-3">Acciones</th>
                                    </tr>
                                </thead>

                                <tbody className="text-sm text-gray-700">
                                    {
                                        tasks.map(task => (
                                            <tr key={task.id} className="border-t">
                                                <td className="p-3">{task.id}</td>
                                                <td className="p-3">{task.title}</td>
                                                <td className="p-3">{task.description}</td>
                                                <td className="p-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs ${statusLabelColor({ status: task.status })}`}>
                                                        {TaskStates[task.status]}
                                                    </span>
                                                </td>
                                                <td className="p-3"><span>
                                                    {task.createdAt}
                                                </span></td>
                                                <td className="p-3">
                                                    <div className="flex gap-2">
                                                        <button onClick={() => openModal(task)} className=" text-white font-bold px-2 py-1 rounded-md text-xs bg-blue-600">
                                                            <FaEye />
                                                        </button>
                                                        <button onClick={() => setUpdatingTask(task.id)} className="text-white font-bold px-2 py-1 rounded-md text-xs bg-yellow-500">
                                                            <FaPencilAlt />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <TaskModal isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            task={selectedTask}
                        />
                    </div>
                )
            }
        </>
    )
};

