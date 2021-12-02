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
          languageShifter={<LanguageShifter languageSupport={languageSupport.LanguageShifter} saveLanguage={saveLanguage} />}
          todoCounter={<TodoCounter tasksState={tasksState} languageSupport={languageSupport.TodoCounter} />}
      />
      
      <TodoSearch
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        matchedSearchLabel={matchedSearchLabel} 
        loading={loading}
        languageSupport={languageSupport.TodoSearch} />
      
      <TodoList
        languageSupport={languageSupport.TodoList}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={error => <TodosError error={error} language={languageSupport.TodosError} />}
        onLoading={() => <TodosLoading languageSupport={languageSupport.TodosLoading} />}
        onEmptyTodos={() => <EmptyTodos languageSupport={languageSupport.EmptyTodos} />}
        onEmptySearchResults={(searchText) => <EmptySearch searchText={searchText} languageSupport={languageSupport.EmptySearch} />}
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
              <TodoForm todoAdd={todoAdd} setOpenModal={setOpenModal} languageSupport={languageSupport.TodoForm} />
          </Modal>
      }
    </>
  );
}

export default App;
