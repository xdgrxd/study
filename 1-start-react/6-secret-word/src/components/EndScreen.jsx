import "./EndScreen.css";

const EndScreen = ({ gameRestart, score }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>Your score is <span className="score">{score}</span></h2>
      <button onClick={gameRestart}>TRY AGAIN</button>
    </div>
  );
};

export default EndScreen;
