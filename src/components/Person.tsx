import React from 'react';

// define the type here for the props called name which is an object
type PersonProps = {
    hisname: {
        first: string
        last: string
    }
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