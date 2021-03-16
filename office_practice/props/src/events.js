import React, { useState, useEffect, useRef } from 'react';

let App = () => {

    let handleClick = () => {
        alert('clicked!');
    }
    return (
        <div>
            <button onClick={() => {handleClick()}}>button</button>
        </div>
    )
}

let EventBinding = () => {

    let [event, setEvent] = useState("");

    let handleEvent = (e) => {
        setEvent(e);
    }
    let action = event ?  event.type : "No action detected!";

    return (
        <div onMouseOver={(e)=>{handleEvent(e)}}
        onMouseOut={(e)=>{handleEvent(e)}}
        onClick={(e)=>{handleEvent(e)}}
        >
            {action}
        </div>
    )
}

export default EventBinding;