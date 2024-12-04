import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  return (
    <div>
      <h2>useRef</h2>
      <p>The component render: {numberRef.current} times.</p>

      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counter + 1)}>Counter B</button>
    </div>
  );
};

export default HookUseRef;
