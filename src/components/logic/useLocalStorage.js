import React from "react";

// CONTENT For Testing
import { defaultTodosForTesting } from "./defaultTodosForTesting";
let enableTesting = false;

function useLocalStorage(itemName, initialValue) {
    // INITIALIZE LOCAL STORAGE
    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItem;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    if (enableTesting) {
        parsedItem = defaultTodosForTesting();
        enableTesting = false;
    }
  
    // STATE
    const [allItem, setItem] = React.useState(parsedItem);
  
    // ACTIVE TODOS
    const item = allItem.filter(todo => (!todo.deleted)); // Todos not marked as deleted
  
    const saveItem = (newItem) => {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    }
  
    return [item, saveItem];
  
  }

  export { useLocalStorage };