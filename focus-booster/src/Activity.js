import React, { useState, useEffect } from "react";
import "./Activity.css";
import Typewriter from "typewriter-effect";

function Activity({ timerType }) {
  const [text, setText] = useState("Enter Task Here...");

  useEffect(() => {
    if (timerType === "shortBreak") {
      setText("Short Break");
    } else if (timerType === "longBreak") {
      setText("Long Break");
    } else {
      setText("Enter Task Here...");
    }
  }, [timerType]);

  function handleModalClick() {
    if (timerType === "pomodoro") {
      const taskName = prompt("Enter your task name:");
      if (taskName) {
        setText(taskName);
        
      }
    }
  } 
  return (
    <div className="modal-container" onClick={handleModalClick}>
      <Typewriter options={{ strings: [text], autoStart: true, loop: true }} />
    </div>
  );
}

export default Activity;
