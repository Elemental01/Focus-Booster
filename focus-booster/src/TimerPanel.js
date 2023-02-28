import React, { useState } from "react";
import "./TimerPanel.css";

function TimerPanel({ onStart, onReset }) {
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(!isRunning);
    onStart();
  };

  const handleReset = () => {
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
