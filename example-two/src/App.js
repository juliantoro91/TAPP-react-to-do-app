// import './App.css';
import { TodoHeader } from "./components/TodoHeader";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

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

const testTask = {
  completedTasks: 1,
  totalTasks: 3,
}

function App() {
  return (
    <>
      <TodoHeader completedTasks={testTask.completedTasks} totalTasks={testTask.totalTasks} />
      
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
