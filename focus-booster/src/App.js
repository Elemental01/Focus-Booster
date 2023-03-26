import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Counter from "./Counter";
import TimerPanel from "./TimerPanel";
import backgroundImages from "./backgroundImages";
import Activity from "./Activity";
import CustomTimer from "./CustomTimer";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState("pomodoro");
  const [time, setTime] = useState(getInitialTime(timerType));

  useEffect(() => {
    changeBackground();
  }, []);

  function changeBackground() {
    //Select a random background image
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    //Set a random background image
    document.body.style.backgroundImage = `url(${randomImage})`;
  }

  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(getInitialTime(timerType));
  };

  const startPomodoro = () => setTimerType("pomodoro");
  const startShortBreak = () => setTimerType("shortBreak");
  const startLongBreak = () => setTimerType("longBreak");

  function handleModalClick() {
    document.querySelector(".modal-container").click();
  }

  function getInitialTime(timerType) {
    switch (timerType) {
      case "pomodoro":
        return 1500;
      case "shortBreak":
        return 300;
      case "longBreak":
        return 900;
      default:
        return 1500;
    }
  }

  return (
    <div className="App">
      <div>
        <Header
          startPomodoro={startPomodoro}
          startShortBreak={startShortBreak}
          startLongBreak={startLongBreak}
          handleModalClick={handleModalClick}
          changeBackground={changeBackground}
        />

        <div className="container-count-panel">
          <Activity timerType={timerType}></Activity>
          <Counter
            timerType={timerType}
            isRunning={isRunning}
            setTime={setTime}
            time={time}
          />
          <TimerPanel
            onStart={handleStart}
            onReset={handleReset}
            startPomodoro={startPomodoro}
            startShortBreak={startShortBreak}
            startLongBreak={startLongBreak}
          />
        </div>
        <CustomTimer></CustomTimer>
      </div>
    </div>
  );
}

export default App;
