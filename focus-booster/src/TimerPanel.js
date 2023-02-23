import "./TimerPanel.css";

function TimerPanel(props) {
  const { resetTimer } = props;

  const handleResetClick = () => {
    resetTimer();
  };

  return (
    <div className="Timer-panel-dwn">
        <button className="Timer-panel-btn" onClick={handleResetClick} >Start</button>
      <button className="Timer-panel-btn" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
}

export default TimerPanel;
