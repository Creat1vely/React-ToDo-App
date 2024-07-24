// import react icons for icons usage
import { FaRegTrashCan, FaCheck  } from 'react-icons/fa6';

// prop-types import
import PropTypes from 'prop-types';


function Task( { task, deleteTask, toggleTaskAsDone } ) {
  return (
    <div className={`task ${ ( task.done ) ? "done" : "" }`}>
        {/* task objective */}
        <span className="task-objective">
            { task.objective }
        </span>

        {/* task action buttons */}
        <div className="action-buttons-ctn">

            {/* delete task button */}
            <button className="task-delete-button" onClick={ () => { deleteTask( task.id ) } }>
                <FaRegTrashCan className='icon'/>
            </button>

            {/* mark task as done button */}
            <button className="task-mark-done-button" onClick={ () => { toggleTaskAsDone( task.id ) } }>
                <FaCheck className='icon'/>
            </button>
        </div>
    </div>
  )
}



// add prop types to enable props tpye-checking and intellisense
Task.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTaskAsDone: PropTypes.func.isRequired
}


export default Task
