import React, { useState } from "react";
import "./TimerPanel.css";

function TimerPanel({ onStart, onReset }) {
  const [isRunning, setIsRunning] = useState(false);
  const audio = new Audio("/sounds/click.mp3");
  const handleStart = () => {
    audio.play();
    setIsRunning(!isRunning);
    onStart();
  };

  const handleReset = () => {
    audio.play();
    setIsRunning(false);
    onReset();
  };

  return (
    <div className="Timer-panel-dwn">
      <button className="Timer-panel-btn" onClick={handleStart}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button className="Timer-panel-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default TimerPanel;
