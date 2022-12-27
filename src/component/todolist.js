import React, { useState } from "react";
// import "../App.css";
import './todo.css';


const Todolist = (props) => {
    const [line, setline] = useState(false);
    const cutline = (e) => {
        line ? setline(false) : setline(true);
        const ele = e
        const rank = props.todoList
        const val = rank.indexOf(rank[e])
        const x = rank.splice(val, 1)

        // console.log(rank)
        // console.log(val)
        // console.log(x)
        // console.log(ele)


        // if (!line) {
        //    
        //     console.log(val)
        //     console.log(x)

        // }

    };
    return (
        <>
            <div className="todolist container w-25">
                <li style={{ textDecoration: line ? "line-through" : "none" }}>
                    {props.text}
                </li>
                <input type="checkbox" onClick={() => cutline(props.id)} />
                <button
                    className="closbtn"
                    id="edit"
                    onClick={() => {
                        props.onedit(props.id);
                    }}
                >
                    Edit
                </button>
                <button
                    className="closbtn"
                    id="delete"
                    onClick={() => {
                        props.ondelet(props.id);
                    }}
                >
                    Delete
                </button>
            </div>
        </>
    );
};

export default Todolist;