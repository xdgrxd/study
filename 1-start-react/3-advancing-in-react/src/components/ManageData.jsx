import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(10);

  return (
    <div>
      <div>
        <p>Value 1: {someData}</p>
        <button onClick={() => (someData = 15)}>Change variable</button>
      </div>

      <div>
        <p>Value 2: {number}</p>
        <button onClick={() => (setNumber(20))}>Change variable</button>
      </div>
    </div>
  );
};

export default ManageData;
