import { useReducer } from "react";

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  return <div>
    <h2>useReducer</h2>
    <p>Number: {number}</p>
    <button onClick={dispatch}>Change number</button>
  </div>;
};

export default HookUseReducer;
