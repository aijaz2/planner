import React from 'react';
import '../../styling/Task.css';

function Task(props) {
    return (
        <div className="Task">
            <div className="TaskTitle">
                {props.task.title}
            </div>
            <div className="Specific">
                Specific: {props.task.specific}
            </div>
            <div className="Measurable">
                Measurable: {props.task.measurable}
            </div>
            <div className="Achievable">
                Achievable: {props.task.achievable}
            </div>
            <div className="Relevant">
                Relevant: {props.task.relevant}
            </div>
            <div className="Status">
                Status: {props.task.status}
            </div>
        </div>
    );
}

export default Task;
