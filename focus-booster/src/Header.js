import './Header.css';


function Header(){
    return (
        <div className='header'>
           <div>
            <button className='header-btn'>Add Task!</button>
           </div>
           <div className='header-center'>
           <button className='header-btn'>Pomodoro</button>
           <button className='header-btn'>Short Break</button>
           <button className='header-btn'>Long Break</button>
           </div>
           <div className='header-left'>
               <img src='/images/gear.svg 'alt='gear.svg'></img>
           </div>
        </div>
    );
};
export default Header;