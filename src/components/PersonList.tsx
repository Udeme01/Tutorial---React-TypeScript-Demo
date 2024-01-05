import React from "react";
import { Name } from "./Person";

// define the type for the props called names that's an array of objects.
type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <li>
            {name.first} {name.last}
          </li>
        );
      })}
    </div>
  );
};

export default PersonList;

// This component is about typing an array props(accessing an array props).
