function InstructorItem (props) {
  return (
      <li key={props.instructor.id}>
          <h2>{props.instructor.name}</h2>
          <img src={props.instructor.avatar} alt={props.instructor.name}/>
          <p>
              <strong>Hobby:</strong> {props.instructor.hobby}
          </p>
      </li>
  );
}

export default InstructorItem;