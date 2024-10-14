// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// HOOK REFACTORING
// HOOK REFACTORING
// HOOK REFACTORING
import { useCounterContext } from "../hooks/useCounterContext";

// CONTEXT MORE COMPLEX
import { useTitleColorContext } from "../hooks/useTitleColorContext";

// CONTEXT MORE COMPLEX

const Product = () => {
  const { color, dispatch } = useTitleColorContext();
  const { counter } = useCounterContext();

  // CHANGE COMPLEX CONTEXT
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Product</h1>
      <p>Counter value: {counter}</p>

      <ChangeCounter />

      {/* CHANGE COMPLEX CONTEXT */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Red color</button>
        <button onClick={() => setTitleColor("BLUE")}>Blue color</button>
      </div>
    </div>
  );
};

export default Product;
