import FormInputLabel from "./FormInputLabel";
import { TaskStates } from '../../utils/TaskStates'
import Title from "../shared/Title";

export default function TaskForm({ register, registerTask, handleSubmit, errors }) {

  const inputClasses = `w-full p-1 rounded border-gray-300 focus:border-blue-500 
                        focus:ring-blue-500 border`

  return (
    <div className="flex flex-col justify-center items-center">
      <Title text={'Formulario de Tareas'}/>
      <form onSubmit={handleSubmit(registerTask)} className="bg-white p-6 rounded-xl shadow-md w-full 
        max-w-md space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Agregar {''}
          <span className="text-blue-600">
            Tareas
          </span>
        </h2>

        <div>
          <FormInputLabel text={'Titulo'} />
          <input
            type="text"
            name='title'
            placeholder="Hacer cafe"
            className={inputClasses}
            {...register('title', {
              required: 'El titulo es requerido'
            })}
          />
          {errors.title &&(
            <p className="mx-1 text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <FormInputLabel text={'Descripcion'} />
          <textarea
            name='description'
            {...register('description', {
              required: 'La descripcion es requerida'
            })}
            rows="3"
            placeholder="Preparar un cafe en la tarde"
            className={inputClasses}
          ></textarea>
          {errors.description &&(
            <p className="mx-1 text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div>
          <FormInputLabel text={'Estado'} />
          <select
            name='status'
            {...register('status', {
              required: 'El estado es requerido'
            })}
            className={inputClasses}
          >
            {/* Bring it from enum type object: DONE */}
            {Object.entries(TaskStates).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>
          {errors.status &&(
            <p className="mx-1 text-red-500">{errors.status.message}</p>
          )}
        </div>

        <div>
          <FormInputLabel text={'Fecha de creacion'} />
          <input
            name='createdAt'
            {...register('createdAt', {
              required: 'La fecha de creacion es requerida'
            })}
            type="date"
            className={inputClasses}
          />
          {errors.createdAt &&(
            <p className="mx-1 text-red-500">{errors.createdAt.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="font-bold w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Guardar Tarea
        </button>
      </form>
    </div>
  )
};

