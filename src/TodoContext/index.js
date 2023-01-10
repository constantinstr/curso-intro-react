import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState(''); // valor searchValue y funcion de actualizacion de searchvalue
      const [openModal, setOpenModal] = React.useState(false);
      // filtra nuestros todos filtrando cuales tienen la propiedad completed como true !!todo.completed
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      
      const totalTodos = todos.length;
    
      // filtrar todos nuestros todos para que aparezcan o no dependiendo lo que escribes en search
      let searchedTodos = [];
      if (!searchValue.length >= 1){
        searchedTodos = todos;
      }else{
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText); // busca el texto escrito en cualquier parte del texto
        });
    
      }
     
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };


      // cada vez que reciba un texto va buscar cual de todos los todos cumple con esa condicion,
      // marca al todo que cumple con la condicion de tener el mismo texto, la propiedad completed = true
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true,
        // };
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos); // actualizar el array de todos, con el nuevo bloque quitando la tajada que marcamos con x
      
      };
    
      // console.log('render antes de use effect');
      React.useEffect(() => {
        console.log('use effect');
      }, [totalTodos]);
    
      // console.log('render despues de use effect');
    return (
<TodoContext.Provider value={{
//envio de parametros
loading,
error,
totalTodos,
completedTodos,
searchValue,
setSearchValue,
searchedTodos,
addTodo,
completeTodo,
deleteTodo,
openModal,
setOpenModal,
}}>

    {props.children}
</TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};