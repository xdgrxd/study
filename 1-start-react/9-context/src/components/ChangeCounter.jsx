// CHANGE CONTEXT
// CHANGE CONTEXT
// CHANGE CONTEXT
import { useContext, useState } from "react";
import { CounterContext } from "../context/CounterContext";

import React from "react";

const ChangeCounter = () => {
  // CONTEXT IS DELIVERED IN OBJECT (NOT ARRAY [])
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add 1</button>
    </div>
  );
};

export default ChangeCounter;
