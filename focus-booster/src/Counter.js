import React, { useEffect, useState } from "react";
import "./Counter.css";

function Counter({ timerType, isRunning, setTime, time }) {
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    setTime(getInitialTime(timerType));
    setCurrentTime(time);
  }, [timerType, setTime, time]);

  useEffect(() => {
    let countdown;
    if (isRunning) {
      countdown = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (currentTime === 0) {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [isRunning, currentTime]);

  function getInitialTime(timerType) {
    switch (timerType) {
      case "pomodoro":
        return 1500; // 25 minutes
      case "shortBreak":
        return 300; // 5 minutes
      case "longBreak":
        return 900; // 15 minutes
      default:
        return 1500; // default to pomodoro timer
    }
  }

  // calculate minutes and seconds from total time
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  console.log(`Time is ${currentTime}`);
  return (
    <div className="container">
      <div className="container-segment">
        <div className="segment-title">Minutes</div>
        <div className="segment">
          <span className="flip-card" data-minutes-tens>
            <span className="top">{Math.floor(minutes / 10)}</span>
            <span className="bottom">{Math.floor(minutes / 10)}</span>
          </span>
          <span className="flip-card" data-minutes-ones>
            <span className="top">{minutes % 10}</span>
            <span className="bottom">{minutes % 10}</span>
          </span>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Seconds</div>
        <div className="segment">
          <div className="flip-card" data-seconds-tens>
            <div className="top">{Math.floor(seconds / 10)}</div>
            <div className="bottom">{Math.floor(seconds / 10)}</div>
          </div>
          <div className="flip-card" data-seconds-ones>
            <div className="top">{seconds % 10}</div>
            <div className="bottom">{seconds % 10}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
