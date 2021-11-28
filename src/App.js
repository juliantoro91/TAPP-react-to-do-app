// IMPORT SECTION
import './App.css';
import { TodoHeader } from "./components/TodoHeader";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import React from "react";

// CONTENT 
const todos = [
  {
    text: 'Nota de prueba 1',
    completed: true,
  },
  {
    text: 'Nota de prueba 2',
    completed: false,
  },
  {
    text: 'Nota de prueba 3',
    completed: true,
  },
  {
    text: 'Nota de prueba 4',
    completed: false,
  },
  {
    text: 'Nota de prueba 5',
    completed: false,
  },
  {
    text: 'Nota de prueba 6',
    completed: false,
  },
  {
    text: 'Nota de prueba 7',
    completed: false,
  },
];

const TasksState = {
  completedTasks: todos.filter(todo => (todo.completed)).length,
  totalTasks: todos.length,
}

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
  todos.forEach(todo => {
    todo.color = getColor.next().value;
  });
  
  return (
    <>
      <TodoHeader completedTasks={TasksState.completedTasks} totalTasks={TasksState.totalTasks} />
      
      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} color={todo.color}/>
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </>
  );
}

export default App;
