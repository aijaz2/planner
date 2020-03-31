import React, {useState, useEffect} from 'react';
import './App.css';
import Objective from "./components/Card/Objective.js";


function App() {
    const newObj = {
        "title": "Objective 3",
        "id": "3",
        "task": [{
            "id": "3",
            "title": "task1",
            "specific": "sasdad",
            "measurable": "ad",
            "achievable": "ads",
            "relevant": "asd",
            "status": "asd"
        }, {
            "id": "4",
            "title": "task2",
            "specific": "sasdad",
            "measurable": "ad",
            "achievable": "ads",
            "relevant": "asd",
            "status": "asd"
        }]
    }

    const [state, setState] = useState({
        "objective": [
            {
                "title": "Objective 1",
                "id": "1",
                "task": [
                    {
                        "id": "3",
                        "title": "task1",
                        "specific": "sasdad",
                        "measurable": "ad",
                        "achievable": "ads",
                        "relevant": "asd",
                        "status": "asd"
                    },
                    {
                        "id": "4",
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
                "title": "Objective 2",
                "id": "2",
                "task": [
                    {
                        "id": "5",
                        "title": "task12",
                        "specific": "sasdad",
                        "measurable": "ad",
                        "achievable": "ads",
                        "relevant": "asd",
                        "status": "asd"
                    },
                    {
                        "id": "6",
                        "title": "task22",
                        "specific": "sasdad",
                        "measurable": "ad",
                        "achievable": "ads",
                        "relevant": "asd",
                        "status": "asd"
                    }
                ]
            }
        ]
    })

    const handleClick = () => {
        let old = [...state.objective];
        old.objective=[...state.objective, newObj];
        setState(old);
    };

    return (
        <div>
            <div className="content">
                {state.objective.map((objective, index) => {
                    return (<Objective key={objective.id} objective={objective}/>)
                })}
            </div>
            {console.log(JSON.stringify(state))}
            <div>
                <button onClick={handleClick}>Add objective!</button>
            </div>
        </div>
    )
}

export default App;