import React, { useState, useEffect } from 'react';
import './App.css';
//import components:
import Form from "./components/Form";
import TodoList from "./components/ToDoList";

function App() {
    //state:
    const [ inputText, setInputText ] = useState("");
    const [ todos, setTodos ] = useState([]);
    const [ status, setStatus ] = useState('all');
    const [ filteredTodos, setFilteredTodos ] = useState([]);

    //run once on app start;
    useEffect(() => {
       getLocalTodos();
    }, []);

    //use effect:
    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    //functions
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    //save to local storage(add)
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    };

    return (
        <div className="App">
            <header>
               <h1>My TODO List</h1>
            </header>
            <Form
               inputText={inputText}
               setInputText={setInputText}
               todos={todos}
               setTodos={setTodos}
               setStatus={setStatus}
            />
            <TodoList
               todos={todos}
               setTodos={setTodos}
               filteredTodos={filteredTodos}
            />
        </div>
   );
}

export default App;
