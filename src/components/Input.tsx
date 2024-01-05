import React from "react";
import { InputProps } from "./Input.types";

const Input = ({value, handleChange}: InputProps) => {
  const inputHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;

// Type the onChange event on an input element...

// Typing event arguments remains the same, doesn't matter if you pass the event as a props or you define it within the component.

// Replaced props with curly braces and destructured the event argument / props by replacing with "value & handleChange"