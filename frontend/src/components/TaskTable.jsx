

export default function TaskTable({tasks, setUpdatingTask}) {

    return (
        <>
            {
                tasks.length > 0 && (
                    <div>
                        <h1>
                            TaskTable
                        </h1>
                        <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tareas</h2>

                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-left text-sm text-gray-600">
                                        <th className="p-3">ID</th>
                                        <th className="p-3">Título</th>
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
                                                <td className="p-3">
                                                    <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                                                        {task.status}
                                                    </span>
                                                </td>
                                                <td className="p-3">{task.createdAt}</td>
                                                <td className="p-3">
                                                    <button onClick={() => setUpdatingTask(task.id)} className=" px-2 py-1 rounded-md text-xs bg-blue-300">
                                                        Editar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }

{/* 
                                    <tr className="border-t">
                                        <td className="p-3">2</td>
                                        <td className="p-3">task mock 2</td>
                                        <td className="p-3">
                                            <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                                                in_progress
                                            </span>
                                        </td>
                                        <td className="p-3">2026-01-29</td>
                                    </tr>

                                    <tr className="border-t">
                                        <td className="p-3">3</td>
                                        <td className="p-3">task mock 3</td>
                                        <td className="p-3">
                                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                                completed
                                            </span>
                                        </td>
                                        <td className="p-3">2026-01-28</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>

                    </div>
                )
            }
        </>
    )
};

