import React, { useState } from "react";

const HookUseState = () => {
  let username = "John";
  const [name, setName] = useState("Joseph");

  const changeNames = () => {
    username = "New John";
    setName("New Joseph");
  };

  return (
    <div>
      <h2>useState</h2>

      <p>Variable: {username}</p>
      <p>useState: {name}</p>

      <button onClick={changeNames}>Change names</button>

      <hr />
    </div>
  );
};

export default HookUseState;
