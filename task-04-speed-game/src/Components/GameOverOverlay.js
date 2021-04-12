import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const GameOverOverlay = (props) => {
  let endText;
  switch (true) {
    case props.finalScore < 10:
      endText = "If you don't SPLASH, you won't evolve.";
      break;
    case props.finalScore > 9 && props.finalScore < 20:
      endText = "HARDEN for now, things will get better.";
      break;
    case props.finalScore > 19:
      endText = "Never let your EMBER burn out.";
  }

  return (
    <div className="overlay">
      <div className="popup">
        <button onClick={closeHandler} className="btn-text close-btn">
          X
        </button>
        <h2>Game Over</h2>
        <p>{endText}</p>
        <p>Your final score is {props.finalScore}</p>
      </div>
    </div>
  );
};

export default GameOverOverlay;
