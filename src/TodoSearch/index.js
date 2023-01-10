import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  //const [searchValue, setSearchValue] = React.useState('');
  // creamos un estado useState que por defecto es vacio, que estamos guardando en la variable searchvalue, ademas tenemos una funcion setsearchvalue para actualizar dicho valor

  // cada vez que escribe o borra texto en el formulario, esta funcion actualiza los cambios
  const onSearchValueChange = (event) => {
  console.log(event.target.value);
  setSearchValue(event.target.value); //asigna el valor que se escribe a la funcion search value
};

  return [
    <input 
    className="TodoSearch"
    placeholder="Cebolla" 
    value={searchValue} //asigna el valor de nuestro input igual al de nuestro estado
    onChange={onSearchValueChange}
    />
    //,     <p>{searchValue}</p> // tambien lo mostramos al valor en nuestro parrafo
  ];
}

export { TodoSearch };