import React, { Component, useState, useEffect, useRef } from "react";

// class AppState extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Michael"
//     };

//     setTimeout(this.changeName.bind(this), 10000);
//   }

//   changeName = () => {
//     this.setState({ name: "Whiskey" });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Our state is {this.state.name}</h2>
//       </div>
//     );
//   }
// }

let AppStateHooks = (props) => {
    const [name, setName] = useState('Kusimo');
    useEffect(() => {
        setTimeout(() => {
            setName('Mojeed');
        }, 10000)
      })

    return (
        <div>
            <h2>Using hooks to namipulate name: {name}</h2>
        </div>
    );
}

let PureFunction = ( props ) => {
    const people = [
        { name: "Michael" },
        { name: "Elie" },
        { name: "Angelina" }
    ];
    // let [ group, setGroup ] = useState(people);
    let [counter, setCount] = useState(1);

    let prevCounter = useRef(counter);

    useEffect(() => {
        prevCounter.current = counter;
    }, [counter]);
    
    // let newGroup = group.slice();

    // let testRef = useRef();
    // console.log(testRef);
    // useEffect(() => {
    //     setTimeout( () => {
    //         newGroup.push({ name: "Mojeed" });
    //         console.log(group);
    //         setGroup(newGroup);
    //     }, 5000);
    // }, []);

    // let persons = newGroup.map((person) => {
    //     return <li key={person.name}>{person.name}</li>
    // });

    // let onePerson = newGroup[0].name;

    return (
        <div>
            {/* {onePerson} */}
            <h1>Now: {counter}, and before: {prevCounter.current}</h1>
            <button onClick={() => setCount(counter + 1)}>next</button>
        </div>
    );
}

let PassingPropChild = (props) => {
    let style = { color: "blue" };

    return (
        <p style={style}>{props.name}</p>
    );
}


let PassingPropParent = (props) => {
    const people = [
        { name: "Michael" },
        { name: "Elie" },
        { name: "Angelina" },
        { name: "Mojeed" }
    ];

    let [ persons, setPersons] = useState(people);
    let addName = () => {
        const newPeople = [...persons];
        newPeople.push({ name: "Tunde" });
        setPersons(newPeople);
        return people;
    }

    useEffect(() => {
        setTimeout(addName, 5000);
    }, []);

    const peeps = persons.map((p) => {
        return <PassingPropChild key={p.name} name={p.name}/>
    });
    return (
        <div>{peeps}</div>
    );
}

export default PassingPropParent;