import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [{
//   text: 'Cortar cebolla', completed: false},
// {text: 'Tomar el curso de intro React', completed: true},
//   {text: 'Llorar con la llorona', completed: true},
//   {text: 'La la la la', completed: false
// }]



function App() {
  
  return (
    <TodoProvider>
      <AppUI    />
    </TodoProvider>
  );
}

export default App;
