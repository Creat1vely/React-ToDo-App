// custom useLocalStorage hook
// acts as a stateful abstraction combining the power of
// localStorage and useState

// import react hooks
import { useState } from 'react';


function useLocalStorage( id, initialValue ) {

  // create stateful value from localStorage
  const [ item, setItem ] = useState( function() {

    // retrieve data from localStorage
    var localData = localStorage.getItem( id );
    var validData;

    // check if retrieved data is valid
    if ( localData == null ) {
        validData = initialValue; 
    } else {
        validData = JSON.parse(localData)
    }

    return validData
  });


  // updateItem()
  // used to update hook's state and localStorage with a new value
  function updateItem( newData ) {
  
    // check if newValue is a callback
    // reason for this check is to know whether
    // to run the callback first before updating state and localStorage
    if ( typeof newData == "function" ) {
       
      // execute callback and get it's returnValue
      var returnValue = newData( item );

      // update state and localStorage using returnValue
      setItem( returnValue );
      localStorage.setItem( id, JSON.stringify( returnValue ) )

    } else { 

      // update state and localStorage directly using newData
      setItem( newData );
      localStorage.setItem( id, JSON.stringify( newData ) )
    }
  }

  // export hook's interface
  return [ item, updateItem ]
}

export default useLocalStorage
