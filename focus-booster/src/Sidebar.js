import "./Sidebar.css";
function Sidebar({ issidebarvisible, changeBackground }) {
  return (
    <div className={`side-nav ${issidebarvisible ? "hidden" : ""}`}>
      {console.log(`is Sidebar Visible ${issidebarvisible}`)}
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
          <p className="side-features">Custom Timer</p>
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
