// CSS
import "./App.css";

// REACT
import { useCallback, useEffect, useState } from "react";

// DATA
import { wordsList } from "./data/wordsList";

// COMPONENTS
import StartScreen from "./components/StartScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);

  return (
    <>
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <GameScreen />}
      {gameStage === "end" && <EndScreen />}
    </>
  );
}

export default App;
