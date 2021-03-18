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

let Instructors = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <button onClick={props.remove}>delete</button>
        </div>
    );
}

let InstructoList = () => {
    let instructors = ["Elie", "Michael", "Matt"];

    let [state, setState] = useState(instructors);

    let handleRemove = (selectedIndex) => {
        let newList = state.filter((name, index) => index !== selectedIndex);

        setState(newList);
        // alert(newList)
    }

    let list = state.map((name, index)=> {
        return(<Instructors
            name={name}
            remove={() => handleRemove(index)}
        />)
    });

    return (
        <div>
            {list}
        </div>
    );
}

export default InstructoList;