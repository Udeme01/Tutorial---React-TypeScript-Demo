import React, { useReducer } from "react";

type CounterState = {
  count: number;
};


// Descriminated Union of Type in TypeScript.
type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

type CounterAction = UpdateAction | ResetAction;


// define initialState to count = 0.
const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 10 })}
      >
        Increment 10
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 10 })}
      >
        decrement 10
      </button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        reset
      </button>
    </div>
  );
};

export default Counter;

// Type the "useReducer()" Hook
