import { FaRegTrashCan, FaCheck, FaCirclePlus  } from 'react-icons/fa6'

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
              <FaRegTrashCan className='icon'/>
            </button>

            {/* mark task as done button */}
            <button className="task-mark-done-button">
              <FaCheck className='icon'/>
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
              <FaRegTrashCan className='icon'/>
            </button>

            {/* mark task as done button */}
            <button className="task-mark-done-button">
              <FaCheck className='icon'/>
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
              <FaRegTrashCan className='icon'/>
            </button>

            {/* mark task as done button */}
            <button className="task-mark-done-button">
              <FaCheck className='icon'/>
            </button>
          </div>
        </div>
      </div>

      {/* todo add-task button */}
      <button className="todo-add-task-button">
        <FaCirclePlus />
        
        <span className="add-task-text">
          Add new task  
        </span>
      </button>
    </div>
  )
}

export default App
