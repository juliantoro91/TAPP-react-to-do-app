// IMPORT SECTION
import React from "react";
import './App.css';
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { Loader } from "../Loader";
import { LanguageShifter } from "../LanguageShifter";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";

// COMPONENT
function App() {

  const {
    loading,
    error,
    tasksState,
    searchValue,
    setSearchValue,
    matchedSearchLabel,
    searchedTodos,
    todoComplete,
    todoDelete,
    todoAdd,
    openModal,
    setOpenModal,
    language,
    setLanguage,
  } = useTodos();

  return (
    <>
      <TodoHeader
          languageShifter={<LanguageShifter language={language} setLanguage={setLanguage} />}
          todoCounter={<TodoCounter tasksState={tasksState} language={language} />}
      />
      
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} matchedSearchLabel={matchedSearchLabel} language={language} />
      
      <TodoList language={language}>
          {
              (error) ?
                  <p>{(language) ? "We apologize, an error occurred, please reload the app" :  "Lo sentimos, ha ocurrido un error, vuelve a recargar la página"}</p> :
                  (loading) ?
                  <Loader quantity={6} /> :
                  (!searchedTodos.length) ?
                  <p>{(language) ? "Create your first TODO!" : "¡Crea tu primera tarjeta"}</p> :
                  searchedTodos.map(todo => 
                      <TodoItem key={todo.text} text={todo.text} completed={todo.completed} color={todo.color} todoComplete={() => todoComplete(todo.text)} todoDelete={() => todoDelete(todo.text)} />
                      )
          }
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal}/>

      {!!openModal &&
          <Modal>
              <TodoForm todoAdd={todoAdd} setOpenModal={setOpenModal} language={language} />
          </Modal>
      }
    </>
  );
}

export default App;
