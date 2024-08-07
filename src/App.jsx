import { useState } from 'react'

// import react icons for icons usage
import { FaCirclePlus  } from 'react-icons/fa6';

// import child components to be used in the app
import Task from './Task';

// import useLocalStorage custom hook to handle normal state management
// in combination with localStorage effect
import useLocalStorage from '../../Shopping List/src/useLocalStorage';

// import branding components
import CreativelyLinks from './creatively-branding/CreativelyWebDevLinks';
import CreativelyTitle from './creatively-branding/CreativelyTitle';



function App() {
  // define "tasks" stateful variable for storing the list of 
  // created/saved tasks
  const [ tasks, setTasks ] = useLocalStorage("React-ToDo-List", [
    {
      id: 3472348895454,
      objective: "sweep house",
      done: false
    },
    {
      id: 3498334732892348,
      objective: "eat breakfast",
      done: true
    },
    {
      id: 12742372347477374,
      objective: "call sammy",
      done: false
    },
    {
      id: 959595439345943,
      objective: "get cakes",
      done: true
    }
  ]);

  // define seaarchValue stateful variable for storing
  // input value and performing search on user app
  const [ searchValue, setSearchValue ] = useState("")


  // addTasks()
  // used to add new tasks to the tasks data
  function addTasks() {
    // prompt user for new task objective
    var newTaskObjective = prompt("Enter an objective for the new task: ");

    // check if objective is valid, if invalid,
    // alert user stating task objective is invalid
    // else create new task in tasks data
    if ( newTaskObjective != "" ) {

      // create new task since task objective is valid
      setTasks( ( tasks ) => [
        ...tasks,
        {
          id: Date.now(),
          objective: newTaskObjective,
          done: false
        }
      ])
    } else {

      // alert user stating an invalid task objective was entered
      alert("Empty task objective: The task objective is required" +
        "to create a new task");
    }
  }

  // deleteTasks()
  // used to delete a specific task from the tasks 
  // data using it's id
  function deleteTask( taskId ) {
    // to delete a task with a specific id
    // filter out the array of tasks without including the
    // task with the id to be deleted
    var filteredTasks = tasks.filter( function( task ) {
      return ( task.id != taskId )
    } );

    // update tasks data using new "filteredTasks"
    setTasks( filteredTasks )
  }

  // toggleTaskAsDone()
  // used to toggle a specific task in the tasks 
  // data as done/undone using it's id
  function toggleTaskAsDone( taskId ) {
    // create a copy of tasks data
    var copyTasks = [...tasks];

    // find the index of task with the taskId to be marked as
    // done
    var taskIndexInArray = copyTasks.findIndex( function( task ) {
      return ( task.id == taskId )
    })

    // mark task as done in copy of tasks data
    copyTasks[ taskIndexInArray ].done = !copyTasks[ taskIndexInArray ].done;

    // update tasks data using the "copyTasks"
    setTasks( copyTasks );
  }


  return (
    <div className='app'> 

      {/* app title */}
      <CreativelyTitle title='React ToDo App'/>

      {/* todo search input */}
      <input type="text" className="todo-search-input" placeholder="search tasks" value={ searchValue }
        onChange={ ( e ) => { setSearchValue( e.target.value ) } }/>

      {/* todo task list */}

      {/* conditionally render tasks list if there are some created/saved */}
      {/* tasks and the user has not inputted a searchValue */}
      { ( tasks.length != 0 && searchValue == "" ) && <div className="todo-task-list">
        {
          tasks.map( function( task ) {
            return <Task task={ task } deleteTask={ deleteTask } 
              toggleTaskAsDone={ toggleTaskAsDone} key={ task.id } />
          })
        }
      </div> }

      {/* conditionally render a display text if there are no created */}
      {/* / saved tasks */}
      { ( tasks.length == 0 ) && <h2 className='display-text'>
        you haven&apos;t created any tasks yet
      </h2> }

      {/* conditionally render tasks list if there are some created/saved */}
      {/* tasks and the user has inputted a searchValue */}
      { ( tasks.length != 0 && searchValue != "" ) && <div className="todo-task-list">

        {
          // firstly filter out tasks which have objectives that include the
          // searchValue and return it as an array
          tasks.filter( function( task ) {
            return task.objective.includes( searchValue )
          })

          // render out task components based on returned array
          .map( function( task ) {
            return <Task task={ task } deleteTask={ deleteTask } 
              toggleTaskAsDone={ toggleTaskAsDone} key={ task.id } />
          })
        }
      </div> }

      {/* todo add-task button */}
      <button className="todo-add-task-button" onClick={ addTasks }>
        <FaCirclePlus />
        
        <span className="add-task-text">
          Add new task  
        </span>
      </button>

      {/* attribution links */}
      <CreativelyLinks/>
    </div>
  )
}

export default App
