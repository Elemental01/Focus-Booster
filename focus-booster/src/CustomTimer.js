import "./CustomTimer.css";
import { useState, useEffect } from "react";

function CustomTimer({ handleCustomTimeChange }) {
  const [value, setvalue] = useState(0);
  const increaseValue = () => {
    setvalue(value + 1);
  };
  const decreaseValue = () => {
    setvalue(value < 1 ? 1 : value - 1);
  };
  useEffect(() => {
    handleCustomTimeChange(value * 60);
  }, [value, handleCustomTimeChange]);
  return (
    <div className="custom-timer-cont">
      <div>
        <div className="change-timer">
          <form>
            <div className="value-button" id="decrease" onClick={decreaseValue}>
              -
            </div>
            <input type="number" id="number" value={value} readOnly />
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
