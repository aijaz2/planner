import React, {useState} from 'react';
import '../../styling/Task.css';
import Specific from "./Specific";
import SpecificForm from "./SpecificForm";
function Task({task, removeTask, index}) {

    const [specifics, setSpecifics] = useState(task.specific);
    const addTodo = text => {
        const newSpecifics = [...specifics, { text }];
        setSpecifics(newSpecifics);
    };

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

    return (
        <div className="Task">
            <div className="TaskTitle">
                {task.title}
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
                    <SpecificForm addTodo={addTodo} />
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
            <button className="ButtonRed" onClick={() => removeTask(index)}>Delete task</button>
        </div>
    );
}

export default Task;
