import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Header';
import Counter from './Counter';
import TimerPanel from './TimerPanel';
import backgroundImages from './backgroundImages';

function App() {
  useEffect(()=>{
    changeBackground();
  },[]);
  function changeBackground(){
    //Select a random background image
  const randomIndex = Math.floor(Math.random()*backgroundImages.length);
  const randomImage = backgroundImages[randomIndex];
  //Set a random background image
  document.body.style.backgroundImage = `url(${randomImage})`;
  }

  const [isRunning, setIsRunning] = useState(false);
  
  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
  };
  const [timerType, setTimerType] = useState('pomodoro');
  const startPomodoro = () => setTimerType('pomodoro');
  const startShortBreak = () => setTimerType('shortBreak');
  const startLongBreak = () => setTimerType('longBreak');

  return (
    <div className="App">
      <Header
      startPomodoro={startPomodoro}
      startShortBreak={startShortBreak}
      startLongBreak={startLongBreak}
      ></Header>
      <div className='container-count-panel'>   
        <Counter timerType={timerType} isRunning={isRunning}></Counter>
        <TimerPanel onStart={handleStart} onReset={handleReset}></TimerPanel> 
      </div>
    </div>
  );
}

export default App;
