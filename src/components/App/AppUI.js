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
import { LanguageShifter } from "../LanguageShifter";

function AppUI() {

    const { error,
        loading,
        searchedTodos,
        todoComplete,
        todoDelete,
        openModal,
        language,
    } = React.useContext(TodoContext);
    
    return (
        <>
            <LanguageShifter />

            <TodoHeader />
            
            <TodoSearch />
            
            <TodoList>
                {
                    (error) ?
                        <p>{(language) ? "We apologize, an error occurred, please reload the app" :  "Lo sentimos, ha ocurrido un error, vuelve a recargar la página"}</p> :
                        (loading) ?
                        <Loader /> :
                        (!searchedTodos.length) ?
                        <p>{(language) ? "Create your first TODO!" : "¡Crea tu primera tarjeta"}</p> :
                        searchedTodos.map(todo => 
                            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} color={todo.color} todoComplete={() => todoComplete(todo.text)} todoDelete={() => todoDelete(todo.text)} />
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