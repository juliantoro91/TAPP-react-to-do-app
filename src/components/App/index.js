// IMPORT SECTION
import React from "react";
import { AppUI } from './AppUI'
import { TodoProvider } from "../TodoContext";

// COMPONENT
function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
  
}

export default App;
