import { useState } from 'react'

export const TaskCreator = ({ crearNuevaTarea }) => {

    const [NombreNuevaTarea, EstablecerNuevaTarea] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        crearNuevaTarea(NombreNuevaTarea);
        EstablecerNuevaTarea('')
    }

    return (
        <form onSubmit={handleSubmit} className='my-2 row'>
            <div className='col-9'>
                <input
                    type="text"
                    placeholder='Ingresa la nueva tarea'
                    value={NombreNuevaTarea}
                    onChange={(e) => EstablecerNuevaTarea(e.target.value)}
                    className='form-control'
                />
            </div>
        <div className='col-3'>
            <button className='btn btn-primary btn-sm'>Guardar Tarea</button>
        </div>
        </form>
    )
}