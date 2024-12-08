import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HookUseCallback from "../components/HookUseCallback";
import HookUseRef from "../components/HookUseRef";

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";

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
      <HookUseRef/>
      <hr />
      <HookUseCallback />
      <hr />
      <HookUseMemo />
      <hr />
      <HookUseLayoutEffect />
      <hr />
      <HookUseImperativeHandle />
      <hr />
    </>
  );
};

export default Home;
