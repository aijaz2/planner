import React, {useState} from 'react';
import '../../styling/Objective.css';
import Task from "../../components/Task/Task.js"

function Objective({objective, deleteObjective, index, key}) {
    const uuidv4 = require("uuid/v4");
    const [tasks, setTasks] = useState(objective.task);

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const addTask = () => {
        const tempTask={
            "id": uuidv4(),
            "title": "task12",
            "specific": [{"id":32, "text":"todo 1"},{"id":22, "text":"todo 2"}],
            "measurable": "ad",
            "achievable": "ads",
            "relevant": "asd",
            "status": "asd"
        }
        let newTasks = [...tasks,  tempTask ];
        setTasks(newTasks);
    };

    return (
        <div className="Objective">
            <div className="Title">
                {objective.title}<br/>
                id: {objective.id}
            </div>
            {tasks.map((task, index) =>
                <Task removeTask={removeTask} index={index} key={task.id} task={task} />)}
            <button onClick={() =>addTask(index)}>Add Task</button>
            <button onClick={() =>deleteObjective(key)}>Delete objective</button>
        </div>
    );
}

export default Objective;
