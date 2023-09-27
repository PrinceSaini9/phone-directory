import React, { useState } from "react";
import Subs from "./subs";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function PhoneDirec() {

    const [state, setState] = useState([
        {
            id: 1,
            name: "Prince",
            phone: "9876454"
        }
    ]
    );

    function onDelete(subId) {
        let sublist = state;
        let newSubs = sublist.filter((sub) => sub.id !== subId);
        setState([...newSubs]);
    }

    function addSubsHandler(newSub) {
        let sublist = state;

        newSub.id = sublist.length + 1;
        state.push(newSub);
        setState(state);
    };

    const navigate = useNavigate();

    return (

        <div>
            <Routes>
                <Route exact path="/" element={<App onDelete={onDelete} sub={state} />} />
                <Route exact path="/add" element={<Subs navigate={navigate} addSubsHandler={addSubsHandler} />} />
            </Routes>
        </div>
    )
}

export default PhoneDirec;