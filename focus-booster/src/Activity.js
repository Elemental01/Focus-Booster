import React from "react";
import './Activity.css';
import Typewriter from 'typewriter-effect';
function Activity(){
    return(
        <div className="modal-container">
            <Typewriter 
            options={{
                strings: ['Enter Task Here...'],
                autoStart: true,
                loop: true,}}
            />
        </div>
    )
}
export default Activity;