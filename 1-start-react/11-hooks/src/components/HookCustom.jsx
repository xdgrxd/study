import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Actual: {number}</p>
      <p>Previous: {previousValue}</p>

      <button
        onClick={() => {
          setNumber(Math.random());
        }}
      >
        Change now
      </button>
    </div>
  );
};

export default HookCustom;
