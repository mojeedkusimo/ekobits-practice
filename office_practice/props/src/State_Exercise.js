
import { useState, useEffect, useRef } from 'react';
import "./style.css";
let ColorApp = () => {
    let colorArray = [
        {
            id: 1,
            name: 'red',
            status: 'default'
        },
        {
            id: 2,
            name: 'blue',
            status: 'default'
        },
        {
            id: 3,
            name: 'green',
            status: 'default'
        },
        {
            id: 4,
            name: 'orange',
            status: 'default'
        },
        {
            id: 5,
            name: 'yellow',
            status: 'default'
        },
        {
            id: 6,
            name: 'silver',
            status: 'default'
        },
        {
            id: 7,
            name: 'gold',
            status: 'default'
        },
        {
            id: 8,
            name: 'grey',
            status: 'default'
        },
        {
            id: 9,
            name: 'brown',
            status: 'default'
        },
        {
            id: 10,
            name: 'purple',
            status: 'default'
        }
    ]

    let [ colors, setColor ] = useState(colorArray);

    let prevColorObj = useRef(colors);

    let randNum = Math.floor( Math.random() * colorArray.length );

    useEffect(() => {
        prevColorObj.current = colors;

        let lastChange = prevColorObj.current.find((color) => {
            return color.status === 'clicked';
        });
        
        if (lastChange !== undefined) {
            lastChange.status = 'active';
            lastChange.name = colorArray[randNum].name; // why is randNum here thesame as randNum in boxes array below?
        }
    
    },[colors]); // why is it compulsory to have colors here?



    let clickHandler = (id) => {
        let newColors = colors.map((color)=> {
            if (color.id === id) {
                let newColor = {
                    ...color,
                    status: 'clicked'
                }
                return newColor;
            }
            return color;
        });
        setColor(newColors);
    }
    
    let boxes = colors.map((color) => {
        return (
                <div
                key={color.id} 
                className={`blocks`} 
                style={color.status === 'default' ?  {backgroundColor:color.name} : 
                color.status === 'clicked' ? {backgroundColor:colorArray[randNum].name} : 
                {backgroundColor: color.name}} 
                onClick={()=>{clickHandler(color.id)}}>
                </div>
        )
    });
    return (
        <div>
            {boxes}
        </div>
    );
}

export default ColorApp;