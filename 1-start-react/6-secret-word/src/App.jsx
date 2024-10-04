// CSS
import "./App.css";

// REACT
import { useCallback, useEffect, useState } from "react";

// COMPONENTS
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";

// DATA
import { wordsList } from "./data/wordsList";
import EndScreen from "./components/EndScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // FUCNTIONS
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const gameRestart = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
      {gameStage === "end" && <EndScreen gameRestart={gameRestart} />}
    </>
  );
}

export default App;
