import React from 'react';

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
    const inputHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {console.log(event)}
  return (
    <div>
      <input type='text' value = {props.value} onChange={props.handleChange}/>
    </div>
  );
}

export default Input;


// Type the onChange event on an input element...

// Typing event arguments remains the same, doesn't matter if you pass the event as a props or you define it within the component.