import { useContext } from "react";
import { CounterContext } from "./hooks/useCounter";
import "./App.css";

function App() {
  const { count } = useContext(CounterContext);

  return <>{count && count}</>;
}

export default App;
