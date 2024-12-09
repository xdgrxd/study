import { useRef, useEffect, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("USEDEBUGVALUE HERE - - -");
  useDebugValue("The previous number is: " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
