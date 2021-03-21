import { useState } from 'react';

let CustomLink = (props) => {
    return (
        <div>
            <a href={props.href}  target={props.target} rel='noreferrer'>{props.text}</a>
            <button onClick={props.handleClick}>{props.status}</button>
        </div>
    );
}

let App = () => {
    let sample = [
        {
            id: 1,
            href: 'https://www.google.com',
            text: 'Google',
            target: "_blank",
            status: "Disable"
        },
        {
            id: 2,
            href: 'https://www.youtube.com',
            text: 'Youtube',
            target: "_blank",
            status: "Disable"
        },
        {
            id: 3,
            href: 'https://www.channelstv.com',
            text: 'Channels TV',
            target: "_blank",
            status: "Disable"
        }
    ]

    let [link, setLink] = useState(sample);

    let disabler = (id) => {

        let newSample = link.map((item)=>{
            if (item.id === id) {
                if (item.href === "#") {
                    let chosenLink = sample.find(item => item.id === id);
                    let enableItem = {
                        ...item,
                        href: chosenLink.href,
                        target: chosenLink.target,
                        status: chosenLink.status
                    }
                    return enableItem;                    
                } else {
                    let disableItem = {
                        ...item,
                        href: "#",
                        target: "",
                        status: "Enable"
                    }
                return disableItem;
                }
            }
            return item;
        });

        setLink(newSample);
    }

    let output = link.map(item => {
        return (
            <CustomLink
                key={item.id}
                href={item.href}
                text={item.text}
                target={item.target}
                status={item.status}
                handleClick={() => disabler(item.id)}
            />
        );
    });

    return (
        <div>
            {output}
        </div>
    );
}
let AddTodo = (props) => {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        props.add({title, description});
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
        <p>New Todo</p>
            <input
                name="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <input
                name="description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button type="submit">Add</button>
        </form>
    );
}

let EditTodo = (props) => {
    let [id, setId] = useState("");
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        props.edit({id, title, description});
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
        <p>Edit Todo</p>
            <input
                name="id"
                type="text"
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter Id"
                value={id}
            />
            <input
                name="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                value={title}
            />
            <input
                name="description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                value={description}
            />
            <button type="submit">Edit</button>
        </form>
    );
}

let Todo = (props) => {
    return (<div>
        <h3>{props.title}: <span>{props.description}</span> <button onClick={props.changeStatus}>{props.status}</button><button onClick={props.removeTodo}>Remove</button></h3>
    </div>);
}

let TodoList = () => {
    let todos = [
        {
            id: 1,
            title: "Title 1",
            description: "Description 1",
            status: "Pending"
        },
        {
            id: 2,
            title: "Title 2",
            description: "Description 2",
            status: "Pending"
        },
        {
            id: 3,
            title: "Title 3",
            description: "Description 3",
            status: "Pending"
        },
    ];

    let [todoItems, updateTodos] = useState(todos);
    let changeStatus = (id) => {
        let newTodoItems = todoItems.map(todoItem => {
            if (todoItem.id === id) {
                if (todoItem.status === "Pending") {
                    let changedItem = {
                        ...todoItem,
                        status: "Completed"
                    }
                    return changedItem;
                } else {
                    let changedItem = {
                        ...todoItem,
                        status: "Pending"
                    }
                    return changedItem;
                }
            }
            return todoItem;
        });

        updateTodos(newTodoItems);
    }
    let removeTodo = (id) => {
        let newTodoItems = todoItems.filter(todoItem => todoItem.id !== id);

        updateTodos(newTodoItems);
    }

    let addNewTodo = (todo) => {
        let updateTodo = {
            ...todo,
            id: todoItems.length + 1,
            status: "Pending"
        }
        let newTodoItems = [
            ...todoItems, updateTodo
        ];
        updateTodos(newTodoItems);
    }

    let editTodo = (todoEdit) => {
        let editedTodos = todoItems.map((todo) => {
            if (Number(todoEdit.id) === todo.id) {
                let newTodo = {
                    ...todoEdit,
                    id: Number(todoEdit.id),
                    status: "Pending"
                }
                return newTodo;
                // console.log(todo);
            }
            return todo;
        });

        console.log(editedTodos);
        updateTodos(editedTodos);
        // alert(`This is a todo from main: ${todoItems[0].title} and this is from edit todos: ${todoEdit.title}`);
    }

    let renderTodos = todoItems.map(todo => {
        return <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            changeStatus={() => {changeStatus(todo.id)}}
            status={todo.status}
            removeTodo={() => {removeTodo(todo.id)}}
        />
    });

    return (
        <div>
            <h1>TodoList Exercise</h1>
            <AddTodo add={addNewTodo}/>
            {renderTodos}
            <EditTodo edit={editTodo}/>
        </div>
    );
}

export default TodoList;