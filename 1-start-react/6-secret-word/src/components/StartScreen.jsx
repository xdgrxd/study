import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <button className="startBtn" onClick={startGame}>
        Start game
      </button>
      <p className="bottomBtnText">Click to start game.</p>
    </div>
  );
};

export default StartScreen;
