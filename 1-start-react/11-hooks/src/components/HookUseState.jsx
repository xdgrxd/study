import React, { useState } from "react";

const HookUseState = () => {
  let username = "John";
  const [name, setName] = useState("Joseph");

  const changeNames = () => {
    username = "New John";
    setName("New Joseph");
  };

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      <h2>useState</h2>

      <p>Variable: {username}</p>
      <p>useState: {name}</p>

      <button onClick={changeNames}>Change names</button>

      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Test" />
      </form>
      <p>You are {age} years old!</p>
    </div>
  );
};

export default HookUseState;
