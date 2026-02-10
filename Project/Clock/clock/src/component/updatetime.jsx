import React, {useState,useEffect} from "react";
function UpdateTime(){
    const [time, setTime] = useState (new Date());    let date = new Date();
    useEffect (()=>{
        const timer = setInterval (()=>{
            setTime(new Date());
        },1000);
        return () =>
            clearInterval(timer);
    },[]);
    return <>
    <center>
        <p>This is the current date : {date.toLocaleDateString()}</p>
        <p>This is the current time : {time.toLocaleTimeString()}</p>
    </center>
    </>
}

export default UpdateTime;