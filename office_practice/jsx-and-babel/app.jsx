class MyComponent extends React.Component {
    render() {
      let style = {
        color: "green"
      }
      let name = this.props.name;

      if (name === 'Tim') {
        name = "Favorite instructor";
      } else if (name === "Matt" || name === "Elie") {
        name = "Very solid instructor"
      }
      return (
        <div>
        <p>Paragraph 1 - {this.props.name}</p>
        <p>{name}</p>
        {name === "student" ? (<p>Welcome student</p>) : this.props.name === "Matt" ? (
          <div>
            <h1 style={style}>This is a mini Component for Matt</h1>
            <h3>Hello, {name}</h3>
          </div>
        ): (
          <div>
            <h1 style={style}>This is a mini Component for Elie</h1>
            <h3>Hello, {name}</h3>
          </div>
        )}
        </div>
      );
    }
  }

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className="primary-text">I am the main Man!!!</h1>
        <MyComponent name="Elie"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
