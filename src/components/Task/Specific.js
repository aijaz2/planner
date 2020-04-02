import React from "react";
import '../../styling/Task.css';

function Specific({ todo, index, completeTodo, removeTodo }) {

    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}

            <div>
                <button className="ButtonGreen" onClick={() => completeTodo(index)}>&#x2713;</button>
                <button className="ButtonRed" onClick={() => removeTodo(index)}>&#x2717;</button>
            </div>
        </div>
    );
}
export default Specific;