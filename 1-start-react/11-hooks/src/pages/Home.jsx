import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

import HookUseRef from "../components/HookUseRef";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <>
      <HookUseState />
      <hr />
      <HookUseReducer />
      <hr />
      <HookUseEffect />
      <hr />
      <h2>useContext</h2>
      <p>Context value: {contextValue}</p>
      <hr />
      <HookUseRef></HookUseRef>
      <hr />
    </>
  );
};

export default Home;
