import React from "react";
// import propTypes from "prop-types";

let Parent = (props) => {
  return (
    <div>
      <h1>I am the Parent: {props.name}</h1>
    </div>
  )
}

let Child = () => {
  return (
    <div>
    <Parent></Parent>
     <p>Hi there!, I am the child</p>
    </div>
  )
}

Parent.defaultProps = {
  name: 'No name'
}

export default Child;