import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Counter value: {counter}</p>

      {/* CHANGE CONTEXT VALUE */}
      {/* CHANGE CONTEXT VALUE */}
      {/* CHANGE CONTEXT VALUE */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
