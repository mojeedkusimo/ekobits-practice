import React, { useState, useEffect, useRef } from 'react';
import './style.css';

let TodoList = () => {
    let todos = [
        {
            id: 1,
            title: 'Wake up',
            status: 'Done'
        },
        {
            id: 2,
            title: 'Seek forgiveness',
            status: 'Pending'
        },
        {
            id: 3,
            title: 'Bath',
            status: 'Pending'
        }
    ];

    let displayTodos = todos.map((todo) => {
        return (
            <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                status={todo.status}
            />
        );
    });

    return (
        <div>
            <h1>Todo List</h1>
            {displayTodos}
        </div>
    );
}

let Todo = props => {
    return (
        <div>
            <span>{props.id}</span>
            <span className='todo'>{props.title}</span>
            <span className={props.status === 'Done'? 'todo-done' : 'todo-pending'}>{props.status}</span>
        </div>
    )
}

export default TodoList;