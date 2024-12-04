import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  useEffect(() => {
    console.log("ME");
  }, []);

  const [number, setNumber] = useState(1);

  const addOne = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    console.log("JUST ONE TIME!");
  }, []);

  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("ANOTHER NUMBER CHANGED!!!");
    }
  }, [anotherNumber]);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("HELLO WORLD!");

    //   setAnotherNumber(anotherNumber + 1);
    // }, 2000);

    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={addOne}>Run</button>

      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Change annumber
      </button>
    </div>
  );
};

export default HookUseEffect;
