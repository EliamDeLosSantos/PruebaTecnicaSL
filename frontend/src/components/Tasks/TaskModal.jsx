import { Fragment } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import { TaskStates } from "../../utils/TaskStates";

export default function TaskModal({ isOpen, onClose, task }) {
    return (
        <>
            {
                task && (
                    <>
                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-50" onClose={onClose}>
                                <div className="fixed inset-0 bg-black/30" />
                                <div className="fixed inset-0 flex items-center justify-center p-4">
                                    <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                                        <DialogTitle className="text-3xl text-center font-bold text-gray-800">
                                            Detalle de la tarea
                                        </DialogTitle>

                                        <div className="mt-4 space-y-2 text-sm text-gray-700">
                                            <p><strong>ID:</strong> {task.id}</p>
                                            <p><strong>Titulo:</strong> {task.title}</p>
                                            <p><strong>Descripcion:</strong> {task.description}</p>
                                            <p>
                                                <strong>Estado:</strong>{" "}
                                                <span>{TaskStates[task.status]}</span>
                                            </p>
                                            <p><strong>Creado:</strong> {task.createdAt}</p>
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <button onClick={onClose}
                                                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                            >
                                                Cerrar
                                            </button>
                                        </div>
                                    </DialogPanel>
                                </div>
                            </Dialog>
                        </Transition>
                    </>
                )
            }
        </>
    );
}