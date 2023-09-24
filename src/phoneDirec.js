import React, { useState } from "react";
import Subs from "./subs";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function PhoneDirec() {

    const [state, setState] = useState({
        sublist: [
            {
                id: 1,
                name: "Prince",
                phone: "9876454"
            }
        ]
    });

    function onDelete(subId){
        let sublist = state.sublist;
        let i = 0;
        sublist.forEach((sub,index)=>{
            if(sub.id===subId)
            i=index;
        });
        let newSubs = sublist;
        newSubs.splice(i,1);
        setState({sublist:newSubs});
    }

    function addSubsHandler(newSub) {
        let sublist = state.sublist;
        newSub.id = sublist.length + 1;
        state.sublist.push(newSub);
        setState({ sublist: sublist });
    };

    const navigate = useNavigate();

    return (

        <div>
            <Routes>
                <Route exact path="/" element={<App onDelete={onDelete} sub={state.sublist} />} />
                <Route exact path="/add" element={<Subs navigate={navigate} addSubsHandler={addSubsHandler} />} />
            </Routes>
        </div>
    )
}

export default PhoneDirec;