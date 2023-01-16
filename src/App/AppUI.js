import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodosError } from "../TodoError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
  const { 
    error,
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
  openModal,
setOpenModal, } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

     
          <TodoList>
            {/* Mostramos un mensaje en caso de que ocurra algún error */}
            {error && <TodosError error={error}/>}
            {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
            {loading && <TodosLoading />}
            {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
            {!loading && !searchedTodos.length && <EmptyTodos />}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

              {!!openModal && (
                <Modal>
                <TodoForm />
              </Modal>
              )}
      <CreateTodoButton 
      setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
