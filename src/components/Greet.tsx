import React from "react";

// this informs the type of props passed to typescript...
// A component props is an object, the type name will be equal to an object...
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

// inform the props within parenthesis what "type" it is by specifying the "type" name after a colon(:)...
const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;