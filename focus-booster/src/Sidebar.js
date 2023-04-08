import "./Sidebar.css";
function Sidebar({
  issidebarvisible,
  changeBackground,
  handleCustomTimerClick,
  handleCustomTimeChange,
}) {
  return (
    <div className={`side-nav ${issidebarvisible ? "hidden" : ""}`}>
      <ul>
        <hr></hr>
        <li>
          <p className="side-features">Login</p>
        </li>
        <li>
          <p className="side-features">Play Music</p>
        </li>
        <hr></hr>
        <li>
          <p className="side-features" onClick={handleCustomTimerClick}>
            Custom Timer
          </p>
        </li>
        <li>
          <p className="side-features" onClick={changeBackground}>
            Change Background
          </p>
        </li>
        <hr></hr>
      </ul>

      <ul>
        <li>
          <p className="side-features">Suggest Features</p>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
