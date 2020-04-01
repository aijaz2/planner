import React from 'react';
import '../../styling/Objective.css';
import Task from "../../components/Task/Task.js"

function Objective(props) {
    return (
        <div className="Objective">
            <div className="Title">
                {props.objective.title}
            </div>
            {props.objective.task.map(task =>
                <Task key={task.id} task={task} />)}
            <button onClick={() =>props.delete(props.objective.id)}>Delete objective!</button>
        </div>
    );
}

export default Objective;
