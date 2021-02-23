class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Here's my first React App!</h1>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));


// This is not going to work because the browser 
//does not understand JSX, thus, 
//Babel is needed to transpile it to JS