// IMPORT SECTION
import React from "react";
import './App.css';
import { useLanguage } from "../LanguageContext";
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
    language,
    setLanguage
  } = useTodos();

  // const {
  //   language,
  //   saveLanguage
  // } = useLanguage();

  return (
    <>
      <TodoHeader
          languageShifter={<LanguageShifter language={language} saveLanguage={setLanguage} />}
          todoCounter={<TodoCounter tasksState={tasksState} language={language} />}
      />
      
      <TodoSearch
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        matchedSearchLabel={matchedSearchLabel} 
        loading={loading}
        language={language} />
      
      <TodoList
        language={language}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={error => <TodosError error={error} language={language} />}
        onLoading={() => <TodosLoading language={language} />}
        onEmptyTodos={() => <EmptyTodos language={language} />}
        onEmptySearchResults={(searchText) => <EmptySearch searchText={searchText} language={language} />}
        render={todo => (
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
