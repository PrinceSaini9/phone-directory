import { useState,useEffect } from "react";


export const useLocDetails=()=>{
    const [state,setLoc]=useState({});

    useEffect(()=>{
       
        downLoc();
    },[])

    async function downLoc(){
        const res=await fetch("https://ipapi.co/json");
        const data = await res.json();
        setLoc(data);
    }
    return state;
}