// IMPORT SECTION
import React from "react";
import { AppUI } from "./AppUI";

// CONTENT 
const defaultTodos = [
  {
    text: 'There was no telling what thoughts would come from the machine',
    completed: false,
    deleted: false,
  },
  {
    text: 'The Tsunami wave crashed against the raised houses and broke the pilings as if they were toothpicks',
    completed: false,
    deleted: false,
  },
  {
    text: 'As the years pass by, we all know owners look more and more like their dogs',
    completed: false,
    deleted: false,
  },
  {
    text: 'The old rusted farm equipment surrounded the house predicting its demise',
    completed: false,
    deleted: false,
  },
  {
    text: 'I may struggle with geography, but Im sure Im somewhere around here',
    completed: false,
    deleted: false,
  },
  {
    text: 'Although it wasnt a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow',
    completed: false,
    deleted: false,
  },
  {
    text: 'The old apple revels in its authority',
    completed: false,
    deleted: false,
  },
];

const colors = [
  "--emphasis1",
  "--emphasis2",
  "--emphasis3",
  "--emphasis4",
  "--emphasis5",
  "--emphasis6",
]

function* GetColor() {
  let id = 0;
  while(true) {
    yield colors[id];
    id++;
    if (id >= colors.length) {
        id = 0;
    }
  }
}

const getColor = GetColor();

// COMPONENT
function App() {

  // INITIALIZE LOCAL STORAGE
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

  // STATES
  const [searchValue, setSearchValue] = React.useState('');
  const [allTodos, setTodos] = React.useState(parsedTodos);

  // ACTIVE TODOS
  const todos = allTodos.filter(todo => (!todo.deleted)); // Todos not marked as deleted

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
  todos.forEach(todo => {
    todo.color = getColor.next().value;
  });

  // SIDE FUNCTIONS
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

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
