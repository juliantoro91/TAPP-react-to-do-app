// import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  {
    text: 'Nota de prueba 1',
    completed: false
  },
  {
    text: 'Nota de prueba 2',
    completed: false
  },
  {
    text: 'Nota de prueba 3',
    completed: false
  },
];

function App() {
  return (
    <>
      <TodoCounter />
      
      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
      
    </>
  );
}

export default App;
