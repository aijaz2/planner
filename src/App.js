import React, {useState} from 'react';
import './App.css';
import Objective from "./components/Objective/Objective.js";
import data from "./data";

function App() {
    const uuidv4 = require("uuid/v4")

    const [objectives, setObjectives] = useState(data);

    const addObjective = () => {
        const newObjective = {
            "title": "Objective ",
            "id": uuidv4(),
            "task": [{
                "id": uuidv4(),
                "title": "task1",
                "specific": [],
                "measurable": "",
                "achievable": "",
                "relevant": "",
                "status": ""
            }, {
                "id": uuidv4(),
                "title": "task2",
                "specific": [],
                "measurable": "",
                "achievable": "",
                "relevant": "",
                "status": ""
            }]
        }
        let old = [...objectives, newObjective];
        setObjectives(old);
    };

    const deleteObjective = index => {
        const newObjectives = [...objectives];
        newObjectives.splice(index, 1);
        setObjectives(newObjectives);
    };

    return (
        <div>
            <div className="content">
                {objectives.map((objective, index) => {
                    return (
                        <div>
                            <Objective deleteObjective={deleteObjective} index={index} key={objective.id} objective={objective}/>
                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={addObjective}>Add objective!</button>
            </div>
        </div>
    )
}

export default App;