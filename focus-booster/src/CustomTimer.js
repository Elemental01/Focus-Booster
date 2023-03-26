import "./CustomTimer.css";
import { useState } from "react";

function CustomTimer() {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue(value + 1);
  };
  const decreaseValue = () => {
    setValue(value < 1 ? 1 : value - 1);
  };
  return (
    <div className="custom-timer-cont">
      <div>
        <nav>
          <ul className="custom-time-items">
            <li>Pomodoro</li>
            <li>Short Break</li>
            <li>Long Break</li>
          </ul>
        </nav>
        <hr></hr>
        <div className="change-timer">
          <p>Enter Your Custom Time Here</p>
          <form>
            <div className="value-button" id="decrease" onClick={decreaseValue}>
              -
            </div>
            <input type="number" id="number" value={value} />
            <div className="value-button" id="increase" onClick={increaseValue}>
              +
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CustomTimer;
