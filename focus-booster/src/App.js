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
  const [isCustomTimerSelected, setIsCustomTimerSelected] = useState(false);
  const [customTime, setCustomTime] = useState(0);
  const [counterKey, setCounterKey] = useState(0);

  useEffect(() => {
    changeBackground();
  }, []);
  const handleCustomTimeChange = (time) => {
    setCustomTime(time);
  };
  function handleCustomTimerClick() {
    setIsCustomTimerSelected(!isCustomTimerSelected);
  }
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
    setTime(customTime || getInitialTime(timerType));
    setCounterKey((prevKey) => prevKey + 1);
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
          handleCustomTimerClick={handleCustomTimerClick}
        />
        {isCustomTimerSelected ? (
          <CustomTimer handleCustomTimeChange={handleCustomTimeChange} />
        ) : (
          <div className="container-count-panel">
            <Activity timerType={timerType} />
            <Counter
              key={counterKey}
              timerType={timerType}
              isRunning={isRunning}
              setTime={setTime}
              time={customTime || time}
            />
            <TimerPanel
              onStart={handleStart}
              onReset={handleReset}
              startPomodoro={startPomodoro}
              startShortBreak={startShortBreak}
              startLongBreak={startLongBreak}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
