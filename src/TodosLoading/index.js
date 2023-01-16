import React from "react";
import './TodosLoading.css';

function TodosLoading(){
    return (
        <div className="Loading">
    <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando, por favor espere...</p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div>
    <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando, por favor espere...</p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div>
    <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando, por favor espere...</p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div>
    <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando, por favor espere...</p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div>
    <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando, por favor espere...</p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div>
    </div>   
    );
}

export {TodosLoading};