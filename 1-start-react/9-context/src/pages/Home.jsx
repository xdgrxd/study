// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// HOOK REFACTORING
import { useCounterContext } from "../hooks/useCounterContext";

// CONTEXT MORE COMPLEX
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // CONTEXT MORE COMPLEX
  const { color, dispatch } = useTitleColorContext();

  // CHANGE COMPLEX CONTEXT
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Counter value: {counter}</p>

      {/* CHANGE CONTEXT VALUE */}
      <ChangeCounter />

      {/* CHANGE COMPLEX CONTEXT */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Red color</button>
        <button onClick={() => setTitleColor("BLUE")}>Blue color</button>
      </div>
    </div>
  );
};

export default Home;
