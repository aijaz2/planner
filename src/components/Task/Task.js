import React, {useState} from 'react';
import '../../styling/Task.css';
import Specific from "./Specific";

function Task({task, removeTask, key}) {

    const [specifics, setSpecifics] = useState(task.specific);
    const [todo, setTodo] = useState("");

    const completeTodo = index => {
        const newSpecifics = [...specifics];
        newSpecifics[index].isCompleted = !newSpecifics[index].isCompleted;
        setSpecifics(newSpecifics);
    };

    const removeTodo = index => {
        const newSpecifics = [...specifics];
        newSpecifics.splice(index, 1);
        setSpecifics(newSpecifics);
    };

    const addTodo = text => {
        const newSpecifics = [...specifics, { text }];
        setSpecifics(newSpecifics);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!todo) return;
        addTodo(todo);
        setTodo("");
    };

    return (
        <div className="Task">
            <div className="TaskTitle">
                {task.title} <br/>
                id: {task.id}
            </div>
            <div className="Specific">
                Specific:
                <div className="todo-list">
                    {specifics.map((specific, index) => (
                        <Specific
                            key={index}
                            index={index}
                            todo={specific}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                        />
                    ))}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="input"
                            value={todo}
                            onChange={e => setTodo(e.target.value)}
                        />
                    </form>
                </div>
            </div>
            <div className="Specific">
                Measurable: {task.measurable}
            </div>
            <div className="Specific">
                Achievable: {task.achievable}
            </div>
            <div className="Specific">
                Relevant: {task.relevant}
            </div>
            <div className="Specific">
                Status: {task.status}
            </div>
            <button className="ButtonRed" onClick={() => removeTask(key)}>Delete task</button>
        </div>
    );
}

export default Task;
