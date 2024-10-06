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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const guessesQty = 3;
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // FUCNTIONS
  const startGame = () => {
    clearLettersStates();

    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((word) => word.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  };

  const verifyLetter = (letter) => {
    const letterLowerCase = letter.toLowerCase();

    if (
      guessedLetters.includes(letterLowerCase) ||
      wrongLetters.includes(letterLowerCase)
    ) {
      return;
    }

    if (letters.includes(letterLowerCase)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letterLowerCase,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        letterLowerCase,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    if (guessedLetters.length === uniqueLetters.length) {

      setScore((actualScore) => (actualScore += 100));

      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  const gameRestart = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[1].name);
  };

  return (
    <>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <GameScreen
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && (
        <EndScreen gameRestart={gameRestart} score={score} />
      )}
    </>
  );
}

export default App;
