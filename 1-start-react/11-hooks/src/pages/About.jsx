import React from "react";

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>useContext</h2>
      <p>Context value: {contextValue}</p>
      <hr />
    </div>
  );
};

export default About;
