import React, {useEffect, useState} from 'react';
import '../../styling/Objective.css';
import Task from "../../components/Task/Task.js"

function Objective(props) {
    const [objective, setObjective] = useState(props.objective);
    useEffect(() => { setObjective(props.objective) }, [props.objective]);
    return (
        <div className="Objective">
            <div className="Title">
                {props.objective.title}
            </div>
            {props.objective.task.map(task =>
                <Task key={task.id} task={task} />)}
        </div>
    );
}

export default Objective;
