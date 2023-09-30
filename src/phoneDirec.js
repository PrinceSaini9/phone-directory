import React, { useState, useEffect } from "react";
import Subs from "./subs";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function PhoneDirec() {

    const [state, setState] = useState([]);

    async function loadData() {
        let load = await fetch("http://localhost:7081/contacts/");
        let data = await load.json();
        setState(data);
    }
    useEffect(() => {
        loadData();
    }, []);

    async function onDelete(subId) {
        // let sublist = state;
        // let newSubs = sublist.filter((sub) => sub.id !== subId);
        // setState([...newSubs]);
        await fetch("http://localhost:7081/contacts/" + subId, { method: "DELETE" });
        //let data = await res.json();
        loadData();


    }

    async function addSubsHandler(newSub) {
        // let sublist = state;

        // newSub.id = sublist.length + 1;
        // state.push(newSub);
        // setState(state);
         await fetch("http://localhost:7081/contacts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newSub)
        });
        //let data = await res.json();
        loadData();
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