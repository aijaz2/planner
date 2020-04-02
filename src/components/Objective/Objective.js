import React, {useState} from 'react';
import '../../styling/Objective.css';
import Task from "../../components/Task/Task.js"

function Objective({objective, deleteObjective}) {
    const uuidv4 = require("uuid/v4");
    const [tasks, setTasks] = useState(objective.task);

    const deleteTask = id => {
        let newTasks= [...tasks];
        newTasks=newTasks.filter(task => task.id !== id);
        setTasks(newTasks);
    };

    const addTask = () => {
        const tempTask={
            "id": uuidv4(),
            "title": "The title",
            "specific": [],
            "measurable": "some text...",
            "achievable": "some text...",
            "relevant": "some text...",
            "status": "some text..."
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
                <Task deleteTask={deleteTask} index={index} key={task.id} task={task} />)}
            <button onClick={addTask}>Add Task</button>
            <button onClick={() =>deleteObjective(objective.id)}>Delete objective</button>
        </div>
    );
}

export default Objective;
