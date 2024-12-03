import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";

const Home = () => {
  return (
    <>
      <HookUseState />
      <hr />
      <HookUseReducer />
      <hr />
    </>
  );
};

export default Home;
