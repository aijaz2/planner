import React, {useState} from 'react';
import './App.css';
import Objective from "./components/Objective/Objective.js";
import data from "./data";

function App() {
    const uuidv4 = require("uuid/v4")

    const [objectives, setObjectives] = useState([]);

    const addObjective = () => {
        const newObjective = {
            "title": "Objective ",
            "id": uuidv4(),
            "task": []
        }
        let old = [...objectives, newObjective];
        setObjectives(old);
    };

    const deleteObjective = id => {
        let newObjectives= [...objectives];
        newObjectives=newObjectives.filter(objective => objective.id !== id);
        setObjectives(newObjectives);
    };
    return (
        <div>
            <button onClick={addObjective}>Add objective!</button>
            <div className="content">
                {objectives.map((objective, index) => {
                    return (
                        <div>
                            <Objective deleteObjective={deleteObjective} index={index} key={objective.id} objective={objective} task={objective.task}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App;