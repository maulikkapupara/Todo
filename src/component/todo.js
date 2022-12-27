import React, { useState } from "react";
import Todolist from "./todolist";
import './todo.css';
const Todo = () => {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const itemevent = (event) => {
        setTask(event.target.value);
    };
    const listitm = (e) => {
        e.preventDefault();
        if (!task) {
            alert("plzz enter");
        } else if (task && isEdit) {
            todoList.map((element, id) => {
                if (id === editId) {
                    todoList.splice(editId, 1, task);
                    // todoList.splice
                    // console.log(todoList);
                    // console.log(task);
                    setTodoList([...todoList]);
                }
                setIsEdit(false);
                return (setTodoList([...todoList]))
                // return element;
            });
        } else {
            setTodoList((oldtodoList) => {
                // console.log("adding");
                return [...oldtodoList, task];
            });
        }
        setTask("");
    };
    const deleteitem = (id) => {
        const confirmAll = window.confirm("Do you want to delete this task ?");
        if (confirmAll) {
            setTodoList((oldtodoList) => {
                return oldtodoList.filter((arrelement, index) => {
                    return index !== id;
                });
            });
        }
    };
    const edititem = (e) => {
        // console.log(e);
        let edt = todoList.find((elm, id) => {
            // console.log(id)
            return id === e;
        });
        setTask(edt);
        setIsEdit(true);
        setEditId(e);
        // console.log(edt);
        // console.log(isEdit)
    };
    const removeAll = () => {
        const confirmAll = window.confirm("Do you want to delete All task ?");
        if (confirmAll) {
            setTodoList([]);
        }
    };
    return (
        <>
            <h1 className="App">To-Do App</h1>
            <form onSubmit={listitm}>
                <input
                    type="text"
                    value={task}
                    placeholder="Add your task"
                    onChange={itemevent}
                />
                {isEdit ? (
                    <button className="addu" type="submit">Update Task</button>
                ) : (
                    <button className="addu" type="submit">ADD Task</button>
                )}
            </form>
            <ol className="mt-4 ">
                {todoList.map((itemval, index) => {
                    return (
                        <Todolist
                            key={index}
                            id={index}
                            text={itemval}
                            ondelet={deleteitem}
                            onedit={edititem}
                            todoList={todoList}
                        />
                    );
                })}
            </ol>
            <button className="remove" onClick={removeAll}>Remove all</button>
        </>
    );
};
export default Todo;