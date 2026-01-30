
export default function TaskForm({register, registerTask, handleSubmit}) {

  return (
    <div>
      <h1>
        Formulario de Tareas
      </h1>
      <form onSubmit={handleSubmit(registerTask)} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Create Task</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name='title'
            placeholder="Task title"
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            {...register('title')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
          name='description'
          {...register('description')}
            rows="3"
            placeholder="Task description"
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
          name='status'
          {...register('status')}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            {/* Bring it from enum type object */}
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Created At
          </label>
          <input
          name='createdAt'
          {...register('createdAt')}
            type="date"
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Task
        </button>
      </form>
    </div>
  )
};

