import React, {useState} from 'react';
import './App.css';
import Objective from "./components/Card/Objective.js";


function App() {
    const [objectives, setObjectives] = useState([
            {
                "title": "Objective 0",
                "id": 0,
                "task": [
                    {
                        "id": 3,
                        "title": "task1",
                        "specific": "sasdad",
                        "measurable": "ad",
                        "achievable": "ads",
                        "relevant": "asd",
                        "status": "asd"
                    },
                    {
                        "id": 4,
                        "title": "task2",
                        "specific": "sasdad",
                        "measurable": "ad",
                        "achievable": "ads",
                        "relevant": "asd",
                        "status": "asd"
                    }
                ]
            },
            {
                "title": "Objective 1",
                "id": 1,
                "task": [
                    {
                        "id": 5,
                        "title": "task12",
                        "specific": "sasdad",
                        "measurable": "ad",
                        "achievable": "ads",
                        "relevant": "asd",
                        "status": "asd"
                    },
                    {
                        "id": 6,
                        "title": "task22",
                        "specific": "sasdad",
                        "measurable": "ad",
                        "achievable": "ads",
                        "relevant": "asd",
                        "status": "asd"
                    }
                ]
            }]

    )

    const addObjective = () => {
        const newObjective = {
            "title": "Objective "+Object.keys(objectives).length,
            "id": Object.keys(objectives).length+1,
            "task": [{
                "id": 5,
                "title": "task1",
                "specific": "sasdad",
                "measurable": "ad",
                "achievable": "ads",
                "relevant": "asd",
                "status": "asd"
            }, {
                "id": 4,
                "title": "task2",
                "specific": "sasdad",
                "measurable": "ad",
                "achievable": "ads",
                "relevant": "asd",
                "status": "asd"
            }]
        }
        let old = [...objectives, newObjective];
        setObjectives(old);
    };

    const deleteObjective = (id) => {
        let old  = objectives.filter(objective => objective.id !== id);
        setObjectives(old);
    };

    return (
        <div>
            <div className="content">
                {objectives.map((objective, index) => {
                    return (
                        <div>
                            <Objective delete={deleteObjective} key={index} objective={objective}/>
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