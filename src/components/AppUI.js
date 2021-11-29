import React from "react";
import '../styles/App.css';
import { TodoHeader } from "./TodoHeader";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function AppUI( {
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
                {searchedTodos.map(todo => 
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} deleted={todo.deleted} color={todo.color} todoComplete={() => todoComplete(todo.text)} todoDelete={() => todoDelete(todo.text)} />
                )}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export { AppUI };