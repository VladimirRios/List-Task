export const VisibilityControl = ({ isChecked, setShowCompleted, deleteTasks }) => {

    const handleDelete = () => {
        if (window.confirm('Esta seguro de querer eliminarlo ?')) {
            deleteTasks();
        }
    }

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <input className="form-check-input form-check form-switch" type="checkbox" checked={isChecked} onChange={(e) => setShowCompleted(e.target.checked)} /> {" "}
            <label>Mostrar tareas hechas</label>

            <button onClick={handleDelete} className='btn btn-danger btn-sm'>Clear</button>
        </div>
    )
}