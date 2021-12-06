import React from "react";

function useLocalStorage(itemName, initialValue) {

  // INITIALIZE REDUCER
  const [ state, dispatch ] = React.useReducer(reducer, initialState( initialValue ));

  const {
    sincronizedItem,
    error,
    loading,
    item,
  } = state;

  // ACTION CREATORS
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });
    
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // INITIALIZE LOCAL STORAGE
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        
        //throw new Error();
        onSuccess(parsedItem);
      } catch(error) {
        onError(error);
      }
    }, 1000)
  },[sincronizedItem])

  // ACTIVE TODOS
  const filteredItem = item.filter(todo => (!todo.deleted)); // Todos not marked as deleted / Actually not working

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      onSave(newItem);
    } catch(error) {
      onError(error);
    }
  }

  const sincronizeItem = () => {
    onSincronize();
  }

  return {
    filteredItem,
    saveItem,
    loading,
    error,
    sincronizedItem,
    sincronizeItem,
  };
  
}

const initialState = (initialValue) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: payload,
  },
  [actionTypes.success]: {
    ...state,
    item: payload,
    error: false,
    loading: false,
    sincronizedItem: true,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };