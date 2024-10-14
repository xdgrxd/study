// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// HOOK REFACTORING
// HOOK REFACTORING
// HOOK REFACTORING
import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>About</h1>
      <p>Counter value: {counter}</p>

      <ChangeCounter />
    </div>
  );
};

export default About;
