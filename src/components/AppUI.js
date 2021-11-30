import React from "react";
import '../styles/App.css';
import { TodoHeader } from "./TodoHeader";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function AppUI( {
    loading,
    error,
    tasksState,
    searchValue,
    setSearchValue,
    matchedSearchLabel,
    searchedTodos,
    todoComplete,
    todoDelete,
}) {
    
    return (
        <>
            <TodoHeader completedTasks={tasksState.completedTasks} totalTasks={tasksState.totalTasks} />
            
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} matchedSearchLabel={matchedSearchLabel} />
            
            <TodoList>
                {(error) ?
                    <p>Lo sentimos, ha ocurrido un error, vuelve a recargar la página</p> :
                    (loading) ?
                    <p>Estamos cargando, pronto podrás comenzar</p> :
                    (!searchedTodos.length) ?
                    <p>¡Crea tu primer TODO!</p> :
                    searchedTodos.map(todo => 
                        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} deleted={todo.deleted} color={todo.color} todoComplete={() => todoComplete(todo.text)} todoDelete={() => todoDelete(todo.text)} />
                        )
                }
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export { AppUI };