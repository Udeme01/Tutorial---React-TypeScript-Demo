import React from 'react';

// define the type here for the props called Name which is an object and exported it to re-use it in "PersonList" component.

export type Name = {
  first: string
  last: string
}

// reused the Name type for the props.
type PersonProps = {
    hisname: Name
}

const Person = (props: PersonProps) => {
  return (
    <div>
      <h3>{props.hisname.first} {props.hisname.last}</h3>
    </div>
  );
}

export default Person;


// This component is about typing an object props