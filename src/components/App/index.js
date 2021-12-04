// IMPORT SECTION
import React from "react";
import './App.css';
import { useLanguage } from "./useLanguage";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { LanguageShifter } from "../LanguageShifter";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { EmptySearch } from "../EmptySearch";
import { languageSupportContent } from "../../content/languageSupportContent";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

// COMPONENT
function App() {

  const {
    loading,
    error,
    tasksState,
    searchValue,
    setSearchValue,
    matchedSearchLabel,
    totalTodos,
    searchedTodos,
    todoComplete,
    todoDelete,
    todoAdd,
    openModal,
    setOpenModal,
    modalType,
    setModalType,
    sincronizedTodos,
    sincronizeTodos,
  } = useTodos();

  const {
    actualLanguage,
    saveLanguage
  } = useLanguage();

  //const language = 'English';

  const languageSupport = languageSupportContent[actualLanguage];

  return (
    <>
      <TodoHeader
        loading={loading}
        languageSupport={languageSupport}
        languageShifter={
          <LanguageShifter
            saveLanguage={saveLanguage} />}
        todoCounter={
          <TodoCounter
            tasksState={tasksState}
          />}
      />
      
      <TodoSearch
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        matchedSearchLabel={matchedSearchLabel} 
        loading={loading}
        languageSupport={languageSupport} />
      
      <TodoList
        languageSupport={languageSupport}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={error => <TodosError error={error} language={languageSupport} />}
        onLoading={() => <TodosLoading languageSupport={languageSupport} />}
        onEmptyTodos={() => <EmptyTodos languageSupport={languageSupport} />}
        onEmptySearchResults={(searchText) => <EmptySearch searchText={searchText} languageSupport={languageSupport} />}
        render={todo => (
            (sincronizedTodos) ?
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed} 
                color={todo.color} 
                todoComplete={() => todoComplete(todo.text)} 
                todoDelete={() => todoDelete(todo.text)}
              />
              : null
          )
        }
      >
        {
          todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              color={todo.color} 
              todoComplete={() => todoComplete(todo.text)} 
              todoDelete={() => todoDelete(todo.text)}
            />
            )
        }
      </TodoList>

      {/*<TodoList language={language}>
         {
           (error) ?
             <p>{(language) ? "We apologize, an error occurred, please reload the app" :  "Lo sentimos, ha ocurrido un error, vuelve a recargar la página"}</p> :
           (loading) ?
             <Loader quantity={6} /> :
           (!searchedTodos.length) ?
             <p>{(language) ? "Create your first TODO!" : "¡Crea tu primera tarjeta"}</p> :
           searchedTodos.map(todo => 
             <TodoItem 
               key={todo.text} 
               text={todo.text} 
               completed={todo.completed} 
               color={todo.color} 
               todoComplete={() => todoComplete(todo.text)} 
               todoDelete={() => todoDelete(todo.text)} 
             />
           )
         }
       </TodoList> */}

      <CreateTodoButton setOpenModal={setOpenModal} setModalType={setModalType} />

      {!!openModal && modalType === 'create' &&
        <Modal>
            <TodoForm 
              todoAdd={todoAdd} 
              setOpenModal={setOpenModal} 
              languageSupport={languageSupport} 
            />
        </Modal>
      }

      <ChangeAlertWithStorageListener
        languageSupport={languageSupport}
        setOpenModal={setOpenModal}
        setModalType={setModalType}
        sincronize={sincronizeTodos}
      />
    </>
  );
}

export default App;
