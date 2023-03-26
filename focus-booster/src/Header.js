import React, { useState } from "react";
import "./Header.css";
import Sidebar from "./Sidebar";

function Header({
  startPomodoro,
  startShortBreak,
  startLongBreak,
  handleModalClick,
  changeBackground,
}) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }
  return (
    <div className="header">
      <div
        className={`header-left ${isSidebarVisible ? "shift-right" : ""}`}
        isSidebarVisible={isSidebarVisible}
        changeBackground={changeBackground}
      >
        <img
          src="/images/gear.svg"
          alt="gear.svg"
          onClick={toggleSidebar}
        ></img>

        {isSidebarVisible && <Sidebar changeBackground={changeBackground} />}
      </div>
      <div className="header-center">
        <button className="header-btn" onClick={startPomodoro}>
          Pomodoro
        </button>
        <button className="header-btn" onClick={startShortBreak}>
          Short Break
        </button>
        <button className="header-btn" onClick={startLongBreak}>
          Long Break
        </button>
      </div>

      <div>
        <button className="header-btn show-modal" onClick={handleModalClick}>
          Add Task!
        </button>
      </div>
    </div>
  );
}

export default Header;
