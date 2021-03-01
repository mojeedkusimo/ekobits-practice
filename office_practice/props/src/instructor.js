import React from "react";
import instructorItem from "./instructorItem";

function InstructorApp (props) {
    const instList = props.instructors.map((instructor) => {
        return (
            <instructorItem
                key={instructor.id}
                name={instructor.name}
                avatar={instructor.avatar}
                hobby={instructor.hobby}
            />
        )
    })
    return (
        <div>
            <h1>Instructors</h1>
            <ul>{instList}</ul>
        </div>
    );
}

InstructorApp.defaultProps = {
instructors: [
    {
        id: 0,
        name: "Michael",
        avatar:
        "https://www.infschool.com/content/react_fundamentals/michael.jpg",
        hobby: "hiking"
    },
    {
        id: 1,
        name: "Mojeed",
        avatar: "https://www.infschool.com/content/react_fundamentals/matt.jpg",
        hobby: "math"
    },
    {
        id: 2,
        name: "Elie",
        avatar: "https://www.infschool.com/content/react_fundamentals/elie.jpg",
        hobby: "cello"
    },
    {
        id: 3,
        name: "Whiskey",
        avatar:
        "https://www.infschool.com/content/react_fundamentals/whiskey.jpg",
        hobby: "napping"
    }
    ]
    
}

export default InstructorApp;