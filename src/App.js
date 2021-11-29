// IMPORT SECTION
import './App.css';
import { TodoHeader } from "./components/TodoHeader";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import React from "react";

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
    completed: true,
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
    deleted: true,
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

  // STATES
  const [searchValue, setSearchValue] = React.useState('');
  const [allTodos, setTodos] = React.useState(defaultTodos);

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
  
  let matchedSearchLabel = ''; // To update search side label
  (searchedTodos.length < todos.length) ?
      matchedSearchLabel = searchedTodos.length + " coincidencias" :
      matchedSearchLabel = '';

  // COLOR ASIGNER
  todos.forEach(todo => {
    todo.color = getColor.next().value;
  });

  // SIDE FUNCTIONS
  function todoComplete(text) {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    (newTodos[index].completed) ?
        newTodos[index].deleted = true :
        newTodos[index].completed = true ;

    setTodos(newTodos);
  }

  function todoDelete(text) {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    (newTodos[index].completed) ?
        newTodos[index].completed = false :
        newTodos[index].deleted = true ;

    setTodos(newTodos);
  }
  
  // RETURNER
  return (
    <>
      <TodoHeader completedTasks={tasksState.completedTasks} totalTasks={tasksState.totalTasks} />
      
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} matchedSearchLabel={matchedSearchLabel} />
      
      <TodoList>
        {searchedTodos.map(todo => 
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} deleted={todo.deleted} color={todo.color} todoComplete={() => todoComplete(todo.text)} todoDelete={() => todoDelete(todo.text)} />
        )}
      </TodoList>

      <CreateTodoButton />
      
    </>
  );
}

export default App;
