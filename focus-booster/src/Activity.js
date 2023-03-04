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

  return (
    <div className="modal-container">
      <Typewriter options={{ strings: [text], autoStart: true, loop: true }} />
    </div>
  );
}

export default Activity;
