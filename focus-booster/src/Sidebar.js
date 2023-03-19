import './Sidebar.css'
function Sidebar({isSidebarVisible,changeBackground}){
    return(
        <div className={`side-nav ${isSidebarVisible ? 'hidden': ''}`}>
            {console.log(`is Sidebar Visible ${isSidebarVisible}`)}
           <ul>
           <hr></hr>
                <li><p className='side-features'>Login</p></li>
                <li><p className='side-features'>Play Music</p></li>
                <hr></hr>
                <li><p className='side-features'>Customize Timer</p></li>
                <li><p className='side-features'onClick={changeBackground}>Change Background</p></li>
                <hr></hr>
            </ul>
            
            <ul>
                <li><p className='side-features'>Suggest Features</p></li>
            </ul>
    
        </div>
    )
}
export default Sidebar;