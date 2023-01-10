import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState); //abrir y cerrar modal cambiando el estado true false 
  }
  return (
    <button className="CreateTodoButton"
    onClick={onClickButton}
    >+</button>
  );
}

export { CreateTodoButton };