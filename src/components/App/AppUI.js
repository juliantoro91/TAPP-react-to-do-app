import React from "react";
import './App.css';
import { TodoContext } from "../TodoContext";
import { TodoHeader } from "../TodoHeader";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { Loader } from "../Loader";

function AppUI() {

    const { error,
        loading,
        searchedTodos,
        todoComplete,
        todoDelete,
        openModal
    } = React.useContext(TodoContext);
    
    return (
        <>
            <TodoHeader />
            
            <TodoSearch />
            
            <TodoList>
                {
                    (error) ?
                        <p>Lo sentimos, ha ocurrido un error, vuelve a recargar la página</p> :
                        (loading) ?
                        <Loader /> :
                        (!searchedTodos.length) ?
                        <p>¡Crea tu primer TODO!</p> :
                        searchedTodos.map(todo => 
                            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} deleted={todo.deleted} color={todo.color} todoComplete={() => todoComplete(todo.text)} todoDelete={() => todoDelete(todo.text)} />
                            )
                }
            </TodoList>

            <CreateTodoButton />

            {!!openModal &&
                <Modal>
                    <p>{searchedTodos[0]?.text}</p>
                </Modal>
            }
        </>
    );
}

export { AppUI };