import React from 'react';
import './Header.css';


function Header({startPomodoro, startShortBreak, startLongBreak }) {
  return (
    <div className='header'>
      <div>
        <button className='header-btn show-modal'>Add Task!</button>
      </div>
      <div className='header-center'>
        <button className='header-btn' onClick={startPomodoro}>Pomodoro</button>
        <button className='header-btn' onClick={startShortBreak}>Short Break</button>
        <button className='header-btn' onClick={startLongBreak}>Long Break</button>
      </div>
      <div className='header-left'>
        <img src='/images/gear.svg ' alt='gear.svg'></img>
      </div>
    </div>
  );
}


export default Header;
