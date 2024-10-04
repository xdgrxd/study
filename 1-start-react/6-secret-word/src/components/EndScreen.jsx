import "./EndScreen.css";

const EndScreen = ({ gameRestart }) => {
  return (
    <div>
      <button onClick={gameRestart}>TRY AGAIN</button>
    </div>
  );
};

export default EndScreen;
