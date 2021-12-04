import React from "react";

function useLocalStorage(itemName, initialValue) {

  // STATE
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [allItem, setItem] = React.useState(initialValue);
    
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
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 3000)
  },[])

  // ACTIVE TODOS
  const item = allItem.filter(todo => (!todo.deleted)); // Todos not marked as deleted / Actually not working

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  }
  
  return {
    item,
    saveItem,
    loading,
    error,
  };
  
}

export { useLocalStorage };