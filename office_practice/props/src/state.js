import React, { Component, useState, useEffect } from "react";

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
    let [ group, setGoup ] = useState(people);
    let newGroup = group.slice();
    newGroup.push({ name: "Mojeed" });
    useEffect(() => {
        setTimeout(() => {

            setGoup(newGroup);
        }, 5000);
    });
    let persons = group.map((person) => {
        return <li key={person.name}>{person.name}</li>
    });

    return (
        <div>
            {persons}
        </div>
    );
}

export default PureFunction;