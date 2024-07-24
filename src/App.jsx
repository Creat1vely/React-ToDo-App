function App() {
  return (
    <div className='app'>
      {/* app title */}
      <h1 className="app-title">
        My ToDo&apos;s
      </h1>

      {/* todo search input */}
      <input type="text" className="todo-search-input" placeholder="search tasks"/>

      {/* todo task list */}
      <div className="todo-task-list">

        {/* task */}
        <div className="task">
          {/* task objective */}
          <span className="task-objective">
            brush teeth
          </span>

          {/* task action buttons */}
          <div className="action-buttons-ctn">

            {/* delete task button */}
            <button className="task-delete-button">
              delete
            </button>

            {/* mark task as done button */}
            <button className="task-mark-done-button">
              mark as done
            </button>
          </div>
        </div>

        {/* task */}
        <div className="task">
          {/* task objective */}
          <span className="task-objective">
            sweep room
          </span>

          {/* task action buttons */}
          <div className="action-buttons-ctn">

            {/* delete task button */}
            <button className="task-delete-button">
              delete
            </button>

            {/* mark task as done button */}
            <button className="task-mark-done-button">
              mark as done
            </button>
          </div>
        </div>

        {/* task */}
        <div className="task">
          {/* task objective */}
          <span className="task-objective">
            remove bed
          </span>

          {/* task action buttons */}
          <div className="action-buttons-ctn">

            {/* delete task button */}
            <button className="task-delete-button">
              delete
            </button>

            {/* mark task as done button */}
            <button className="task-mark-done-button">
              mark as done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
