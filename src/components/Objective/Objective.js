import React, {useState} from 'react';
import '../../styling/Objective.css';
import Task from "../../components/Task/Task.js"

function Objective({objective, deleteObjective}) {
    const [tasks, setTasks] = useState(objective.task);

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const addTask = () => {
        const tempTask={
            "id": 5,
            "title": "task12",
            "specific": [{"id":32, "text":"todo 1"},{"id":22, "text":"todo 2"}],
            "measurable": "ad",
            "achievable": "ads",
            "relevant": "asd",
            "status": "asd"
        }
        const newTasks = [...tasks, { tempTask }];
        setTasks(newTasks);
    };
    return (
        <div className="Objective">
            <div className="Title">
                {objective.title}
            </div>
            {objective.task.map((task, index) =>
                <Task removeTask={removeTask} index={index} key={index} task={task} />)}
            <button onClick={() =>addTask(objective.id)}>Add Task</button>
            <button onClick={() =>deleteObjective(objective.id)}>Delete objective</button>
        </div>
    );
}

export default Objective;
