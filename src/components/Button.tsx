import React from "react";

type ButtonProps = {
    // An event passed into the click handler,...with a type of "React.MouseEvent/MouseEvent" that's narrowed down to an <HTMLButtonElement>...
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={event => props.handleClick(event, 1)}>Click Me!</button>
    </div>
  );
};

export default Button;

// Typing a click event as a component props.
