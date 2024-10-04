import "./GameScreen.css";

const GameScreen = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Verify Letter</button>
    </div>
  );
};

export default GameScreen;
