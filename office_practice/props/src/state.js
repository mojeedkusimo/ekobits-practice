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

export default AppStateHooks;