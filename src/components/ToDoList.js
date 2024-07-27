export default function ToDoList() {

  const items = [
    'Trabajar',
    'Estudiar',
    'Leer',
    'Entrenar',
    'Comer con amigos'
  ]

  const handleAddClick = () => {
    console.log('Quiero agregar una tarea')
  }

  const handleDeleteClick = (event) => {
    console.log(event.target.parentChild)
  }

  return (
    <>
      <div>
        <h1>To Do List App</h1>

        <ul>
          {items.map((item) =>
            <div>
              <li key={item}>{item}</li>
              <button onClick={handleDeleteClick}>x</button>
            </div>
          )}
        </ul>

        <button onClick={handleAddClick}>Agregar tarea</button>
      </div>
    </>
  )
}