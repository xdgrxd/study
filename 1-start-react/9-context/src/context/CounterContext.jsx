// CONTEXT CREATE
// CONTEXT CREATE
// CONTEXT CREATE
import { createContext, useState } from "react";

export const CounterContext = createContext();

// PROVIDER CREATE
// PROVIDER CREATE
// PROVIDER CREATE
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
