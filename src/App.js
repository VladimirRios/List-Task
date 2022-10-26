import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/tareascreate';
import { TaskTable } from './components/TareaTable';
import { VisibilityControl } from './components/VisibilityControl';

function App() {

  const [itemTareas, establecerItemTareas] = useState([])
  const [showCompleted, setShowCompleted ] = useState(false)

  function crearNuevaTarea(nombreTarea) {
    if (!itemTareas.find(task => task.name === nombreTarea)) {
      establecerItemTareas([...itemTareas, { name: nombreTarea, done: false }])
    }

  }

  const toggleTask = task => {
    establecerItemTareas(
      itemTareas.map((t) => (t.name === task.name ? {...task, done: !task.done}: t)) 
    )

  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      establecerItemTareas(JSON.parse(data))
    }
  }, [])

  const deleteTasks = () => {
    establecerItemTareas(itemTareas.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(itemTareas)
    )
  }, [itemTareas])

  return (
    <main className="bg-dark vh-100 text-white">
      <div className='container p-4 col-md-4 offset-md-4'>
      <TaskCreator crearNuevaTarea={crearNuevaTarea} />
      <TaskTable tasks={itemTareas} toggleTask={toggleTask}/>
      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        deleteTasks={deleteTasks}
      />

      {
        showCompleted === true && (
          <TaskTable tasks={itemTareas} toggleTask={toggleTask} showCompleted={showCompleted}/>
        )
      }
      </div>
    </main>
  );
}

export default App;
