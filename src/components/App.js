// IMPORT SECTION
import React from "react";
import { AppUI } from "./AppUI";
import { alternateColorGenerator } from "./logic/alternateColorGenerator";
import { useLocalStorage } from "./logic/useLocalStorage";

// COMPONENT
function App() {

  // STATES
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
   } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  // TODOS COUNTERS
  const tasksState = {
    completedTasks: todos.filter(todo => (todo.completed)).length,
    totalTasks: todos.length,
  }

  // SEARCH FILTER LOGIC
  const searchedTodos = todos.filter(
    todo => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))); // To filter todos by search criteria
  
  let matchedSearchLabel = searchedTodos.length + " coincidences"; // To update search side label

  // COLOR ASIGNER
  const getColor = alternateColorGenerator();
  todos.forEach(todo => {
    todo.color = getColor.next().value;
  });

  // SIDE FUNCTIONS
  const todoComplete = (text) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    (newTodos[index].completed) ?
        newTodos[index].deleted = true :
        newTodos[index].completed = true ;

    saveTodos(newTodos);
  }

  const todoDelete = (text) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    (newTodos[index].completed) ?
        newTodos[index].completed = false :
        newTodos[index].deleted = true ;

    saveTodos(newTodos);
  }
  
  // RETURNER
  return (
    <AppUI 
      loading={loading}
      error={error}
      tasksState={tasksState}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      matchedSearchLabel={matchedSearchLabel}
      searchedTodos={searchedTodos}
      todoComplete={todoComplete}
      todoDelete={todoDelete}
    />
  );
}

export default App;
